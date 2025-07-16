import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";
import { initialState } from "./loginSlice";

const selectSlice = (state: RootState) => state?.login || initialState;
export const selecIsLoggingIn = createSelector(
  [selectSlice],
  (state) => state.isLoggedIn
);
