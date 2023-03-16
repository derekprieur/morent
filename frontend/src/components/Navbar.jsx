import { AiFillHeart, AiFillBell } from 'react-icons/ai'
import { IoMdSettings } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'

import { Input, Login } from '../components'
import { morent, morentLarge, avatar, avatarLarge } from '../assets'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginPageOpen } from '../redux/authSlice'
import { setCurrentPage } from '../redux/currentPageSlice'
import { useState } from 'react'

const Navbar = () => {
    const user = useSelector(state => state.auth.user)
    const currentPage = useSelector(state => state.currentPage.currentPage)
    const loginPageOpen = useSelector(state => state.auth.loginPageOpen)
    const dispatch = useDispatch()
    const authenticated = false
    const notHomePage = location.pathname.includes('rent') || location.pathname.includes('profile') || location.pathname.includes('detail') || location.pathname.includes('login')
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

    const mobileMenuClasses = mobileMenuVisible
        ? 'transform translate-x-0 transition duration-300 ease-in-out'
        : 'transform -translate-x-full transition duration-300 ease-in-out'
    return (
        <>
            {!loginPageOpen &&
                <div className={`px-6 md:px-[60px] pt-8 md:py-10 bg-white ${notHomePage ? 'pb-8' : 'pb-36'}`}>
                    <div className="flex justify-between mb-8 md:mb-0 items-center">
                        <Link to='/'>
                            <img src={morent} alt="car" className='object-contain flex md:hidden' />
                            <img src={morentLarge} alt="car" className='object-contain hidden md:flex' />
                        </Link>
                        <div className="flex items-center gap-8">
                            <ul className="hidden md:flex items-center gap-8">
                                <Link to='/' onClick={() => dispatch(setCurrentPage('home'))}>
                                    <li className={`font-normal text-lg ${currentPage === 'home' ? 'text-[#3563E9]' : 'text-[#3D5278]'}`}>Home</li>
                                </Link>
                                <Link to='/rent' onClick={() => dispatch(setCurrentPage('search cars'))}>
                                    <li className={`font-normal text-lg ${currentPage === 'search cars' ? 'text-[#3563E9]' : 'text-[#3D5278]'}`}>Search Cars</li>
                                </Link>
                                <Link to='/add-car' onClick={() => dispatch(setCurrentPage('add car'))}>
                                    <li className={`font-normal text-lg ${currentPage === 'add car' ? 'text-[#3563E9]' : 'text-[#3D5278]'}`}>Add Car</li>
                                </Link>
                            </ul>
                            <Link to={authenticated ? '/profile' : '/login'} onClick={() => dispatch(setLoginPageOpen(true))}>
                                <img src={avatar} alt="avatar" className='object-contain flex md:hidden' />
                                <img src={avatarLarge} alt="avatar" className='object-contain hidden md:flex' />
                            </Link>
                            <div className='flex md:hidden'>
                                <RxHamburgerMenu className='text-2xl text-[#3D5278] cursor-pointer' onClick={() => setMobileMenuVisible(prev => !prev)} />
                            </div>
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
            }
            <div
                className={`fixed top-0 left-0 h-full w-3/4 bg-white z-10 ${mobileMenuClasses}`}
            >
                <ul className="flex flex-col items-start p-6 gap-4">
                    <Link to='/' onClick={() => { dispatch(setCurrentPage('home')); setMobileMenuVisible(false); }}>
                        <li className={`font-normal text-lg ${currentPage === 'home' ? 'text-[#3563E9]' : 'text-[#3D5278]'}`}>Home</li>
                    </Link>
                    <Link to='/rent' onClick={() => { dispatch(setCurrentPage('search cars')); setMobileMenuVisible(false); }}>
                        <li className={`font-normal text-lg ${currentPage === 'search cars' ? 'text-[#3563E9]' : 'text-[#3D5278]'}`}>Search Cars</li>
                    </Link>
                    <Link to='/add-car' onClick={() => { dispatch(setCurrentPage('add car')); setMobileMenuVisible(false); }}>
                        <li className={`font-normal text-lg ${currentPage === 'add car' ? 'text-[#3563E9]' : 'text-[#3D5278]'}`}>Add Car</li>
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default Navbar