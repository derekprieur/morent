import { useNavigate } from 'react-router-dom'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { RiGasStationFill } from 'react-icons/ri'
import { GiSteeringWheel } from 'react-icons/gi'
import { MdPeopleAlt } from 'react-icons/md'

import { Button } from '../components'

const CarCard = ({ name, type, gas, transmission, people, price, originalPrice, image, favorite, page }) => {
    const navigate = useNavigate()
    if (page === 'home') return (
        <div className='bg-white w-full rounded-[10px] p-4 md:p-6 max-w-xs md:max-w-sm md:mx-0 md:flex md:flex-col md:justify-between' >
            <div className='flex items-start justify-between'>
                <div className='flex flex-col gap-1'>
                    <h2 className='font-medium text-[#1A202C] text-xl cursor-pointer' onClick={() => navigate(`/detail/${name}`)}>{name}</h2>
                    <h3 className='text-[#90A3BF] font-light text-sm md:text-base md:font-normal'>{type}</h3>
                </div>
                {favorite ? <AiFillHeart className='text-2xl text-[#ED3F3F]' /> : <AiOutlineHeart className='text-2xl text-[#90A3BF]' />}
            </div>
            <div className='mr-4 my-8 flex flex-col justify-between'>
                <img src={image} alt="" className='object-contain ml-6' />
                <div className='text-[#90A3BF] mt-12 gap-4 flex flex-row md:justify-center'>
                    <div className='flex items-center gap-1'>
                        <RiGasStationFill className='text-base md:text-2xl' />
                        <p>{gas}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <GiSteeringWheel className='text-base md:text-2xl' />
                        <p>{transmission}</p>
                    </div>
                    <div className='flex items-center gap-1 shrink-0'>
                        <MdPeopleAlt className='text-base md:text-2xl' />
                        <p>{people} People</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-1'>
                    <p className='text-[#1A202C] font-bold text-xl md:text-2xl'>{price}/ <span className='text-[#90A3BF] font-light text-sm md:text-base md:font-normal'>day</span></p>
                    <p className='text-[#90A3BF] font-light text-sm line-through md:text-base md:font-normal'>{originalPrice}</p>
                </div>
                <Button text='Rent Now' />
            </div>
        </div>
    )
    else return (
        <div className='bg-white w-full rounded-[10px] p-4 md:p-6 max-w-md md:max-w-sm mx-auto md:mx-0 md:flex md:flex-col md:justify-between'>
            <div className='flex items-start justify-between'>
                <div className='flex flex-col gap-1'>
                    <h2 className='font-medium text-[#1A202C] text-xl cursor-pointer' onClick={() => navigate(`/detail/${name}`)}>{name}</h2>
                    <h3 className='text-[#90A3BF] font-light text-sm md:text-base md:font-normal'>{type}</h3>
                </div>
                {favorite ? <AiFillHeart className='text-2xl text-[#ED3F3F]' /> : <AiOutlineHeart className='text-2xl text-[#90A3BF]' />}
            </div>
            <div className='ml-6 mr-4 my-8 flex md:flex-col justify-between'>
                <img src={image} alt="" className='object-contain' />
                <div className='text-[#90A3BF] -mt-7 md:mt-12 gap-4 flex flex-col md:flex-row md:justify-center'>
                    <div className='flex items-center gap-1'>
                        <RiGasStationFill className='text-xl md:text-2xl' />
                        <p>{gas}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <GiSteeringWheel className='text-xl md:text-2xl' />
                        <p>{transmission}</p>
                    </div>
                    <div className='flex items-center gap-1 md:shrink-0'>
                        <MdPeopleAlt className='text-xl md:text-2xl' />
                        <p>{people} People</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-1'>
                    <p className='text-[#1A202C] font-bold text-xl md:text-2xl'>{price}/ <span className='text-[#90A3BF] font-light text-sm md:text-base md:font-normal'>day</span></p>
                    <p className='text-[#90A3BF] font-light text-sm line-through md:text-base md:font-normal'>{originalPrice}</p>
                </div>
                {page != 'profile' && <Button text='Rent Now' />}
            </div>
        </div>
    )
}

export default CarCard