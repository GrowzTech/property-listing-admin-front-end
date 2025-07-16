import { createSlice } from "@reduxjs/toolkit";
import { loginState } from "./type";

export const initialState: loginState = {
  email: "",
  password: "",
  isLoggedIn: false,
  token: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    setIsLoggingIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { actions: loginActions } = loginSlice;
export default loginSlice.reducer;
