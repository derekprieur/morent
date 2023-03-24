import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import { Button, CarCard, HeroCard, TimeCard } from '../components'
import { useFetchCarList } from '../utils/fetchCarList'
import { useFetchAvailableCars } from '../utils/fetchAvailableCars'

const Hero = () => {
    const { carList } = useSelector(state => state.carList)
    const { availableCars } = useSelector(state => state.availableCars)
    const fetchCarList = useFetchCarList()
    const fetchAvailableCars = useFetchAvailableCars()
    console.log(carList, 'carList')
    console.log(availableCars, 'availableCars')

    useEffect(() => {
        fetchCarList()
        fetchAvailableCars()
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
                <div className='mt-36 md:mt-8 gap-8 md:gap-10 flex flex-col md:flex-row relative items-center md:justify-center'>
                    <TimeCard text='Pick-Up' date='20 July 2022' time='07:00' />
                    <div className='absolute md:hidden top-32 flex justify-center'>
                        <Button text='arrows' />
                    </div>
                    <div className='hidden md:flex h-[60px]'>
                        <Button text='arrows' />
                    </div>
                    <TimeCard text='Drop-Off' date='21 July 2022' time='01:00' />
                </div>
                <div className='flex justify-between mt-8 md:mt-11 mb-5'>
                    <p className=' text-[#90A3BF] font-normal md:text-lg md:ml-5'>Popular Cars</p>
                    <Link to='/search'>
                        <button className=' text-[#3563E9] font-medium text-sm md:text-lg'>View All</button>
                    </Link>
                </div>
                <div className='flex gap-5 md:gap-8 overflow-x-scroll hide-scroll md:flex-wrap'>
                    {carList.slice(0, 4).map((car, index) => (
                        <CarCard key={index} {...car} page='home' />
                    ))}
                </div>
                <p className=' text-[#90A3BF] font-normal mt-8 mb-5 md:text-lg md:ml-5'>Recommended Cars</p>
                <div className='flex flex-col gap-5 md:hidden'>
                    {carList.slice(0, 5).map((car, index) => (
                        <CarCard key={index} {...car} />
                    ))}
                </div>
                <div className='flex-row flex-wrap gap-8 hidden md:flex'>
                    {carList.slice(0, 8).map((car, index) => (
                        <CarCard key={index} {...car} />
                    ))}
                </div>
                <div className='flex justify-center p-12 relative'>
                    <Button text='Show More Cars' />
                    <p className='absolute text-[#90A3BF] right-0 top-14 font-medium'>120 Cars</p>
                </div>
            </div>
        </div>
    )
}

export default Hero