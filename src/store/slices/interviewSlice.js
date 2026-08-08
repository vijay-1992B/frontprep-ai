import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  answers: [],
  loading: false,
  error: null,
  feedback: null,
};

const interviewSlice = createSlice({
  name: "interview",
  initialState,
  reducers: {
    startInterview: (state, action) => {
      state.questions = action.payload;
      state.currentQuestionIndex = 0;
      state.answers = Array(action.payload.length).fill("");
      state.feedback = null;
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
    saveAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.answers[questionIndex] = answer;
    },
    resetInterview: () => {
      return { ...initialState };
    },
    setFeedback: (state, action) => {
      state.feedback = action.payload;
    },
    startLoading: (state) => {
      state.loading = true;
      state.error = null;
    },

    stopLoading: (state) => {
      state.loading = false;
    },

    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  startInterview,
  nextQuestion,
  previousQuestion,
  saveAnswer,
  resetInterview,
  setFeedback,
  startLoading,
  stopLoading,
  setError,
} = interviewSlice.actions;

export default interviewSlice.reducer;
