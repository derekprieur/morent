import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    carList: [],
    popularCars: [],
};

const carListSlice = createSlice({
    name: 'carList',
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.carList = action.payload;
        },
        setPopularCars: (state, action) => {
            state.popularCars = action.payload;
        },
    },
});

export const { setCars, setPopularCars } = carListSlice.actions;

export default carListSlice.reducer;