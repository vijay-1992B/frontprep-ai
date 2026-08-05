import { useSelector } from "react-redux";
import QuestionCard from "../../components/interview/QuestionCard";
import ProgressBar from "../../components/interview/ProgressBar";
import AnswerInput from "../../components/interview/AnswerInput";
import InterviewNavigation from "../../components/interview/InterviewNavigation";

const InterviewSession = () => {
  const { questions, currentQuestionIndex, answers } = useSelector(
    (store) => store.interview,
  );

  const currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion) {
    return <p>No interview found.</p>;
  }

  return (
    <div className="space-y-6">
      <ProgressBar
        current={currentQuestionIndex + 1}
        total={questions.length}
      />
      <QuestionCard
        question={currentQuestion}
        current={currentQuestionIndex + 1}
        total={questions.length}
      />
      <AnswerInput
        questionIndex={currentQuestionIndex}
        value={answers[currentQuestionIndex] || ""}
      />
      <InterviewNavigation
        current={currentQuestionIndex}
        total={questions.length}
      />
    </div>
  );
};

export default InterviewSession;
