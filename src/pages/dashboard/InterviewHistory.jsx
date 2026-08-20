import { useEffect, useState } from "react";
import InterviewHistoryCard from "../../components/interview/InterviewHistoryCard";
import { getUserInterviews } from "../../services/firestore";

const InterviewHistory = () => {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const data = await getUserInterviews();
        setInterviews(data);
        console.log("User interviews:", data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInterviews();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Interview History</h1>
      <p className="mt-2 text-gray-500">
        View your previous interview sessions and feedback.
      </p>
      {interviews.map((data) => (
        <InterviewHistoryCard key={data.id} {...data} />
      ))}
    </div>
  );
};

export default InterviewHistory;
