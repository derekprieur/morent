import { BsCheck } from 'react-icons/bs'
import { useSelector } from 'react-redux'

const Filter = ({ name, checked }) => {
    const carList = useSelector(state => state.carList.carList)
    const count = carList.filter(car => car.type === name).length
    console.log(carList)
    return (
        <div className='flex items-center gap-2'>
            <BsCheck className={`text-white text-xl border rounded ${checked ? 'bg-[#3563E9] border-[#3563E9]' : 'bg-white border-[#90A3BF] '}`} />
            <p className='text-[#3D5278] font-semibold text-xl'>{name}</p>
            <p className='text-[#90A3BF]'>({count})</p>
        </div>
    )
}

export default Filter