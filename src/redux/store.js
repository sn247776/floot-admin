
import { configureStore } from "@reduxjs/toolkit";
import {userReducer } from "./reducers/userReducer";

export const server = "https://nice-lime-brown-bear-tam.cyclic.cloud/api/v1";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
