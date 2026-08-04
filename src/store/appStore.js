import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import interviewSlice from "./slices/interviewSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    interview: interviewSlice,
  },
});

export default appStore;
