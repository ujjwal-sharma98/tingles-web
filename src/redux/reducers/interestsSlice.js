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

export const reviewRequest = createAsyncThunk('user/reviewRequest', async ({ status, requestId }) => {
    // ["accepted", "rejected"]
    const response = await axios.post(`${BASE_URL}/request/review/${status}/${requestId}`, {}, {
        withCredentials: true,
      });
    return response.data;
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
            .addCase(reviewRequest.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(reviewRequest.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const { requestId } = action.meta.arg; // Passed argument to the async thunk
                state.interestedPeople = state.availablePeople.filter(request => request._id !== requestId);
            })
            .addCase(reviewRequest.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const interestActions = interestSlice.actions;
export default interestSlice.reducer;