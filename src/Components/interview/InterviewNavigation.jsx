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

const InterviewNavigation = ({ current, total }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, answers, loading } = useSelector(
    (store) => store.interview,
  );

  const handlePrevious = () => {
    dispatch(previousQuestion());
  };

  const handleNext = () => {
    dispatch(nextQuestion());
  };

  const handleFinish = async () => {
    dispatch(startLoading());
    try {
      const prompt = generateFeedbackPrompt(questions, answers);
      const response = await generateGeminiResponse(prompt);
      const feedback = JSON.parse(response);
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
