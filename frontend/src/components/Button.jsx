import { HiOutlineArrowNarrowUp, HiOutlineArrowNarrowDown } from 'react-icons/hi'

const Button = ({ text, size, rounded, full }) => {
    if (text === 'arrows') return (
        <button className='bg-[#3563E9] text-white p-5 rounded-[10px]'>
            <div className='flex'>
                <HiOutlineArrowNarrowUp className='text-xl -mr-1' />
                <HiOutlineArrowNarrowDown className='text-xl -ml-1' />
            </div>
        </button>)

    if (size === 'large') return (
        <button className={`bg-[#3563E9] text-white py-4 px-8 font-medium text-lg ${rounded ? 'rounded-xl' : 'rounded'} ${full && 'w-full'}`}>{text}</button>
    )
    return (
        <button className='bg-[#3563E9] text-white py-[10px] px-5 rounded'>{text}</button>
    )
}

export default Button