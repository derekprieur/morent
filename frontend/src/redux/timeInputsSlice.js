import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    timeInputs: { pickupLocation: '', pickupDate: '', pickupTime: '', dropoffLocation: '', dropoffDate: '', dropoffTime: '' }
};

const timeInputsSlice = createSlice({
    name: 'timeInputs',
    initialState,
    reducers: {
        updateField: (state, action) => {
            state.timeInputs[action.payload.key] = action.payload.value;
        }
    },
});

export const { updateField } = timeInputsSlice.actions;

export default timeInputsSlice.reducer;