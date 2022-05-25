import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    user: cardReducer,
  },
});
