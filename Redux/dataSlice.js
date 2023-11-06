// Imports
import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "myData",
  initialState: [],
  reducers: {
    add(state, actions) {
      state.push(actions.payload);
    },
    remove(state, actions) {
      return state.filter((element) => element.id !== actions.payload);
    },
  },
});

export default dataSlice.reducer;

export const { add, remove } = dataSlice.actions;
