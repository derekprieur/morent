// redux toolkit setup
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/authSlice';
import currentPageReducer from './redux/currentPageSlice';

// create store
const store = configureStore({
    reducer: {
        auth: authReducer,
        currentPage: currentPageReducer,
    },
});

export default store;