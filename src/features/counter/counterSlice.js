import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  id: 0,
};

console.log(initialState);
export const cardSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getapi: (state, action) => {
      // console.log(action.payload);
      state.value.push(action.payload);
    },
    getid: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { getapi, getid } = cardSlice.actions;

export default cardSlice.reducer;
