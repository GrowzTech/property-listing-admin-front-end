import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PropertyState, Property } from "./type";

export const initialState: PropertyState = {
  property: [],
  loading: false,
  error: null,
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    fetchproperty: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchpropertySuccess: (state, action: PayloadAction<Property[]>) => {
      state.loading = false;
      state.property = action.payload;
    },
    fetchSingleproperty: (state) => {
      state.loading = false;
    },
    fetchSinglePropertySuccess: (state) => {
      state.loading = false;
    },

    fetchpropertyFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    addProperty: (state, action: PayloadAction<Omit<Property, "_id">>) => {
      state.loading = true;
      state.error = null;
    },
    addPropertySuccess: (state, action: PayloadAction<Property>) => {
      state.loading = false;
      state.property.push(action.payload);
    },
    addPropertyFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateProperty: (state, action: PayloadAction<Property>) => {
      state.loading = true;
      state.error = null;
    },
    updatePropertySuccess: (state, action: PayloadAction<Property>) => {
      state.loading = false;
      const idx = state.property.findIndex((p) => p._id === action.payload._id);
      if (idx !== -1) {
        state.property[idx] = action.payload;
      }
    },
    updatePropertyFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteProperty: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = null;
    },
    deletePropertySuccess: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.property = state.property.filter((p) => p._id !== action.payload);
    },
    deletePropertyFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { actions: propertyActions } = propertySlice;
export default propertySlice.reducer;
