import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import modalReducer from "./modal/modalSlice";

export default configureStore({
  reducer: {
    userReducer,
    modalReducer,
  },
});
