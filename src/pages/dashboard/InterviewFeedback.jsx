import { useDispatch, useSelector } from "react-redux";
import FeedbackHeader from "../../components/interview/FeedbackHeader";
import FeedbackCard from "../../components/interview/FeedbackCard";
import Button from "../../components/common/Button";
import { resetInterview } from "../../store/slices/interviewSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const InterviewFeedback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const aiFeedback = useSelector((store) => store.interview.feedback);

  useEffect(() => {
    if (!aiFeedback) {
      navigate("/dashboard/mock-interview");
    }
  }, [aiFeedback, navigate]);

  if (!aiFeedback) {
    return null;
  }
  const { score, summary, feedback } = aiFeedback;

  const handleResetButton = () => {
    dispatch(resetInterview());
    navigate("/dashboard/mock-interview");
  };

  return (
    <div className="mx-auto max-w-5xl ">
      <FeedbackHeader score={score} summary={summary} />
      {feedback.map((feedback, index) => (
        <FeedbackCard key={feedback.questionId} index={index} {...feedback} />
      ))}
      <div className="mt-8 flex justify-center">
        <Button onClick={handleResetButton}>Start New Interview</Button>
      </div>
    </div>
  );
};

export default InterviewFeedback;
