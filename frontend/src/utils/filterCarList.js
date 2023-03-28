import { useSelector } from 'react-redux';

export const useFilteredCarList = () => {
    const carList = useSelector((state) => state.carList.carList);
    const activeFilters = useSelector((state) => state.activeFilters);
    const { typeFilters, capacityFilters } = activeFilters;
    const activeTypeFilters = typeFilters.filter((filter) => filter.checked).map((filter) => filter.name);
    const activeCapacityFilters = capacityFilters.filter((filter) => filter.checked).map((filter) => parseInt(filter.name, 10));


    const filterCarList = carList.filter((car) => {
        return activeTypeFilters.includes(car.type) && activeCapacityFilters.includes(car.capacity);
    });

    return filterCarList;
};
