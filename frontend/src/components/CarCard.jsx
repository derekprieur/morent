import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { RiGasStationFill } from 'react-icons/ri'
import { GiSteeringWheel } from 'react-icons/gi'
import { MdPeopleAlt } from 'react-icons/md'
import axios from 'axios'

import { Button } from '../components'
import { useSelector } from 'react-redux'

const CarCard = ({ _id, type, gasMileage, transmission, originalPrice, page, title, capacity, rentPrice, images }) => {
    const navigate = useNavigate()
    const [isFavorited, setIsFavorited] = useState(null)
    const carId = _id
    const user = useSelector(state => state.auth.user)
    const token = localStorage.getItem('accessToken');

    const toggleFavorite = async () => {
        if (!user) return navigate('/login')
        try {
            const response = await axios.patch(`https://morent.onrender.com/api/cars/${carId}/toggleFavorite`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            setIsFavorited(response.data.isFavorited);
        } catch (error) {
            console.error('Error toggling favorite', error);
        }
    };

    const checkFavorite = async () => {
        if (!user) {
            setIsFavorited(false);
            return;
        }
        try {
            const response = await axios.get(`https://morent.onrender.com/api/cars/${carId}/isfavorited`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            setIsFavorited(response.data.isFavorited);
        } catch (error) {
            console.error('Error checking favorite status', error);
        }
    };

    useEffect(() => {
        checkFavorite();
    }, [user]);

    if (page === 'home') return (
        <div className='bg-white w-full min-w-[280px] rounded-[10px] p-4 md:p-6 md:max-w-[300px] md:mx-0 md:flex md:flex-col md:justify-between' >
            <div className='flex items-start justify-between'>
                <div className='flex flex-col gap-1'>
                    <h2 className='font-medium text-[#1A202C] text-xl cursor-pointer' onClick={() => navigate(`/detail/${carId}`)}>{title}</h2>
                    <h3 className='text-[#90A3BF] font-light text-sm md:text-base md:font-normal'>{type}</h3>
                </div>
                {isFavorited ? <AiFillHeart className='text-2xl text-[#ED3F3F] cursor-pointer' onClick={toggleFavorite} /> : <AiOutlineHeart className='text-2xl text-[#90A3BF] cursor-pointer' onClick={toggleFavorite} />}
            </div>
            <div className='my-8 flex flex-col justify-between items-center'>
                <img src={images[0]} alt="" className='object-cover w-full h-40 md:w-full md:h-40 rounded-md' />
                <div className='text-[#90A3BF] mt-12 gap-4 flex flex-row md:justify-center'>
                    <div className='flex items-center gap-1'>
                        <RiGasStationFill className='text-base md:text-base' />
                        <p>{gasMileage || 90}L</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <GiSteeringWheel className='text-base md:text-base' />
                        <p>{transmission || 'Manual'}</p>
                    </div>
                    <div className='flex items-center gap-1 flex-shrink-0'>
                        <MdPeopleAlt className='text-base md:text-base' />
                        <p>{capacity} People</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-1'>
                    <p className='text-[#1A202C] font-bold text-xl md:text-2xl'>${rentPrice}.00/ <span className='text-[#90A3BF] font-light text-sm md:text-base md:font-normal'>day</span></p>
                </div>
                <Link to={`/rent/${_id}`}>
                    <Button text='Rent Now' />
                </Link>
            </div>
        </div>
    )
    else return (
        <div className='bg-white w-full rounded-[10px] p-4 md:p-6 max-w-md md:max-w-[300px] mx-auto md:mx-0 md:flex md:flex-col md:justify-between'>
            <div className='flex items-start justify-between'>
                <div className='flex flex-col gap-1'>
                    <h2 className='font-medium text-[#1A202C] text-xl cursor-pointer' onClick={() => navigate(`/detail/${carId}`)}>{title}</h2>
                    <h3 className='text-[#90A3BF] font-light text-sm md:text-base md:font-normal'>{type}</h3>
                </div>
                {isFavorited ? <AiFillHeart className='text-2xl text-[#ED3F3F] cursor-pointer' onClick={toggleFavorite} /> : <AiOutlineHeart className='text-2xl text-[#90A3BF] cursor-pointer' onClick={toggleFavorite} />}
            </div>
            <div className='my-8 flex md:flex-col justify-between items-center'>
                <img src={images[0]} alt="" className='object-cover w-44 h-24 540:h-32 540:w-64 md:w-full md:h-40 rounded-md' />
                <div className='text-[#90A3BF] md:mt-12 gap-4 flex flex-col md:flex-row md:justify-center'>
                    <div className='flex items-center gap-1'>
                        <RiGasStationFill className='text-xl md:text-base' />
                        <p>{gasMileage || 90}L</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <GiSteeringWheel className='text-xl md:text-base' />
                        <p>{transmission || 'Manual'}</p>
                    </div>
                    <div className='flex items-center gap-1 md:flex-shrink-0'>
                        <MdPeopleAlt className='text-xl md:text-base' />
                        <p>{capacity} People</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-1'>
                    <p className='text-[#1A202C] font-bold text-xl md:text-2xl'>${rentPrice}.00/ <span className='text-[#90A3BF] font-light text-sm md:text-base md:font-normal'>day</span></p>
                </div>
                {page != 'profile' &&
                    <Link to={`/rent/${_id}`}>
                        <Button text='Rent Now' />
                    </Link>
                }
            </div>
        </div>
    )
}

export default CarCard