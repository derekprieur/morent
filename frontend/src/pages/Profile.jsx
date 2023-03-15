import { carBanner, profilePic } from "../assets"
import { Button, CarCard } from "../components"
import { cars, popularCars } from "../constants/carList"

const Profile = () => {
    return (
        <div className='bg-[#F6F7F9] h-full p-[70px]'>
            <h3 className="font-bold text-xl">My Profile</h3>
            <div className='h-[300px] bg-white mt-7 rounded-xl relative'>
                <img src={carBanner} alt="car banner" className="absolute w-full object-cover h-[180px]" />
                <img src={profilePic} alt="avatar" className="absolute bottom-5 left-8" />
                <div className="flex flex-col justify-end h-full">
                    <div className="flex flex-row w-full justify-between items-end pr-12 pb-8">
                        <div className="flex flex-col z-50 pl-56 gap-1">
                            <h2 className="text-xl font-bold">Jane Daniel</h2>
                            <p className="text-[#1A202C] text-base font-light">Agent</p>
                        </div>
                        <Button text='Edit Profile' />
                    </div>
                </div>
            </div>
            <p className=' text-[#90A3BF] font-normal md:text-lg md:ml-5 mt-14'>Rented Cars</p>
            <div className='flex gap-5 md:gap-8 overflow-x-scroll hide-scroll mt-8'>
                {popularCars.map((car, index) => (
                    <CarCard key={index} {...car} page='profile' />
                ))}
            </div>
            <p className=' text-[#90A3BF] font-normal md:text-lg md:ml-5 mt-14'>Cars for Rent</p>
            <div className='flex gap-5 md:gap-8 overflow-x-scroll hide-scroll mt-8'>
                {popularCars.map((car, index) => (
                    <CarCard key={index} {...car} page='profile' />
                ))}
            </div>
            <div className="flex justify-center my-14">
                <Button text='Add More Cars for Rent' />
            </div>
        </div>
    )
}

export default Profile