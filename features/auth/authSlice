import { createSlice } from "@reduxjs/toolkit";
import { createNameFromEmail } from "./createNameFromEmail";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    setActiveUser: (state, { payload: user }) => {
      if (!user.displayName) {
        state.user = { ...user, displayName: createNameFromEmail(user.email) };
      } else {
        state.user = user;
      }
      state.isLoggedIn = true;
    },
    removeActiveUser: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

export const { setActiveUser, removeActiveUser, setIsLoading } =
  authSlice.actions;

const selectAuthState = (state) => state.auth;
export const selectIsLoggedIn = (state) => selectAuthState(state).isLoggedIn;
export const selectUser = (state) => selectAuthState(state).user;
export const selectIsLoading = (state) => selectAuthState(state).isLoading;

export default authSlice.reducer;
