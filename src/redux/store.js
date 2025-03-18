import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/loginSlice';
import userReducer from './reducers/userSlice';

const store = configureStore({
    reducer: {
        loginReducer,
        userReducer
    }
});

export default store;