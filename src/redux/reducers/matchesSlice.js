import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

const initialState = {
    matches: [],
    availablePeople: [],
    status: 'idle',
    error: null,
};

export const fetchMatches = createAsyncThunk('user/connections', async () => {
    const response = await axios.get(`${BASE_URL}/user/connections`, {
        withCredentials: true,
      });
    return response.data;
});

export const fetchAvailablePeople = createAsyncThunk('user/fetchAvailablePeople', async () => {
    const response = await axios.get(`${BASE_URL}/feed`, {
        withCredentials: true,
      });
    return response.data;
});

const matchesSlice = createSlice({
    name: 'matches',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMatches.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMatches.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.matches = action.payload;
            })
            .addCase(fetchMatches.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchAvailablePeople.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAvailablePeople.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.availablePeople = action.payload;
            })
            .addCase(fetchAvailablePeople.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const matchActions = matchesSlice.actions;
export default matchesSlice.reducer;