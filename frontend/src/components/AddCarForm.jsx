import { AiOutlineUpload, AiOutlineFile, AiOutlineCalendar } from 'react-icons/ai'

import { Button } from '../components'

const AddCarForm = () => {
    return (
        <div className='bg-white rounded-xl px-6 pt-10 md:p-6'>
            <h3 className='font-bold text-2xl mb-1'>Add a Car for Rent</h3>
            <p className='text-[#90A3BF]'>Please enter your car info</p>
            <h4 className='mt-8 text-[#3563E9] text-xl font-extrabold mb-6'>CAR INFO</h4>
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='flex flex-col flex-1'>
                    <h3 className='font-medium text-lg mb-4'>Car Title</h3>
                    <input placeholder='Your title' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' />
                </div>
                <div className='flex flex-col flex-1'>
                    <h3 className='font-medium text-lg mb-4'>Car Brand</h3>
                    <input placeholder='Your title' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-8 mt-6'>
                <div className='flex flex-col flex-1'>
                    <h3 className='font-medium text-lg mb-4'>Rent Price</h3>
                    <input placeholder='Your title' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' />
                </div>
                <div className='flex flex-col flex-1'>
                    <h3 className='font-medium text-lg mb-4'>Capacity</h3>
                    <input placeholder='Your title' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-8 mt-6'>
                <div className='flex flex-col flex-1'>
                    <h3 className='font-medium text-lg mb-4'>Cat Type</h3>
                    <input placeholder='Your title' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' />
                </div>
                <div className='flex flex-col flex-1'>
                    <h3 className='font-medium text-lg mb-4'>Location</h3>
                    <input placeholder='Your title' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' />
                </div>
            </div>
            <h4 className='mt-8 text-[#3563E9] text-xl font-extrabold mb-6'>PICKUP INFO</h4>
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='flex flex-col flex-1'>
                    <h3 className='font-medium text-lg mb-4'>Pickup Location</h3>
                    <input placeholder='Your location' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' />
                </div>
                <div className='flex flex-col flex-1'>
                    <h3 className='font-medium text-lg mb-4'>Drop Off Location</h3>
                    <input placeholder='Drop off location' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-8 mt-6'>
                <div className='flex flex-col flex-1'>
                    <h3 className='font-medium text-lg mb-4'>Availability From</h3>
                    <div className="flex items-center rounded-md md:rounded-xl bg-[#F6F7F9]">
                        <AiOutlineCalendar className='text-2xl ml-4 text-[#90A3BF]' />
                        <input placeholder='MM/YY/DD' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-2 py-4 placeholder:font-light w-full' />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <h3 className='font-medium text-lg mb-4'>Availability To</h3>
                    <div className="flex items-center rounded-md md:rounded-xl bg-[#F6F7F9]">
                        <AiOutlineCalendar className='text-2xl ml-4 text-[#90A3BF]' />
                        <input placeholder='MM/YY/DD' className='rounded-md md:rounded-xl bg-[#F6F7F9] px-2 py-4 placeholder:font-light w-full' />
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
        </div>
    )
}

export default AddCarForm