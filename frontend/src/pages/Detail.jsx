import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

import { Button, CarCard, Sidebar } from '../components'
import { detail1 } from '../assets'
import { popularCars } from '../constants/carList'

const Detail = () => {
    return (
        <div className='flex bg-background h-full overflow-x-hidden'>
            <div className='hidden md:flex'>
                <Sidebar />
            </div>
            <div className='flex flex-col px-6 w-full'>
                <div className='pt-8 pb-6 md:px-8 rounded-xl'>
                    <img src={detail1} alt="car-image" />
                </div>
                <div className='flex gap-5 w-full justify-center pb-8'>
                    <img src={detail1} alt="" className='w-24 h-16 rounded-xl' />
                    <img src={detail1} alt="" className='w-24 h-16 rounded-xl' />
                    <img src={detail1} alt="" className='w-24 h-16 rounded-xl' />
                </div>
                <div className='bg-white p-4 rounded-xl'>
                    <h3 className='font-medium text-[#1A202C] text-xl pb-2'>Nissan GT - R</h3>
                    <div className='flex gap-1 items-center mb-4'>
                        <AiFillStar className='text-[#FBBF24] text-sm' />
                        <AiFillStar className='text-[#FBBF24] text-sm' />
                        <AiFillStar className='text-[#FBBF24] text-sm' />
                        <AiFillStar className='text-[#FBBF24] text-sm' />
                        <AiOutlineStar className='text-[#C3D4E9] text-sm mr-1' />
                        <p className='text-[#3D5278] text-sm'>440+ Reviewers</p>
                    </div>
                    <p className='text-sm text-[#3D5278] leading-[150%] mb-4'>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
                    <div className='flex justify-between mb-4'>
                        <div className='flex gap-6 w-[50%]'>
                            <h4 className='text-[#90A3BF] text-sm font-light'>Type Car</h4>
                            <p className='text-sm font-medium'>Sport</p>
                        </div>
                        <div className='flex gap-6 w-[50%]'>
                            <h4 className='text-[#90A3BF] text-sm font-light'>Capacity</h4>
                            <p className='text-sm font-medium'>2 Person</p>
                        </div>
                    </div>
                    <div className='flex pb-8'>
                        <div className='flex gap-6 w-[50%]'>
                            <h4 className='text-[#90A3BF] text-sm font-light'>Steering</h4>
                            <p className='text-sm font-medium'>Manual</p>
                        </div>
                        <div className='flex gap-6 w-[50%]'>
                            <h4 className='text-[#90A3BF] text-sm font-light'>Gasoline</h4>
                            <p className='text-sm font-medium'>70L</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-1'>
                            <div className='flex items-center gap-1'>
                                <p className='text-2xl font-bold'>$80.00/</p>
                                <span className='text-[#90A3BF] text-sm'>days</span>
                            </div>
                            <span className='text-[#90A3BF] text-sm line-through'>$100.00</span>
                        </div>
                        <Button text='Rent Now' size='large' />
                    </div>
                </div>
                <div className='flex justify-between mt-8 md:mt-11 mb-5'>
                    <p className=' text-[#90A3BF] font-normal md:text-lg md:ml-5'>Recent Cars</p>
                    <button className=' text-[#3563E9] font-medium text-sm md:text-lg'>View All</button>
                </div>
                <div className='w-full overflow-hidden'>
                    <div className='flex gap-5 md:gap-8 overflow-x-auto hide-scroll'>
                        {popularCars.map((car, index) => (
                            <CarCard key={index} {...car} page='home' />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail