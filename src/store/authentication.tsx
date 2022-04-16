import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: localStorage.getItem("token") ? true : false,
  email: localStorage.getItem("email") && "" , 
  token: localStorage.getItem("token") && null
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.email = action.payload.email
      state.token = action.payload.token
    },
    logout(state) {
      state.isAuthenticated = false;
      state.email = ""
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;