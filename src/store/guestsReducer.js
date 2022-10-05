import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPresent: null,
  isChild: false,
  nightPreference: "no",
  nights: [],
  meals: [],
};

const guestsSlice = createSlice({
  name: "guestsReducer",
  initialState,
  reducers: {
    addGuestsToStore: (state, action) => {
      return action.payload;
    },
    resetGuest: () => {
      return {};
    },
  },
});

export const { addGuestsToStore, resetGuest } = guestsSlice.actions;

export default guestsSlice.reducer;
