import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPresent: null,
  isChild: false,
  nightPreference: "no",
  nights: [],
  meals: [],
  price: 0,
  additionalGuests: 0,
};

const guestsSlice = createSlice({
  name: "guestsReducer",
  initialState,
  reducers: {
    updateGuestStore: (state, action) => {
      return action.payload;
    },
    resetGuest: () => {
      return {};
    },
  },
});

export const getGuest = (state) => state.guestsReducer;
export const { resetGuest, updateGuestStore } = guestsSlice.actions;

export default guestsSlice.reducer;
