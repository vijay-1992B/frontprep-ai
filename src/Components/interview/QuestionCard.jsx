const QuestionCard = ({ question, current, total }) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm space-y-8">
      <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
        Question {current} of {total}
      </span>

      <h2 className=" text-3xl font-semibold leading-relaxed">
        {question.question}
      </h2>
    </div>
  );
};

export default QuestionCard;
