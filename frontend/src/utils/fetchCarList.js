import { useDispatch, useSelector } from 'react-redux';
import { setCars } from '../redux/carListSlice';
import axios from 'axios';

const getCars = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/cars');
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const useFetchCarList = () => {
    const dispatch = useDispatch();
    const carList = useSelector((state) => state.carList);

    const fetchCarList = async () => {
        const carListFromDatabase = await getCars();
        console.log('carList fetchCarList: ', carListFromDatabase);
        dispatch(setCars(carListFromDatabase));
        console.log('carList after dispatch: ', carList);
    };

    return fetchCarList;
};