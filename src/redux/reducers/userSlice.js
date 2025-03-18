import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: null,
    loading: false,
    error: null,
};

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    try {
        const response = await axios.get('/user');
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
// export const userReducer = userSlice.reducer;