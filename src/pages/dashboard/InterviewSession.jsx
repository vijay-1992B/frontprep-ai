import { useSelector } from "react-redux";
import QuestionCard from "../../components/interview/QuestionCard";
import ProgressBar from "../../components/interview/ProgressBar";
import AnswerInput from "../../components/interview/AnswerInput";
import InterviewNavigation from "../../components/interview/InterviewNavigation";
import LoadingPage from "../../components/common/LoadingPage";
import { Navigate } from "react-router-dom";
import ErrorMessage from "../../components/common/ErrorMessage";

const InterviewSession = () => {
  const { questions, currentQuestionIndex, answers, loading, error } =
    useSelector((store) => store.interview);

  if (!questions.length) {
    return <Navigate to="/dashboard/mock-interview" replace />;
  }

  if (loading) {
    return (
      <LoadingPage
        title="Analyzing Your Interview"
        message="AI is reviewing your answers and preparing personalized feedback..."
      />
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="space-y-6">
      {error && <ErrorMessage message={error} />}
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
