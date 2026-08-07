const FeedbackHeader = ({ score, summary }) => {
  return (
    <div className="mb-8 rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          🎉 Interview Complete
        </h1>

        <p className="mt-2 text-gray-500">
          Here's your AI-powered interview feedback.
        </p>
      </div>

      <div className="my-8 flex justify-center">
        <div className="flex h-32 w-32 items-center justify-center rounded-full border-8 border-blue-500 bg-blue-50">
          <div className="text-center ">
            <p className="text-3xl font-bold text-blue-600">{score}</p>
            <p className="text-sm text-gray-500">/100</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
        <h2 className="mb-3 text-lg font-semibold text-gray-800">
          📝 Overall Summary
        </h2>

        <p className="leading-7 text-gray-700">{summary}</p>
      </div>
    </div>
  );
};

export default FeedbackHeader;
