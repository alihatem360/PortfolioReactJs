import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./reducers/projectSlice";

const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});

export default store;
