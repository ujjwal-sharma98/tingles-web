import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import profileReducer from './reducers/profileSlice';
import matchesReducer from './reducers/matchesSlice';
import interestsReducer from './reducers/interestsSlice';
import feedReducer from './reducers/feedSlice';

const store = configureStore({
    reducer: {
        authReducer,
        profileReducer,
        matchesReducer,
        interestsReducer,
        feedReducer
    }
});

export default store;