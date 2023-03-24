import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    availableCars: [],
};

const availableCarsSlice = createSlice({
    name: 'availableCars',
    initialState,
    reducers: {
        setAvailableCars: (state, action) => {
            state.availableCars = action.payload;
        },
    },
});

export const { setAvailableCars } = availableCarsSlice.actions;

export default availableCarsSlice.reducer;