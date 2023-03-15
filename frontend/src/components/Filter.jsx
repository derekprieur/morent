import { BsCheck } from 'react-icons/bs'

const Filter = ({ name, count, checked }) => {
    return (
        <div className='flex items-center gap-2'>
            <BsCheck className={`text-white text-xl border rounded ${checked ? 'bg-[#3563E9] border-[#3563E9]' : 'bg-white border-[#90A3BF] '}`} />
            <p className='text-[#3D5278] font-semibold text-xl'>{name}</p>
            <p className='text-[#90A3BF]'>({count})</p>
        </div>
    )
}

export default Filter