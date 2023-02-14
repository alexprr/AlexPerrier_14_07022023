import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 employeesList: [],
};

const employeeSlice = createSlice({
 name: "employee",
 initialState,
 reducers: {
  add: (state, action) => {
   state.employeesList.push(action.payload);
  },
 },
});

export const { actions, reducer } = employeeSlice;

export const { add } = actions;

export default reducer;
