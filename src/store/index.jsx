import { combineReducers, configureStore } from "@reduxjs/toolkit";
import guestsReducer from "./guestsReducer";
import guestsFromGuestReducer from "./guestsFromGuestReducer";
import { apiMiddleware } from "../api";

const reducer = combineReducers({ guestsReducer, guestsFromGuestReducer });

const rootReducer = (state, action) => reducer(state, action);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
});

export default store;
