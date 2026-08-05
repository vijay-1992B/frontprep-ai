export const generateFeedbackPrompt = (questions, answers) => {
  const interviewData = questions
    .map((question, index) => {
      return `
Question ${index + 1}: ${question.question}

Correct Answer:
${question.answer}

User Answer:
${answers[index]}
`;
    })
    .join("\n");

  return `
You are an expert frontend interviewer.

Evaluate the following interview answers.

${interviewData}

Return ONLY valid JSON in this format:

{
  "score": 0,
  "summary": "",
  "feedback": [
    {
      "questionId": 1,
      "rating": 0,
      "strengths": "",
      "improvements": "",
      "idealAnswer": "",
      "weaknesses": "",
    }
  ]
}

Rules:
- Overall score must be between 0 and 100.
- Each question rating must be between 0 and 10.
- Return only JSON.
- Do not wrap the response in markdown.
- Do not add explanations outside the JSON.
`;
};
