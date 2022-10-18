import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isLightTheme: true,
  },
  reducers: {
    changeTheme: (state) => {
      state.isLightTheme = !state.isLightTheme;
    },
  },
});

export const themeAction = themeSlice.actions;
