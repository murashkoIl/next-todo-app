import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "./slices/tasksSlice";
import { themeSlice } from "./slices/themeSlice";

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    isLightTheme: themeSlice.reducer,
  },
});

export default store;
