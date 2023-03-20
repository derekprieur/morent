import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    carList: [],
};

const carListSlice = createSlice({
    name: 'carList',
    initialState,
    reducers: {
        setCars: (state, action) => {
            console.log('action.payload: ', action.payload);
            state.carList = action.payload;
            console.log('state.carList: ', state.carList);
        },
    },
});

export const { setCars } = carListSlice.actions;

export default carListSlice.reducer;