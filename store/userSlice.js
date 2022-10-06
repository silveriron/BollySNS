import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    isLogin: (state, action) => {
      if (!action.payload) {
        state.name = null;
        state.email = null;
        state.uid = null;
        state.photoURL = null;
      } else {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.uid = action.payload.uid;
        state.photoURL = action.payload.photoURL;
      }
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
