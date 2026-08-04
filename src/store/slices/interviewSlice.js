import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  answers: [],
  loading: false,
  error: null,
};

const interviewSlice = createSlice({
  name: "interview",
  initialState,
  reducers: {
    startInterview: (state, action) => {
      state.questions = action.payload;
      state.currentQuestionIndex = 0;
      state.answers = [];
      state.error = null;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex++;
      }
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
      }
    },
    saveAnswer: (state, action) => {},
    resetInterview: () => {
      return { ...initialState };
    },
  },
});

export const {
  startInterview,
  nextQuestion,
  previousQuestion,
  saveAnswer,
  resetInterview,
} = interviewSlice.actions;

export default interviewSlice.reducer;
