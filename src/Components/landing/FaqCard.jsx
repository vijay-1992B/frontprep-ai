const FaqCard = ({ question, answer }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-6">
      <p className="font-semibold text-lg">{question}</p>
      <p className="text-gray-600 mt-2 leading-7">{answer}</p>
    </div>
  );
};

export default FaqCard;
