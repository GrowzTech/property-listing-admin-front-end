import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";
import { initialState } from "./loginSlice";

const selectSlice = (state: RootState) => state?.login || initialState;
export const selectIsLoggingIn = createSelector(
  [selectSlice],
  (state) => state.isLoggedIn
);

export const selectToken = createSelector(
  [selectSlice],
  (state) => state.token
);
