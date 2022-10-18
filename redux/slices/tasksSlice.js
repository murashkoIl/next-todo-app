import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [{ id: 1, value: "hello world" }],
  },
  reducers: {
    setTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    deleteTask: (state, action) => {
      state.tasks = [...state.tasks.filter(({ id }) => id !== action.payload)];
    },
  },
});

export const tasksAction = tasksSlice.actions;
