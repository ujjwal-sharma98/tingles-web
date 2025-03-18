import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import userReducer from './reducers/userSlice';

const store = configureStore({
    reducer: {
        authReducer,
        userReducer
    }
});

export default store;