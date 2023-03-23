// redux toolkit setup
import { configureStore } from '@reduxjs/toolkit';
import { authReducer, activeFilterReducer, carListReducer, currentPageReducer } from './redux';

// create store
const store = configureStore({
    reducer: {
        auth: authReducer,
        currentPage: currentPageReducer,
        carList: carListReducer,
        activeFilters: activeFilterReducer,
    },
});

export default store;