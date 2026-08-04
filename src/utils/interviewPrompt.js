export const generateInterviewPrompt = (formData) => {
    const {questions, difficulty, interviewType, topic} = formData;
  return `
Generate ${questions} ${difficulty} level ${interviewType} interview questions on ${topic}.

Return ONLY valid JSON in the following format:

[
  {
    "id": 1,
    "question": "Question text",
    "answer": "Correct answer"
  }
]

Rules:
- Return only JSON.
- Do not wrap the response in markdown.
- Do not add explanations outside the JSON.
`;
};