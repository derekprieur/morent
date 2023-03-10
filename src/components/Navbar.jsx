import { AiFillHeart, AiFillBell } from 'react-icons/ai'
import { IoMdSettings } from 'react-icons/io'

import { Input } from '../components'
import { morent, morentLarge, avatar, avatarLarge } from '../assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const notHomePage = location.pathname.includes('rent') || location.pathname.includes('profile')
    return (
        <div className={`px-6 md:px-[60px] pt-8 md:py-10 bg-white ${notHomePage ? 'pb-8' : 'pb-36'}`}>
            <div className="flex justify-between mb-8 md:mb-0 items-center">
                <Link to='/'>
                    <img src={morent} alt="car" className='object-contain flex md:hidden' />
                    <img src={morentLarge} alt="car" className='object-contain hidden md:flex' />
                </Link>
                <div className="flex items-center gap-5">
                    <div className="hidden md:flex items-center gap-5">
                        <div className='w-[44px] h-[44px] flex items-center justify-center border rounded-full'>
                            <AiFillHeart className='text-2xl text-[#3D5278]' />
                        </div>
                        <div className='w-[44px] h-[44px] flex items-center justify-center border rounded-full'>
                            <AiFillBell className='text-2xl text-[#3D5278]' />
                        </div>
                        <div className='w-[44px] h-[44px] flex items-center justify-center border rounded-full'>
                            <IoMdSettings className='text-2xl text-[#3D5278]' />
                        </div>
                    </div>
                    <Link to='/profile'>
                        <img src={avatar} alt="avatar" className='object-contain flex md:hidden' />
                        <img src={avatarLarge} alt="avatar" className='object-contain hidden md:flex' />
                    </Link>
                </div>
            </div>
            <div className="flex justify-between md:hidden gap-4">
                <Input placeholder='Search something here' />
                <div className="w-12 h-12 border border-[#C3D4E966] flex items-center rounded-[10px] px-3 flex-col justify-between py-4">
                    <div className="border-b-2 border-[#3D5278] w-full relative">
                        <div className="border-2 w-2 h-2 bg-white rounded-full absolute border-[#3D5278] top-[-3px] left-1" />
                    </div>
                    <div className="border-b-2 border-[#3D5278] w-full relative">
                        <div className="border-2 w-2 h-2 bg-white rounded-full absolute border-[#3D5278] top-[-3px] left-[10px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar