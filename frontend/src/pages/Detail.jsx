import { useEffect } from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { useSelector } from 'react-redux'

import { Button, CarCard, Sidebar } from '../components'
import { detail1 } from '../assets'
import { useFetchCarList } from '../utils/fetchCarList'

const Detail = () => {
    const { carList } = useSelector(state => state.carList)
    const fetchCarList = useFetchCarList()

    useEffect(() => {
        if (!carList.length) {
            fetchCarList()
        }
    }, [])

    return (
        <div className='flex bg-background h-full overflow-x-hidden'>
            <div className='hidden md:flex'>
                <Sidebar />
            </div>
            <div className='flex flex-col px-6 md:px-0 w-full'>
                <div className='flex flex-col md:flex-row justify-start'>
                    <div className='flex flex-col'>
                        <div className='pt-8 pb-6 md:px-8 rounded-xl flex justify-center'>
                            <img src={detail1} alt="car-image" className='md:w-[492px] md:h-[360px] object-cover' />
                        </div>
                        <div className='flex gap-5 w-full justify-center md:px-8 pb-8'>
                            <img src={detail1} alt="" className='w-24 h-16 rounded-xl' />
                            <img src={detail1} alt="" className='w-24 h-16 rounded-xl' />
                            <img src={detail1} alt="" className='w-24 h-16 rounded-xl' />
                        </div>
                    </div>
                    <div className='bg-white p-4 md:p-6 rounded-xl md:mt-8 max-w-[492px]'>
                        <h3 className='font-semibold text-[#1A202C] text-xl md:text-3xl pb-2'>Nissan GT - R</h3>
                        <div className='flex gap-1 items-center mb-4'>
                            <AiFillStar className='text-[#FBBF24] text-sm md:text-lg' />
                            <AiFillStar className='text-[#FBBF24] text-sm md:text-lg' />
                            <AiFillStar className='text-[#FBBF24] text-sm md:text-lg' />
                            <AiFillStar className='text-[#FBBF24] text-sm md:text-lg' />
                            <AiOutlineStar className='text-[#C3D4E9] text-sm mr-1' />
                            <p className='text-[#3D5278] text-sm md:text-base'>440+ Reviewers</p>
                        </div>
                        <p className='text-sm md:text-xl text-[#3D5278] leading-[200%] md:leading-10 mb-4'>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
                        <div className='flex justify-between mb-4'>
                            <div className='flex gap-6 w-[50%]'>
                                <h4 className='text-[#90A3BF] text-sm md:text-lg font-light'>Type Car</h4>
                                <p className='text-sm md:text-lg font-medium'>Sport</p>
                            </div>
                            <div className='flex gap-6 w-[50%]'>
                                <h4 className='text-[#90A3BF] text-sm md:text-lg font-light'>Capacity</h4>
                                <p className='text-sm md:text-lg font-medium'>2 Person</p>
                            </div>
                        </div>
                        <div className='flex pb-8'>
                            <div className='flex gap-6 w-[50%]'>
                                <h4 className='text-[#90A3BF] text-sm md:text-lg font-light'>Steering</h4>
                                <p className='text-sm md:text-lg font-medium'>Manual</p>
                            </div>
                            <div className='flex gap-6 w-[50%]'>
                                <h4 className='text-[#90A3BF] text-sm md:text-lg font-light'>Gasoline</h4>
                                <p className='text-sm md:text-lg font-medium'>70L</p>
                            </div>
                        </div>
                        <div className='flex justify-between md:mt-12'>
                            <div className='flex flex-col gap-1'>
                                <div className='flex items-center gap-1'>
                                    <p className='text-2xl md:text-3xl font-bold'>$80.00/</p>
                                    <span className='text-[#90A3BF] text-sm md:text-base'>days</span>
                                </div>
                                <span className='text-[#90A3BF] text-sm md:text-base line-through'>$100.00</span>
                            </div>
                            <Button text='Rent Now' size='large' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between mt-8 md:mt-11 mb-5'>
                    <p className=' text-[#90A3BF] font-normal md:text-lg md:ml-14'>Recent Cars</p>
                    <button className=' text-[#3563E9] font-medium text-sm md:text-lg md:mr-14'>View All</button>
                </div>
                <div className='w-full overflow-hidden md:mx-8'>
                    <div className='flex md:hidden gap-5 md:gap-8 overflow-x-auto hide-scroll'>
                        {carList.map((car, index) => (
                            <CarCard key={index} {...car} page='home' />
                        ))}
                    </div>
                    <div className='hidden md:flex gap-5 md:gap-8 overflow-x-auto hide-scroll'>
                        {carList.slice(0, 3).map((car, index) => (
                            <CarCard key={index} {...car} page='home' />
                        ))}
                    </div>
                </div>
                <div className='flex justify-between mt-8 md:mt-11 mb-5'>
                    <p className=' text-[#90A3BF] font-normal md:text-lg md:ml-14'>Recommended Cars</p>
                    <button className=' text-[#3563E9] font-medium text-sm md:text-lg md:mr-14'>View All</button>
                </div>
                <div className='w-full overflow-hidden mb-12 md:mx-8'>
                    <div className='flex gap-5 md:gap-8 overflow-x-auto hide-scroll md:hidden'>
                        {carList.map((car, index) => (
                            <CarCard key={index} {...car} page='home' />
                        ))}
                    </div>
                    <div className='hidden md:flex gap-5 md:gap-8 overflow-x-auto hide-scroll'>
                        {carList.slice(0, 3).map((car, index) => (
                            <CarCard key={index} {...car} page='home' />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail