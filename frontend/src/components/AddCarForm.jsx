import { AiOutlineUpload, AiOutlineCalendar } from 'react-icons/ai'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Button } from '../components'
import { useNavigate } from 'react-router-dom'

const AddCarForm = () => {
    const user = useSelector((state) => state.auth.user)
    const navigate = useNavigate()
    const [selectedFiles, setSelectedFiles] = useState(null)
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

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [])


    const triggerFileInput = () => {
        document.getElementById("fileInput").click();
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files);
        console.log(files);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const carData = new FormData();
        carData.append("title", title);
        carData.append("brand", brand);
        carData.append("rentPrice", rentPrice);
        carData.append("capacity", capacity);
        carData.append("type", type);
        carData.append("location", location);
        carData.append("pickupLocation", pickupLocation);
        carData.append("dropOffLocation", dropOffLocation);
        carData.append("availabilityFrom", availabilityFrom);
        carData.append("availabilityTo", availabilityTo);
        carData.append("owner", user._id);

        if (selectedFiles.length > 0) {
            selectedFiles.forEach((file) => {
                carData.append("files", file);
            });
        }

        try {
            const response = await axios.post("http://localhost:3000/api/addcar", carData, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
        } catch (error) {
            console.error("Error adding car:", error);
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
                        <select required className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4 placeholder:font-light' value={capacity} onChange={(e) => setCapacity(e.target.value)}>
                            <option value=''>Select a capacity</option>
                            <option value='2'>2 Person</option>
                            <option value='4'>4 Person</option>
                            <option value='6'>6 Person</option>
                            <option value='8'>8 or More</option>

                        </select>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-8 mt-6'>
                    <div className='flex flex-col flex-1'>
                        <h3 className='font-medium text-lg mb-4'>Car Type</h3>
                        <select required className='rounded-md md:rounded-xl bg-[#F6F7F9] px-4 md:px-8 py-4' value={type} onChange={(e) => setType(e.target.value)}>
                            <option value=''>Select a car type</option>
                            <option value='Sport'>Sport</option>
                            <option value='SUV'>SUV</option>
                            <option value='MPV'>MPV</option>
                            <option value='Sedan'>Sedan</option>
                            <option value='Coupe'>Coupe</option>
                            <option value='Hatchback'>Hatchback</option>
                        </select>
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
                <input
                    type="file"
                    id="fileInput"
                    accept="image/png, image/jpeg, image/gif"
                    hidden
                    multiple
                    onChange={handleFileChange}
                />
                <h3 className='font-medium text-lg mt-6 mb-4'>Upload Images</h3>
                <div className='border-dashed border flex flex-col justify-center items-center w-full gap-3 py-11 cursor-pointer' onClick={triggerFileInput}>
                    <AiOutlineUpload className='text-[#3563E9] text-4xl' />
                    <p>Drag and drop an image, or <span className='text-[#3563E9] font-semibold'>Browse</span></p>
                    <p className='text-[#90A3BF] font-light'>High resolution images (png, jpg, gif)</p>
                </div>
                <div className="mt-4">
                    {selectedFiles?.map((file, index) => (
                        <span key={index} className="mr-5 text-sm">
                            {file.name}
                        </span>
                    ))}
                </div>
                {selectedFiles?.length > 0 && (
                    <button
                        className="bg-red-500 text-white rounded-md px-4 py-2 mt-2"
                        onClick={() => setSelectedFiles([])}
                    >
                        Clear Files
                    </button>
                )}
                <div className='mt-10 flex w-full mb-10'>
                    <Button text='Register Car' size='large' rounded full />
                </div>
            </form>
        </div>
    )
}

export default AddCarForm