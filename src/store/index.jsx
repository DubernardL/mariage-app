import { combineReducers, configureStore } from "@reduxjs/toolkit";
import guestsReducer from "./guestsReducer";
import guestsFromGuestReducer from "./guestsFromGuestReducer";

const reducer = combineReducers({ guestsReducer, guestsFromGuestReducer });

const rootReducer = (state, action) => reducer(state, action);

const store = configureStore({
  reducer: rootReducer,
});

export default store;
