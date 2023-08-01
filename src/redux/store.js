
import { configureStore } from "@reduxjs/toolkit";
import {userReducer } from "./reducers/userReducer";

export const server = "https://graceful-kimono-calf.cyclic.cloud/api/v1";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
