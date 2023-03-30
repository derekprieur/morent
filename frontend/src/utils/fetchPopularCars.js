import { useDispatch, useSelector } from 'react-redux';
import { setPopularCars } from '../redux/carListSlice';
import axios from 'axios';

const getPopularCars = async () => {
    try {
        const response = await axios.get(`https://morent.onrender.com/api/popularcars`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const useFetchPopularCars = () => {
    const dispatch = useDispatch();

    const fetchPopularCars = async () => {
        const carListFromDatabase = await getPopularCars();
        dispatch(setPopularCars(carListFromDatabase));
    };

    return fetchPopularCars;
};