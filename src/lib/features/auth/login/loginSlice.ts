import { createSlice } from "@reduxjs/toolkit";
import { loginState } from "./type";
import { getTokenFromLocalStorage } from "@/lib/api/utils";

export const initialState: loginState = {
  user: {
    email: "",
    firstName: "",
    lastName: "",
    role: "",
    _id: "",
    fullName: "",
  },
  isLoggedIn: false,
  token: getTokenFromLocalStorage(),
  isSendingResetLink: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
    },
    setIsLoggingIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    LogOut: (state) => {
      state.token = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
    },
    forgotPassword: (state, action) => {
      state.isSendingResetLink = true;
    },
  },
});

export const { actions: loginActions } = loginSlice;
export default loginSlice.reducer;
