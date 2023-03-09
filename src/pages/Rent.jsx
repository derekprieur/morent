import { Button, CarCard, Sidebar, TimeCard } from '../components'
import { cars } from '../constants/carList'

const Rent = () => {
    return (
        <div className='flex bg-background h-full'>
            <div className='hidden md:flex'>
                <Sidebar />
            </div>
            <div className='py-8 px-6 md:px-8 flex-1 space-y-8 border-t'>
                <div className='gap-8 md:gap-10 flex flex-col md:flex-row relative items-center'>
                    <TimeCard text='Pick-Up' date='20 July 2022' time='07:00' />
                    <div className='absolute md:hidden top-32 left-[180px]'>
                        <Button text='arrows' />
                    </div>
                    <div className='hidden md:flex h-[60px]'>
                        <Button text='arrows' />
                    </div>
                    <TimeCard text='Drop-Off' date='21 July 2022' time='01:00' />
                </div>
                <div className='flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-8'>
                    {cars.map((car, i) => (
                        <CarCard key={car.name + i} {...car} />
                    ))}
                </div>
                <div className='flex justify-center pt-4 relative'>
                    <Button text='Show More Cars' />
                    <p className='absolute text-[#90A3BF] right-0 top-7 font-medium'>120 Cars</p>
                </div>
            </div>
        </div>
    )
}

export default Rent