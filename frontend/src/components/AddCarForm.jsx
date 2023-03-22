import { AiOutlineUpload, AiOutlineFile, AiOutlineCalendar } from 'react-icons/ai'
import axios from 'axios'
import { useState } from 'react'

import { Button } from '../components'
import { useSelector } from 'react-redux'

const AddCarForm = () => {
    const [title, setTitle] = useState('');
    const [brand, setBrand] = useState('');
    const [rentPrice, setRentPrice] = useState('');
    const [capacity, setCapacity] = useState('');
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropOffLocation, setDropOffLocation] = useState('');
    const [availabilityFrom, setAvailabilityFrom] = useState('');
    const [availabilityTo, setAvailabilityTo] = useState('');

    const token = localStorage.getItem('accessToken');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const carData = {
            title,
            brand,
            rentPrice,
            capacity,
            type,
            location,
            pickupLocation,
            dropOffLocation,
            availabilityFrom,
            availabilityTo,
        };

        try {
            const response = await axios.post('http://localhost:3000/api/addcar', carData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        } catch (error) {
            console.error('Error adding car:', error);
        }
    };

    return (
        <div className='bg-white rounded-xl px-6 pt-10 md:p-6'>
            <h3 className='font-bold text-2xl mb-1'>Add a Car for Rent</h3>
            <p className='text-[#90A3BF]'>Please enter your car info</p>
            <h4 className='mt-8 text-[#3563E9] text-xl font-extrabold mb-6'>CAR INFO</h4>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col md:flex-row gap-8'>
                    <div className='flex flex-col flex-1'>
                        <h3 className='font-medium text-lg mb-4'>Car Title</h3>
                        <input required placeholder='Your title' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className='flex flex-col flex-1'>
                        <h3 className='font-medium text-lg mb-4'>Car Brand</h3>
                        <input required placeholder='Your title' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' value={brand} onChange={(e) => setBrand(e.target.value)} />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-8 mt-6'>
                    <div className='flex flex-col flex-1'>
                        <h3 className='font-medium text-lg mb-4'>Rent Price</h3>
                        <input required placeholder='Your title' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' value={rentPrice} onChange={(e) => setRentPrice(e.target.value)} />
                    </div>
                    <div className='flex flex-col flex-1'>
                        <h3 className='font-medium text-lg mb-4'>Capacity</h3>
                        <input required placeholder='Your title' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' value={capacity} onChange={(e) => setCapacity(e.target.value)} />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-8 mt-6'>
                    <div className='flex flex-col flex-1'>
                        <h3 className='font-medium text-lg mb-4'>Car Type</h3>
                        <input required placeholder='Your title' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' value={type} onChange={(e) => setType(e.target.value)} />
                    </div>
                    <div className='flex flex-col flex-1'>
                        <h3 className='font-medium text-lg mb-4'>Location</h3>
                        <input required placeholder='Your title' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                </div>
                <h4 className='mt-8 text-[#3563E9] text-xl font-extrabold mb-6'>PICKUP INFO</h4>
                <div className='flex flex-col md:flex-row gap-8'>
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
                        <h3 className='font-medium text-lg mb-4'>Availability From</h3>
                        <div className="flex items-center rounded-md md:rounded-xl bg-[#F6F7F9]">
                            <AiOutlineCalendar className='text-2xl ml-4 text-[#90A3BF]' />
                            <input required placeholder='MM/YY/DD' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-2 py-4 placeholder:font-light w-full' value={availabilityFrom} onChange={(e) => setAvailabilityFrom(e.target.value)} />
                        </div>
                    </div>
                    <div className='flex flex-col flex-1'>
                        <h3 className='font-medium text-lg mb-4'>Availability To</h3>
                        <div className="flex items-center rounded-md md:rounded-xl bg-[#F6F7F9]">
                            <AiOutlineCalendar className='text-2xl ml-4 text-[#90A3BF]' />
                            <input required placeholder='MM/YY/DD' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-2 py-4 placeholder:font-light w-full' value={availabilityTo} onChange={(e) => setAvailabilityTo(e.target.value)} />
                        </div>
                    </div>
                </div>
                <h3 className='font-medium text-lg mt-6 mb-4'>Upload Images</h3>
                <div className='border-dashed border flex flex-col justify-center items-center w-full gap-3 py-11'>
                    <AiOutlineUpload className='text-[#3563E9] text-4xl' />
                    <p>Drag and drop an image, or <span className='text-[#3563E9] font-semibold'>Browse</span></p>
                    <p className='text-[#90A3BF] font-light'>High resolution images (png, jpg, gif)</p>
                </div>
                <div className='mt-10 flex w-full mb-10'>
                    <Button text='Rent Now' size='large' rounded full />
                </div>
            </form>
        </div>
    )
}

export default AddCarForm