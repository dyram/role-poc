import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//api
import { BACKEND } from "../../utils/datasource";

// Initial State of the table reducer
const initialState = {
  value: 0,
  inventory: [],
  status: "idle",
};

//async call to fetch inventory
export const fetchInventory = createAsyncThunk(
  "table/fetchInventory",
  async (thunkAPI) => {
    const response = await axios.get(BACKEND.baseURL + "/items");
    return response.data;
  }
);

// This function is used to specify the reducer logic
export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInventory.fulfilled, (state, action) => {
      // Add user to the state array
      state.inventory = action.payload;
    });
  },
});

// Action types
export const { increment, decrement } = tableSlice.actions;

//Selector
export const selectCount = (state) => state.table.value;
export const selectInventory = (state) => state.table.inventory;

export default tableSlice.reducer;
