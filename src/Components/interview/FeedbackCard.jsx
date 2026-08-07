import { useSelector } from "react-redux";

const FeedbackCard = ({
  index,
  strengths,
  weaknesses,
  improvements,
  idealAnswer,
}) => {
  const { questions } = useSelector((store) => store.interview);

  if (!questions.length) return null;

  const currentQuestion = questions[index];

  return (
    <div className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
        <h2 className="text-xl font-bold text-gray-900">
          Question {index + 1}
        </h2>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          AI Feedback
        </span>
      </div>

      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
          Question
        </p>

        <p className="rounded-lg bg-gray-50 p-4 text-gray-800">
          {currentQuestion.question}
        </p>
      </div>

      <div className="mb-5 rounded-lg border border-green-200 bg-green-50 p-4">
        <h3 className="mb-2 font-semibold text-green-700">✅ Strengths</h3>

        <p className="text-gray-700">{strengths}</p>
      </div>

      <div className="mb-5 rounded-lg border border-red-200 bg-red-50 p-4">
        <h3 className="mb-2 font-semibold text-red-700">❌ Weaknesses</h3>

        <p className="text-gray-700">{weaknesses}</p>
      </div>

      <div className="mb-5 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
        <h3 className="mb-2 font-semibold text-yellow-700">💡 Improvements</h3>

        <p className="text-gray-700 ">{improvements}</p>
      </div>

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
        <h3 className="mb-2 font-semibold text-blue-700">📘 Ideal Answer</h3>

        <p className="whitespace-pre-line leading-7 text-gray-700">
          {idealAnswer}
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
