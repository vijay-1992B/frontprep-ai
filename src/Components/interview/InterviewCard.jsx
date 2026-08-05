import Button from "../common/Button";
import { useState } from "react";
import {
  INITIAL_FORM_DATA,
  INTERVIEW_TOPICS,
  QUESTION_COUNTS,
  DIFFICULTY_LEVELS,
  INTERVIEW_TYPES,
} from "../../constants/interviewOptions";

import { generateInterviewPrompt } from "../../utils/interviewPrompt";
import { generateGeminiResponse } from "../../services/geminiService";
import { useDispatch } from "react-redux";
import { startInterview } from "../../store/slices/interviewSlice";
import { useNavigate } from "react-router-dom";

const InterviewCard = () => {
  const [formData, setFormData] = useState({ ...INITIAL_FORM_DATA });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Generate interview based on selected options
  const handleSubmit = async (e) => {
    e.preventDefault();

    const prompt = generateInterviewPrompt(formData);

    try {
      const jsonString = await generateGeminiResponse(prompt);
      const data = JSON.parse(jsonString);
      dispatch(startInterview(data));
      navigate("/dashboard/mock-interview/session");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="text-center">
        <h1 className="text-3xl font-bold ">Mock Interview</h1>
        <h2 className="mt-4 text-xl font-semibold">Create Your Interview </h2>
        <p className="text-sm text-gray-500">
          Choose your interview preferences before starting.
        </p>
      </div>
      <form className="flex flex-col mt-6 gap-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="topic"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Interview Topic
          </label>
          <select
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            id="topic"
            className="w-full rounded-md border border-gray-300 
          px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          >
            {INTERVIEW_TOPICS.map((topic) => (
              <option key={topic.value} value={topic.value}>
                {topic.label}
              </option>
            ))}
          </select>
        </div>
        <fieldset>
          <legend className="mb-2 text-sm font-medium text-gray-700">
            Difficulty
          </legend>
          <div className="flex gap-8 mt-2">
            {DIFFICULTY_LEVELS.map((level) => (
              <label className="flex items-center gap-2" key={level.value}>
                <input
                  type="radio"
                  name="difficulty"
                  value={level.value}
                  checked={formData.difficulty === level.value}
                  onChange={handleChange}
                />
                {level.label}
              </label>
            ))}
          </div>
        </fieldset>
        <div>
          <label
            htmlFor="questions"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Number of Questions
          </label>
          <select
            name="questions"
            id="questions"
            value={formData.questions}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 
          px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          >
            {QUESTION_COUNTS.map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
        </div>
        <fieldset>
          <legend className="mb-2 text-sm font-medium text-gray-700">
            Interview Type
          </legend>
          <div className="flex gap-8 mt-2">
            {INTERVIEW_TYPES.map((type) => (
              <label className="flex items-center gap-2" key={type.value}>
                <input
                  type="radio"
                  name="interviewType"
                  value={type.value}
                  checked={formData.interviewType === type.value}
                  onChange={handleChange}
                />
                {type.label}
              </label>
            ))}
          </div>
        </fieldset>

        <Button type="submit" style="mt-8 w-full">
          Start Interview
        </Button>
        <p className="text-center text-sm text-gray-500">
          💡 AI will generate interview questions based on your selections.
        </p>
      </form>
    </div>
  );
};

export default InterviewCard;
