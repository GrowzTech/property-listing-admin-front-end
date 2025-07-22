import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";
import { initialState } from "./propertySlice";

const selectSlice = (state: RootState) => state?.property || initialState;

export const selectProperties = createSelector(
  [selectSlice],
  (state) => state.property
);

export const selectPropertyLoading = createSelector(
  [selectSlice],
  (state) => state.loading
);

export const selectPropertyError = createSelector(
  [selectSlice],
  (state) => state.error
);