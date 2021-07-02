import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//api
import { BACKEND } from "../../utils/datasource";

// Initial State of the user reducer
const initialState = {
  user: { id: 1, name: "Mr. Customer", role: "customer" },
  errors: { state: false, message: "" },
  status: "idle",
  roles: {},
};

// login call
export const loginUser = createAsyncThunk(
  "users/login",
  async (username, thunkAPI) => {
    const response = await axios.post(BACKEND.baseURL + "/login", { username });
    return response.data;
  }
);

// user roles
export const getAllRoles = createAsyncThunk(
  "users/getAllRoles",
  async (thunkAPI) => {
    const response = await axios.get(BACKEND.baseURL + "/roles");
    return response.data;
  }
);

// reducer slice
export const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      // Add user to the state
      state.user = action.payload;
    });
    builder.addCase(getAllRoles.fulfilled, (state, action) => {
      // Add roles to the state
      state.roles = action.payload;
    });
  },
});

//selectors
export const selectUser = (state) => state.users.user;
export const selectRoles = (state) => state.users.roles;
export const selectCurrentUserRole = (state) =>
  state.users.roles
    ? state.users.roles[state.users.user.role]
    : initialState.user.role;

export default userSlice.reducer;
