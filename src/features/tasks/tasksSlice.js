import { createSlice } from "@reduxjs/toolkit";
import { getValueFromLocalStorage } from "./valuesLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    status: "idle",
    isLoadingTasks: false,
    hideDone: getValueFromLocalStorage("hideDone", false),
  },
  reducers: {
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
    setTasks: (state, { payload }) => {
      state.tasks = payload;
    },
    addTask: () => {},
    deleteTask: () => {},
    toggleDone: () => {},
    updateTask: () => {},
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
  },
});

export const {
  setTasks,
  setStatus,
  addTask,
  updateTask,
  toggleHideDone,
  toggleDone,
  deleteTask,
} = tasksSlice.actions;

const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;

export const selectHideDone = (state) => selectTasksState(state).hideDone;

export const selectIsEveryTaskDone = (state) =>
  selectTasks(state).every(({ done }) => done);

export const selectIsThereAnyTask = (state) => selectTasks(state).length > 0;

export const selectStatus = (state) => selectTasksState(state).status;

export const selectTaskById = (state, id) =>
  selectTasks(state).find((task) => task.id === id);

export const selectTaskByQuery = (state, query) => {
  const tasks = selectTasks(state);

  const taskDateSorted = tasks
    .slice()
    .sort((a, b) => b.deadline.localeCompare(a.deadline));

  if (!query || query === "") {
    let newTasks = [];

    taskDateSorted.forEach((task) => {
      if (task.deadline !== "") {
        newTasks.unshift(task);
      } else {
        newTasks.push(task);
      }
    });

    return newTasks;
  }

  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.toUpperCase())
  );
};

export default tasksSlice.reducer;
