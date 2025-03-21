import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

const initialState = {
    availablePeople: [],
    status: 'idle',
    error: null,
};

export const fetchAvailablePeople = createAsyncThunk('user/fetchAvailablePeople', async () => {
    const response = await axios.get(`${BASE_URL}/feed`, {
        withCredentials: true,
      });
    return response.data;
});

const feedSlice = createSlice({
    name: 'matches',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
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

export const feedActions = feedSlice.actions;
export default feedSlice.reducer;