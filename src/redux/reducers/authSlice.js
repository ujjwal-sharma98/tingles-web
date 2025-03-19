import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (userData, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${BASE_URL}/login`, userData);
        console.log(response.data);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response ? error.response.data : "Login failed");
      }
    }
);

export const signUpUser = createAsyncThunk(
    "auth/signUpUser",
    async (userData, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${BASE_URL}/signup`, userData);
        console.log(response.data);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response ? error.response.data : "Sign up failed");
      }
    }
);

export const logOutUser = createAsyncThunk(
    "auth/logOutUser",
    async (userData, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${BASE_URL}/logout`, userData);
        console.log(response.data);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response ? error.response.data : "Sign up failed");
      }
    }
);

const authSlice = createSlice({
    name: 'login',
    initialState: {
        isLoggedIn: false,
        user: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
          .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.isLoggedIn = true;
            state.user = action.payload;
        })
          .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.isLoggedIn = false;
            state.user = null;
            state.error = action.payload;
        })
        // Sign Up
        .addCase(signUpUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(signUpUser.fulfilled, (state, action) => {
            state.loading = false;
            state.isLoggedIn = true;
            state.user = action.payload;
        })
            .addCase(signUpUser.rejected, (state, action) => {
            state.loading = false;
            state.isLoggedIn = false;
            state.user = null;
            state.error = action.payload;
        })
        // Logout
        .addCase(logOutUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(logOutUser.fulfilled, (state) => {
            state.loading = false;
            state.isLoggedIn = true;
            state.user = null;
        })
            .addCase(logOutUser.rejected, (state, action) => {
            state.loading = false;
            state.isLoggedIn = false;
            state.user = null;
            state.error = action.payload;
        })
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;