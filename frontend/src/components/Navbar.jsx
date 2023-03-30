import { AiOutlineClose, AiFillHome, AiFillPlusSquare } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import { SlMagnifier } from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { Button, Input, LogoutButton } from '../components'
import { morent, morentLarge } from '../assets'
import { Link } from 'react-router-dom'
import { setLoginPageOpen, setUser } from '../redux/authSlice'
import { setCurrentPage } from '../redux/currentPageSlice'

const Navbar = () => {
    const user = useSelector(state => state.auth.user)
    const currentPage = useSelector(state => state.currentPage.currentPage)
    const dispatch = useDispatch()
    const homePage = location.pathname === '/'
    console.log(homePage, 'homePage')
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

    const mobileMenuClasses = mobileMenuVisible
        ? 'transform translate-x-0 transition duration-300 ease-in-out'
        : 'transform -translate-x-full transition duration-300 ease-in-out'

    const handleLogout = () => {
        localStorage.removeItem('token')
        dispatch(setUser(null))
        dispatch(setCurrentPage('home'))
    }

    return (
        <>
            <div className={`px-6 md:px-[60px] pt-8 md:py-7 bg-white ${homePage ? 'pb-36' : 'pb-8'}`}>
                <div className="flex justify-between mb-8 md:mb-0 items-center">
                    <Link to='/' onClick={() => dispatch(setCurrentPage('home'))}>
                        <img src={morent} alt="car" className='object-contain flex md:hidden' />
                        <img src={morentLarge} alt="car" className='object-contain hidden md:flex' />
                    </Link>
                    <div className="flex items-center gap-8">
                        <ul className="hidden md:flex items-center gap-8">
                            <Link to='/' onClick={() => dispatch(setCurrentPage('home'))}>
                                <li className={`font-normal text-lg ${currentPage === 'home' ? 'text-[#3563E9]' : 'text-[#3D5278]'}`}>Home</li>
                            </Link>
                            <Link to='/search' onClick={() => dispatch(setCurrentPage('search cars'))}>
                                <li className={`font-normal text-lg ${currentPage === 'search cars' ? 'text-[#3563E9]' : 'text-[#3D5278]'}`}>Search Cars</li>
                            </Link>
                            <Link to={user != null ? '/add-car' : '/login'} onClick={() => { user != null && dispatch(setCurrentPage('add car')) }}>
                                <li className={`font-normal text-lg ${currentPage === 'add car' ? 'text-[#3563E9]' : 'text-[#3D5278]'}`}>Add Car</li>
                            </Link>
                        </ul>
                        <Link to={user != null ? '/profile' : '/login'} onClick={() => {
                            user === null &&
                                dispatch(setLoginPageOpen(true))
                            dispatch(setCurrentPage('profile'))
                        }}>
                            {user != null && <>
                                <img src={user.avatar} alt="avatar" className='object-contain flex h-7 w-7 md:w-11 md:h-11 rounded-full' />
                            </>
                            }
                        </Link>
                        <div className='flex md:hidden'>
                            <RxHamburgerMenu className='text-2xl text-[#3D5278] cursor-pointer' onClick={() => setMobileMenuVisible(prev => !prev)} />
                        </div>
                        {user != null &&
                            <Link to='/'>
                                <div className='hidden md:flex' onClick={handleLogout}>
                                    <LogoutButton />
                                </div>
                            </Link>
                        }
                        {
                            user === null &&
                            <Link to='/login' onClick={() => dispatch(setLoginPageOpen(true))} className='hidden md:flex'>
                                <Button text='Login' rounded />
                            </Link>
                        }
                    </div>
                </div>
                <div className={`justify-between md:hidden gap-4 ${currentPage === 'search cars' || location.pathname.includes('search') ? 'flex' : 'hidden'}`}>
                    <Input placeholder='Search something here' />
                    <div className="w-12 h-12 border border-[#C3D4E966] hidden custom375:flex items-center rounded-[10px] px-3 flex-col justify-between py-4">
                        <div className="border-b-2 border-[#3D5278] w-full relative">
                            <div className="border-2 w-2 h-2 bg-white rounded-full absolute border-[#3D5278] top-[-3px] left-1" />
                        </div>
                        <div className="border-b-2 border-[#3D5278] w-full relative">
                            <div className="border-2 w-2 h-2 bg-white rounded-full absolute border-[#3D5278] top-[-3px] left-[10px]" />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={` pt-6 pb-12 px-5 fixed top-8 w-full bg-[#F7F9FC] rounded-xl z-10 inset-x-1/2 ease-in-out duration-500 transition-all ${mobileMenuClasses} ${mobileMenuVisible ? 'translate-y-0' : 'translate-y-110'}`} style={{ transform: `translateX(-50%) ${mobileMenuVisible ? 'translateY(0)' : 'translateY(-140%)'}` }}
            >
                <div className='flex items-center justify-between'>
                    <img src={morent} alt="logo" />
                    <AiOutlineClose className='text-2xl text-[#3D5278] cursor-pointer' onClick={() => setMobileMenuVisible(false)} />
                </div>
                <ul className="flex flex-col gap-4 mt-12">
                    <Link to='/' onClick={() => { dispatch(setCurrentPage('home')); setMobileMenuVisible(false); }}>
                        <li className={` rounded flex items-center w-full p-3 font-normal text-lg ${currentPage === 'home' ? 'text-[white] bg-[#3563E9]' : 'text-[#3D5278] bg-[#f7f9fc]'}`}>
                            <AiFillHome className='text-lg mr-2' />
                            Home
                        </li>
                    </Link>
                    <Link to='/search' onClick={() => { handleLogout(); setMobileMenuVisible(false); }}>
                        <li className={`rounded flex items-center w-full p-3 font-normal text-lg bg-[#3563E9] ${currentPage === 'search cars' ? 'text-[white] bg-[#3563E9]' : 'text-[#3D5278] bg-[#f7f9fc]'}`}>
                            <SlMagnifier className='text-lg mr-2' />
                            Search Cars</li>
                    </Link>
                    <Link to='/add-car' onClick={() => { dispatch(setCurrentPage('add car')); setMobileMenuVisible(false); }}>
                        <li className={`rounded flex items-center w-full p-3 font-normal text-lg bg-[#3563E9] ${currentPage === 'add car' ? 'text-[white] bg-[#3563E9]' : 'text-[#3D5278] bg-[#f7f9fc]'}`}>
                            <AiFillPlusSquare className='text-lg mr-2' />
                            Add Car</li>
                    </Link>
                </ul>
                {user === null &&
                    <Link to='/login' onClick={() => { dispatch(setLoginPageOpen(true)); setMobileMenuVisible(false); }}>
                        <Button text='Login' />
                    </Link>}
                {user != null && <div className='flex flex-col gap-4 mt-8'>
                    <Link to='/profile' onClick={() => { setMobileMenuVisible(false); dispatch(setCurrentPage('profile')); }}>
                        <Button text='My Profile' profileImage={user.avatar} />
                    </Link>
                    <Link to='/' onClick={() => { dispatch(setUser(null)); setMobileMenuVisible(false) }}>
                        <Button text='Logout' />
                    </Link>
                </div>}
            </div>
        </>
    )
}

export default Navbar