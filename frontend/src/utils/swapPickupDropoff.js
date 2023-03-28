import { useSelector, useDispatch } from "react-redux";
import { updateField } from "../redux/timeInputsSlice";

export const useSwapPickupDropoff = () => {
    const dispatch = useDispatch();
    const { timeInputs } = useSelector((state) => state.timeInputs);
    const { pickupTime, dropoffTime, pickupLocation, dropoffLocation, pickupDate, dropoffDate } = timeInputs;
    const swapPickupDropoff = () => {
        dispatch(updateField({ key: "pickupTime", value: dropoffTime }));
        dispatch(updateField({ key: "dropoffTime", value: pickupTime }));
        dispatch(updateField({ key: "pickupLocation", value: dropoffLocation }));
        dispatch(updateField({ key: "dropoffLocation", value: pickupLocation }));
        dispatch(updateField({ key: "pickupDate", value: dropoffDate }));
        dispatch(updateField({ key: "dropoffDate", value: pickupDate }));
    }
    return swapPickupDropoff;
}
