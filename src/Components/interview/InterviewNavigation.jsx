import { useDispatch, useSelector } from "react-redux";
import Button from "../common/Button";
import {
  nextQuestion,
  previousQuestion,
  setError,
  setFeedback,
  startLoading,
  stopLoading,
} from "../../store/slices/interviewSlice";
import { useNavigate } from "react-router-dom";
import { generateFeedbackPrompt } from "../../utils/feedbackPrompt";
import { generateGeminiResponse } from "../../services/geminiService";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

const InterviewNavigation = ({ current, total }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, currentQuestionIndex, answers, loading, interviewId } =
    useSelector((store) => store.interview);

  const handlePrevious = () => {
    dispatch(previousQuestion());
  };

  const handleNext = async () => {
    try {
      const currentQuestionId = questions[currentQuestionIndex].id;
      const answer = answers[currentQuestionIndex];

      const user = auth.currentUser;

      if (!user) {
        throw new Error("User is not authenticated");
      }

      const questionRef = doc(
        db,
        "users",
        user.uid,
        "interviews",
        interviewId,
        "questions",
        String(currentQuestionId),
      );

      await updateDoc(questionRef, {
        userAnswer: answer,
      });

      dispatch(nextQuestion());
    } catch (error) {
      console.error("Failed to save answer:", error);
    }
  };

  const handleFinish = async () => {
    dispatch(startLoading());

    try {
      const user = auth.currentUser;

      if (!user) {
        throw new Error("User is not authenticated");
      }

      // Save final answer
      const currentQuestionId = questions[currentQuestionIndex].id;
      const answer = answers[currentQuestionIndex];

      const questionRef = doc(
        db,
        "users",
        user.uid,
        "interviews",
        interviewId,
        "questions",
        String(currentQuestionId),
      );

      await updateDoc(questionRef, {
        userAnswer: answer,
      });

      // Generate AI feedback
      const prompt = generateFeedbackPrompt(questions, answers);
      const response = await generateGeminiResponse(prompt);
      const feedback = JSON.parse(response);

      await Promise.all(
        feedback.feedback.map((item) => {
          const questionRef = doc(
            db,
            "users",
            user.uid,
            "interviews",
            interviewId,
            "questions",
            String(item.questionId),
          );

          return updateDoc(questionRef, {
            strengths: item.strengths,
            weaknesses: item.weaknesses,
            improvements: item.improvements,
            idealAnswer: item.idealAnswer,
          });
        }),
      );

      // Update interview with overall feedback
      const interviewRef = doc(
        db,
        "users",
        user.uid,
        "interviews",
        interviewId,
      );

      await updateDoc(interviewRef, {
        score: feedback.score,
        summary: feedback.summary,
        status: "completed",
        completedAt: new Date(),
      });

      dispatch(setFeedback(feedback));
      navigate("/dashboard/interview-feedback");
    } catch (error) {
      console.error(error);

      dispatch(
        setError("Failed to generate interview feedback. Please try again."),
      );
    } finally {
      dispatch(stopLoading());
    }
  };

  return (
    <div className="flex items-center justify-between mt-8">
      <Button
        type="button"
        disabled={current === 0}
        onClick={handlePrevious}
        variant="secondary"
      >
        Previous
      </Button>
      {current < total - 1 ? (
        <Button type="button" onClick={handleNext}>
          Next
        </Button>
      ) : (
        <Button type="button" disabled={loading} onClick={handleFinish}>
          Finish Interview
        </Button>
      )}
    </div>
  );
};

export default InterviewNavigation;
