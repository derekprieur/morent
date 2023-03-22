import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    carList: [],
};

const carListSlice = createSlice({
    name: 'carList',
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.carList = action.payload;
        },
    },
});

export const { setCars } = carListSlice.actions;

export default carListSlice.reducer;