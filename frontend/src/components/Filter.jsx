import { BsCheck } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'

import { updateFilter } from '../redux/activeFiltersSlice'

const Filter = ({ name, checked, category }) => {
    console.log(category, 'category')
    const carList = useSelector(state => state.carList.carList)
    const count = carList.filter(car => {
        if (category === 'typeFilters') {
            return car.type === name;
        } else if (category === 'capacityFilters') {
            console.log(car.capacity.toString(), name.split(' ')[0].trim())
            return car.capacity.toString() === name.split(' ')[0].trim();
        }
        return false;
    }).length;
    const dispatch = useDispatch()

    const handleFilter = () => {
        dispatch(updateFilter({ category, name }))
    }

    return (
        <div className='flex items-center gap-2 cursor-pointer' onClick={handleFilter}>
            <BsCheck className={`text-white text-xl border rounded ${checked ? 'bg-[#3563E9] border-[#3563E9]' : 'bg-white border-[#90A3BF] '}`} />
            <p className='text-[#3D5278] font-semibold text-xl'>{name}</p>
            <p className='text-[#90A3BF]'>({count})</p>
        </div>
    )
}

export default Filter