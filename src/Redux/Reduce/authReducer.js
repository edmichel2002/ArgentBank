import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    userProfile: null,
    error: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.error = null;
    },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
      state.error = null;
    },
    authError: (state, action) => {
      state.token = null;
      state.userProfile = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.userProfile = null;
      state.error = null;
    },
  },
});

export const { setToken, setUserProfile, authError, logout } = authSlice.actions;
export default authSlice.reducer;
