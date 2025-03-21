import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

const initialState = {
    interestedPeople: [],
    status: 'idle',
    error: null,
};

export const fetchInterestedPeople = createAsyncThunk('user/requests', async () => {
    const response = await axios.get(`${BASE_URL}/user/requests/received`, {
        withCredentials: true,
      });
    return response.data.data;
});

const interestSlice = createSlice({
    name: 'matches',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInterestedPeople.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchInterestedPeople.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.interestedPeople = action.payload;
            })
            .addCase(fetchInterestedPeople.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});

export const interestActions = interestSlice.actions;
export default interestSlice.reducer;