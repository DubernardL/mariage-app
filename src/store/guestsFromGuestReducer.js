import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const guestsFromGuestSlice = createSlice({
  name: "guestsFromGuestReducer",
  initialState,
  reducers: {
    replaceGuestsFromGuest: (state, action) => {
      return [...action.payload];
    },
    addGuestsFromGuest: (state, action) => {
      return [...state, action.payload];
    },
    resetGuest: () => {
      return {};
    },
  },
});

export const { addGuestsToStore, replaceGuestsFromGuest, resetGuest } =
  guestsFromGuestSlice.actions;

export default guestsFromGuestSlice.reducer;
