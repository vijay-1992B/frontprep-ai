import Button from "./common/Button";

const InterviewCard = () => {
  return (
    <div className="max-w-lg mx-auto rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="text-center">
        <h1 className="text-3xl font-bold ">Mock Interview</h1>
        <h3 className="font-semibold text-lg mt-6">Create Your Interview </h3>
        <p className="text-sm text-gray-500">
          Choose your interview preferences before starting.
        </p>
      </div>
      <form className="flex flex-col mt-6 gap-6">
        <div>
          <label className="block my-2">Interview Topic</label>
          <select
            className="w-full rounded-md border border-gray-300 
          px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="html">HTML</option>
            <option value="javascript">Javascript</option>
            <option value="css">CSS</option>
            <option value="react">React</option>
          </select>
        </div>
        <div>
          <p>Difficulty</p>
          <div className="flex gap-8 mt-2">
            <label className="flex items-center gap-2">
              <input className="" type="radio" name="difficulty" value="Easy" />
              Easy
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="difficulty" value="Medium" />
              Medium
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="difficulty" value="Hard" />
              Hard
            </label>
          </div>
        </div>
        <div>
          <label>Number of Questions</label>
          <select
            className="w-full rounded-md border border-gray-300 
          px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>5</option>
            <option>10</option>
            <option>15</option>
          </select>
        </div>
        <div>
          <p>Interview Type</p>
          <div className="flex gap-8 mt-2">
            <label className="flex items-center gap-2 ">
              <input type="radio" name="interview-type" value="technical" />
              Technical
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="interview-type" value="behavioral" />
              Behavioral
            </label>
          </div>
        </div>

        <Button style="mt-8 w-full">Start Interview</Button>
        <p className="text-center text-sm text-gray-500">
          💡 AI will generate interview questions based on your selections.
        </p>
      </form>
    </div>
  );
};

export default InterviewCard;
