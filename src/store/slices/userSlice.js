import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,

  reducers: {
    addUserInfo: (state, action) => {
      return action.payload;
    },

    removeUserInfo: (state, action) => {
      return null;
    },
  },
});
