import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./src/fetures/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store