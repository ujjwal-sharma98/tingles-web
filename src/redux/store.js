import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import userReducer from './reducers/userSlice';
import matchesReducer from './reducers/matchesSlice';

const store = configureStore({
    reducer: {
        authReducer,
        userReducer,
        matchesReducer
    }
});

export default store;