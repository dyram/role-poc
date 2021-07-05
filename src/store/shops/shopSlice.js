import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import mockData from "../../mockdata.json";
//api
import { BACKEND } from "../../utils/datasource";

// Initial State of the shop reducer
const initialState = {
  shops: [],
  status: "idle",
};

// get all shops -- async call
export const getAllShops = createAsyncThunk(
  "shops/getAllShops",
  async (thunkAPI) => {
    // const response = await axios.get(BACKEND.baseURL + "/shops");
    // return response.data;
    return mockData.shops;
  }
);

export const shopSlice = createSlice({
  name: "shops",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllShops.fulfilled, (state, action) => {
      state.shops = action.payload;
    });
  },
});

//selectors
export const selectShops = (state) => state.shops.shops;

export default shopSlice.reducer;
