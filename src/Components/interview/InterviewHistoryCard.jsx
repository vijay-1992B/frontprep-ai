const InterviewHistoryCard = ({
  topic,
  difficulty,
  questionCount,
  interviewType,
  score,
  status,
  completedAt,
}) => {
  const formattedDate = completedAt?.toDate().toLocaleDateString();

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{topic}</h2>

          <p className="mt-1 text-sm text-gray-500">
            {difficulty} · {interviewType} · {questionCount} questions
          </p>
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          {status}
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
        <div>
          {status === "completed" ? (
            <>
              <p className="text-sm text-gray-500">Score</p>
              <p className="text-2xl font-bold">{score}%</p>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-500">Score</p>
              <p className="text-sm font-medium text-gray-500">Not completed</p>
            </>
          )}
        </div>

        <div className="text-right">
          {status === "completed" ? (
            <>
              <p className="text-sm text-gray-500">Completed</p>
              <p>{formattedDate}</p>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-500">Started</p>
              <p>In progress</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default InterviewHistoryCard;
