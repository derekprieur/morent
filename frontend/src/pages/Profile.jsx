import { carBanner, profilePic } from "../assets"
import { Button, CarCard } from "../components"
import { cars, popularCars } from "../constants/carList"

const Profile = () => {
    return (
        <div className='bg-[#F6F7F9] h-full p-6 md:p-[70px] rounded-xl'>
            <h3 className="font-bold text-xl">My Profile</h3>
            <div className='h-[300px] bg-white mt-7 rounded-xl relative'>
                <img src={carBanner} alt="car banner" className="absolute w-full object-cover h-[180px] rounded-t-xl" />
                <img src={profilePic} alt="avatar" className="absolute w-[70px] h-[70px] object-cover md:w-40 md:h-40 bottom-24 left-3 md:bottom-5 md:left-8" />
                <div className="flex flex-col justify-end h-full">
                    <div className="flex flex-row w-full justify-between items-end pr-12 pb-8">
                        <div className="flex flex-col z-50 pl-3 md:pl-56 gap-1">
                            <h2 className="text-xl font-bold">Jane Daniel</h2>
                            <p className="text-[#1A202C] text-base font-light">Agent</p>
                        </div>
                        <Button text='Edit Profile' />
                    </div>
                </div>
            </div>
            <p className=' text-[#90A3BF] font-normal md:text-lg md:ml-5 mt-14'>Rented Cars</p>
            <div className='flex flex-col md:flex-row gap-5 md:gap-8 overflow-x-scroll hide-scroll mt-8'>
                {cars.map((car, index) => (
                    <CarCard key={index} {...car} page='profile' />
                ))}
            </div>
            <p className=' text-[#90A3BF] font-normal md:text-lg md:ml-5 mt-14 hidden md:flex'>Cars for Rent</p>
            <div className='gap-5 md:gap-8 overflow-x-scroll hide-scroll mt-8 hidden md:flex'>
                {popularCars.map((car, index) => (
                    <CarCard key={index} {...car} page='profile' />
                ))}
            </div>
            <div className="flex justify-center my-14">
                <Button text='Add More Cars for Rent' rounded full size='large' />
            </div>
        </div>
    )
}

export default Profile