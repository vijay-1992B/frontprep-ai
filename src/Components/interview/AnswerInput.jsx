import { useDispatch } from "react-redux";
import { saveAnswer } from "../../store/slices/interviewSlice";

const AnswerInput = ({ questionIndex, value }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(saveAnswer({ questionIndex, answer: e.target.value }));
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm ">
      <label
        htmlFor="answer"
        className="mb-3 block text-sm font-semibold text-gray-700"
      >
        Your Answer
      </label>
      <textarea
        onChange={handleChange}
        value={value}
        id="answer"
        placeholder="Write your answer here..."
        className="w-full min-h-40  rounded-md border border-gray-300 px-4 py-3 outline-none resize-none transition focus:ring-2 focus:ring-blue-500"
      />
      <p className="mt-2 text-xs text-gray-500">
        Answers are saved automatically.
      </p>
    </div>
  );
};

export default AnswerInput;
