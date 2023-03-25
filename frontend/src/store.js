// redux toolkit setup
import { configureStore } from '@reduxjs/toolkit';
import { authReducer, activeFilterReducer, carListReducer, currentPageReducer, availableCarsReducer, timeInputsReducer } from './redux';

// create store
const store = configureStore({
    reducer: {
        auth: authReducer,
        currentPage: currentPageReducer,
        carList: carListReducer,
        activeFilters: activeFilterReducer,
        availableCars: availableCarsReducer,
        timeInputs: timeInputsReducer
    },
});

export default store;