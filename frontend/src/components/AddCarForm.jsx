import { AiOutlineUpload, AiOutlineFile } from 'react-icons/ai'

import { Button } from '../components'

const AddCarForm = () => {
    return (
        <div className='bg-white rounded-xl p-6'>
            <h3 className='font-bold text-2xl mb-1'>Add a Car for Rent</h3>
            <p className='text-[#90A3BF]'>Please enter your car info</p>
            <div className='flex flex-row gap-8 mt-8'>
                <div className='flex flex-col flex-1'>
                    <h3 className='font-medium text-lg mb-4'>Car Title</h3>
                    <input placeholder='Your title' className='rounded-xl bg-[#F6F7F9] px-8 py-4 placeholder:font-light' />
                </div>
                <div className='flex flex-col flex-1'>
                    <h3 className='font-medium text-lg mb-4'>Car Brand</h3>
                    <input placeholder='Your title' className='rounded-xl bg-[#F6F7F9] px-8 py-4 placeholder:font-light' />
                </div>
            </div>
            <div className='flex flex-row gap-8 mt-6'>
                <div className='flex flex-col flex-1'>
                    <h3 className='font-medium text-lg mb-4'>Rent Price</h3>
                    <input placeholder='Your title' className='rounded-xl bg-[#F6F7F9] px-8 py-4 placeholder:font-light' />
                </div>
                <div className='flex flex-col flex-1'>
                    <h3 className='font-medium text-lg mb-4'>Capacity</h3>
                    <input placeholder='Your title' className='rounded-xl bg-[#F6F7F9] px-8 py-4 placeholder:font-light' />
                </div>
            </div>
            <div className='flex flex-row gap-8 mt-6'>
                <div className='flex flex-col flex-1'>
                    <h3 className='font-medium text-lg mb-4'>Cat Type</h3>
                    <input placeholder='Your title' className='rounded-xl bg-[#F6F7F9] px-8 py-4 placeholder:font-light' />
                </div>
                <div className='flex flex-col flex-1'>
                    <h3 className='font-medium text-lg mb-4'>Location</h3>
                    <input placeholder='Your title' className='rounded-xl bg-[#F6F7F9] px-8 py-4 placeholder:font-light' />
                </div>
            </div>
            <h3 className='font-medium text-lg mt-6 mb-4'>Upload Images</h3>
            <div className='border-dashed border flex flex-col justify-center items-center w-full gap-3 py-11'>
                <AiOutlineUpload className='text-[#3563E9] text-4xl' />
                <p>Drag and drop an image, or <span className='text-[#3563E9] font-semibold'>Browse</span></p>
                <p className='text-[#90A3BF] font-light'>High resolution images (png, jpg, gif)</p>
            </div>
            <h3 className='font-medium text-lg mt-6 mb-4'>Upload Images</h3>
            <div className='border px-7 py-6 rounded-xl'>
                <div className='flex justify-between'>
                    <div className='flex gap-3 items-center'>
                        <AiOutlineFile className='text-[#3563E9] text-2xl' />
                        <p className='font-medium'>car_front.jpg</p>
                    </div>
                    <p className='text-[#90A3BF]'>2.5 MB of 5.1 MB</p>
                </div>
                <div className='w-full bg-[#EDEEF4] h-2 mt-3 rounded-xl'></div>
            </div>
            <div className='border px-7 py-6 rounded-xl mt-5'>
                <div className='flex justify-between'>
                    <div className='flex gap-3 items-center'>
                        <AiOutlineFile className='text-[#3563E9] text-2xl' />
                        <p className='font-medium'>car_front.jpg</p>
                    </div>
                    <p className='text-[#90A3BF]'>2.5 MB of 5.1 MB</p>
                </div>
                <div className='w-full bg-[#EDEEF4] h-2 mt-3 rounded-xl'></div>
            </div>
            <div className='mt-10 flex w-full justify-end'>
                <Button text='Rent Now' size='large' rounded />
            </div>
        </div>
    )
}

export default AddCarForm