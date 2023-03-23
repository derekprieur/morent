import { HiOutlineArrowNarrowUp, HiOutlineArrowNarrowDown } from 'react-icons/hi'

const Button = ({ text, size, rounded, full, profileImage, type }) => {
    if (text === 'My Profile') return (
        <button className='flex items-center justify-center gap-2 bg-[white] text-[#3563E9] py-4 rounded min-w-[100px] w-full text-center font-medium border border-[#C3D4E9]'>
            <img src={profileImage} alt="avatar" className='h-5 w-5 rounded-full' />
            {text}
        </button>
    )
    if (text === 'Login' || text === 'Sign Up') {
        if (rounded) return (
            <button type={type} className='bg-[#3563E9] text-white py-3 px-8 font-medium text-lg rounded-xl'>
                {text}
            </button>
        )
        return (
            <button className='bg-[white] text-[#3563E9] py-4 rounded min-w-[100px] w-full text-center font-medium border border-[#C3D4E9]'>
                {text}
            </button>
        )
    }

    if (text === 'Logout') return (
        <button className='bg-[#ED3F3F] text-white py-4 rounded min-w-[100px] w-full text-center font-medium border border-[#C3D4E9]'>
            {text}
        </button>
    )

    if (text === 'arrows') return (
        <button className='bg-[#3563E9] text-white p-5 rounded-[10px]'>
            <div className='flex'>
                <HiOutlineArrowNarrowUp className='text-xl -mr-1' />
                <HiOutlineArrowNarrowDown className='text-xl -ml-1' />
            </div>
        </button>)

    if (size === 'large') return (
        <button type='submit' className={`bg-[#3563E9] text-white py-4 px-8 font-medium text-lg ${rounded ? 'rounded-xl' : 'rounded'} ${full && 'w-full md:w-fit'}`}>{text}</button>
    )
    return (
        <button className='bg-[#3563E9] text-white py-[10px] px-5 rounded'>{text}</button>
    )
}

export default Button