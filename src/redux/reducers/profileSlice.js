import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

const initialState = {
    user: null,
    loading: false,
    error: null,
};

export const fetchProfile = createAsyncThunk('profile/fetchProfile', async () => {
    try {
        const response = await axios.get(`${BASE_URL}/profile/view`, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
});

export const updateProfile = createAsyncThunk('profile/updateProfile', async (userData) => {
    try {
        const response = await axios.patch(`${BASE_URL}/profile/edit`, userData, {
            withCredentials: true,
        });
        return response.data.data;
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
            .addCase(fetchProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProfile.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
// export const userReducer = userSlice.reducer;