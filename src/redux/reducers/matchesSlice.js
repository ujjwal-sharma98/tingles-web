import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

const initialState = {
    matches: [],
    chatUser: null,
    status: 'idle',
    error: null,
};

export const fetchMatches = createAsyncThunk('user/connections', async () => {
    const response = await axios.get(`${BASE_URL}/user/connections`, {
        withCredentials: true,
      });
    return response.data.data;
});

const matchesSlice = createSlice({
    name: 'matches',
    initialState,
    reducers: {
        setChatUser: (state, action) => {
            state.chatUser = action.payload;
        },
    },
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
    },
});

export const { setChatUser } = matchesSlice.actions;
export default matchesSlice.reducer;