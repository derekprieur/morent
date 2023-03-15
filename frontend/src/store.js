// redux toolkit setup
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/authSlice';

// create store
const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;