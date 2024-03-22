import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authValue: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

// Action creators are generated for each case reducer function
export const { authValue } = authSlice.actions;

export default authSlice.reducer;
