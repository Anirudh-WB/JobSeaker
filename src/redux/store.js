import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import modalReducer from "./modal/modalSlice";
import otherReducer from "./other/otherSlice";

export default configureStore({
  reducer: {
    userReducer,
    modalReducer,
    otherReducer,
  },
});
