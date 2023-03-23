import React, { useState } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'

import { Button } from '../components'

const Rent = () => {
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropOffLocation, setDropOffLocation] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [dropOffDate, setDropOffDate] = useState('');
    const [pickupTime, setPickupTime] = useState('');
    const [dropOffTime, setDropOffTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const rentData = {
            pickupLocation,
            dropOffLocation,
            pickupDate,
            dropOffDate,
            pickupTime,
            dropOffTime
        };

        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/api/rentcar`, rentData, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            console.log('Car rented successfully:', response);
        } catch (error) {
            console.error("Error renting car:", error);
        }

    };

    return (
        <div className='bg-[#F6F7F9] pt-8 md:px-72 md:py-10 h-full'>
            <div className='bg-white rounded-xl px-6 pt-10 md:p-6'>
                <h3 className='font-bold text-2xl mb-1'>Rent Car</h3>
                <p className='text-[#90A3BF]'>Please enter your info</p>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col md:flex-row gap-8 mt-6'>
                        <div className='flex flex-col flex-1'>
                            <h3 className='font-medium text-lg mb-4'>Pickup Location</h3>
                            <input required placeholder='Your location' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} />
                        </div>
                        <div className='flex flex-col flex-1'>
                            <h3 className='font-medium text-lg mb-4'>Drop Off Location</h3>
                            <input required placeholder='Drop off location' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' value={dropOffLocation} onChange={(e) => setDropOffLocation(e.target.value)} />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-8 mt-6'>
                        <div className='flex flex-col flex-1'>
                            <h3 className='font-medium text-lg mb-4'>Pickup Date</h3>
                            <div className="flex items-center rounded-md md:rounded-xl bg-[#F6F7F9]">
                                <AiOutlineCalendar className='text-2xl ml-4 text-[#90A3BF]' />
                                <input required type="date" placeholder='MM/YY/DD' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-2 py-4 placeholder:font-light w-full' value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
                            </div>
                        </div>
                        <div className='flex flex-col flex-1'>
                            <h3 className='font-medium text-lg mb-4'>Drop Off Date</h3>
                            <div className="flex items-center rounded-md md:rounded-xl bg-[#F6F7F9]">
                                <AiOutlineCalendar className='text-2xl ml-4 text-[#90A3BF]' />
                                <input required type="date" placeholder='MM/YY/DD' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-2 py-4 placeholder:font-light w-full' value={dropOffDate} onChange={(e) => setDropOffDate(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-8 mt-6'>
                        <div className='flex flex-col flex-1'>
                            <h3 className='font-medium text-lg mb-4'>Pickup Time</h3>
                            <input required type="time" placeholder='HH:MM' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} />
                        </div>
                        <div className='flex flex-col flex-1'>
                            <h3 className='font-medium text-lg mb-4'>Drop Off Time</h3>
                            <input required type="time" placeholder='HH:MM' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' value={dropOffTime} onChange={(e) => setDropOffTime(e.target.value)} />
                        </div>
                    </div>
                    <div className='mt-8 mb-10 md:mb-0'>
                        <Button text='Rent Car' full rounded size='large' type='submit' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Rent