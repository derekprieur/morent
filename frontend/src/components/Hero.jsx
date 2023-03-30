import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { Button, CarCard, HeroCard, TimeCard } from '../components'
import { useFetchCarList } from '../utils/fetchCarList'
import { useFetchAvailableCars } from '../utils/fetchAvailableCars'
import { useSwapPickupDropoff } from '../utils/swapPickupDropoff'
import { useFetchPopularCars } from '../utils/fetchPopularCars'

const Hero = () => {
    const { carList } = useSelector(state => state.carList)
    const { popularCars } = useSelector(state => state.carList)
    const { availableCars } = useSelector(state => state.availableCars)
    const { timeInputs } = useSelector(state => state.timeInputs)
    const swapPickupDropoff = useSwapPickupDropoff()
    const fetchCarList = useFetchCarList()
    const fetchAvailableCars = useFetchAvailableCars()
    const fetchPopularCars = useFetchPopularCars()

    useEffect(() => {
        fetchCarList()
        fetchAvailableCars()
        fetchPopularCars()
        console.log('availableCars', availableCars)
        console.log('popularCars', popularCars)
        console.log('test')
    }, [])

    return (
        <div className='relative flex flex-col md:px-16'>
            <div className='absolute px-6 flex items-center w-full justify-center -top-28 md:hidden'>
                <HeroCard size='small' />
            </div>
            <div className='hidden md:flex mt-8 gap-8 md:justify-center'>
                <HeroCard size='large' />
                <HeroCard alt />
            </div>
            <div className='px-6 md:px-0'>
                <div className='mt-36 md:mt-8 gap-8 md:gap-10 flex-col md:flex-row relative items-center md:justify-center hidden sm:flex'>
                    <TimeCard text='Pick-Up' />
                    <div className='absolute md:hidden top-32 flex justify-center' onClick={swapPickupDropoff}>
                        <Button text='arrows' />
                    </div>
                    <div className='hidden md:flex h-[60px]' onClick={swapPickupDropoff}>
                        <Button text='arrows' />
                    </div>
                    <TimeCard text='Drop-Off' />
                </div>
                <div className='flex justify-between mt-36 md:mt-11 mb-5'>
                    <p className=' text-[#90A3BF] font-normal md:text-lg md:ml-5'>Popular Cars</p>
                    <Link to='/search'>
                        <button className=' text-[#3563E9] font-medium text-sm md:text-lg'>View All</button>
                    </Link>
                </div>
                <div className='flex gap-5 md:gap-8 overflow-x-scroll hide-scroll md:flex-wrap'>
                    {availableCars.slice(0, 4).map((car, index) => (
                        <CarCard key={index} {...car} page='home' />
                    ))}
                </div>
                <p className=' text-[#90A3BF] font-normal mt-8 mb-5 md:text-lg md:ml-5'>Recommended Cars</p>
                <div className='flex flex-col gap-5 md:hidden'>
                    {availableCars.slice(0, 5).map((car, index) => (
                        <CarCard key={index} {...car} />
                    ))}
                </div>
                <div className='flex-row flex-wrap gap-8 hidden md:flex'>
                    {availableCars.slice(0, 8).map((car, index) => (
                        <CarCard key={index} {...car} />
                    ))}
                </div>
                <div className='flex justify-center p-12 relative'>
                    <div className={`${availableCars.length > 4 ? 'flex' : 'hidden'}`}>
                        <Button text='Show More Cars' />
                    </div>
                    <p className='absolute text-[#90A3BF] right-0 top-14 font-medium'>{availableCars.length} Cars</p>
                </div>
            </div>
        </div>
    )
}

export default Hero