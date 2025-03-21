import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import profileReducer from './reducers/profileSlice';
import matchesReducer from './reducers/matchesSlice';

const store = configureStore({
    reducer: {
        authReducer,
        profileReducer,
        matchesReducer
    }
});

export default store;