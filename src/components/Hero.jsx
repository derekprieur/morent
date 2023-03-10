import { Button, CarCard, HeroCard, TimeCard } from '../components'
import { popularCars, cars } from '../constants/carList'

const Hero = () => {
    return (
        <div className='relative flex flex-col md:px-16'>
            <div className='absolute px-6 flex items-center w-full justify-center -top-28 md:hidden'>
                <HeroCard size='small' />
            </div>
            <div className='hidden md:flex mt-8 gap-8'>
                <HeroCard size='large' />
                <HeroCard alt />
            </div>
            <div className='px-6 md:px-0'>
                <div className='mt-36 md:mt-8 gap-8 md:gap-10 flex flex-col md:flex-row relative items-center'>
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
                    <button className=' text-[#3563E9] font-medium text-sm'>View All</button>
                </div>
                <div className='flex gap-5 overflow-x-scroll hide-scroll'>
                    {popularCars.map((car, index) => (
                        <CarCard key={index} {...car} page='home' />
                    ))}
                </div>
                <p className=' text-[#90A3BF] font-normal mt-8 mb-5'>Recommended Cars</p>
                <div className='flex flex-col gap-5'>
                    {cars.slice(0, 5).map((car, index) => (
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