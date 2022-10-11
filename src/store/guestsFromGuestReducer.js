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
    updateGuestsFromGuest: (state, action) => {
      const newState = [...state];
      const index = newState.findIndex((el) => el?.id === action.payload.id);
      newState[index] = action.payload;
      return newState;
    },
    deleteGuestFromStore: (state, action) => {
      const newState = [...state];
      const index = newState.findIndex((el) => el?.id === action.payload);
      newState.splice(index, 1);
      return newState;
    },
    resetGuest: () => {
      return {};
    },
  },
});

export const getConsultationFields = (state) => state.guestsFromGuestReducer;

export const {
  addGuestsFromGuest,
  replaceGuestsFromGuest,
  resetGuest,
  updateGuestsFromGuest,
  deleteGuestFromStore,
} = guestsFromGuestSlice.actions;

export default guestsFromGuestSlice.reducer;
