import { configureStore } from "@reduxjs/toolkit";

//reducers
import tableReducer from "./table/tableSlice";
import userReducer from "./users/userSlice";
import shopReducer from "./shops/shopSlice";

export default configureStore({
  reducer: {
    table: tableReducer,
    users: userReducer,
    shops: shopReducer,
  },
});
