// redux toolkit setup
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/authSlice';
import currentPageReducer from './redux/currentPageSlice';
import carListReducer from './redux/carListSlice';

// create store
const store = configureStore({
    reducer: {
        auth: authReducer,
        currentPage: currentPageReducer,
        carList: carListReducer,
    },
});

export default store;