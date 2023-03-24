import { useDispatch, useSelector } from 'react-redux';
import { setAvailableCars } from '../redux/availableCarsSlice';
import axios from 'axios';

const getCars = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/availableCars');
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const useFetchAvailableCars = () => {
    const dispatch = useDispatch();

    const fetchAvailableCars = async () => {
        const carListFromDatabase = await getCars();
        dispatch(setAvailableCars(carListFromDatabase));
    };

    return fetchAvailableCars;
};