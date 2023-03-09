import { morent } from '../assets'

const Footer = () => {
    return (
        <div className='bg-[#F6F7F9] px-6 pt-3'>
            <img src={morent} alt="logo" className='pb-4' />
            <p className='text-[#90A3BF] max-w-[65%] pb-12'>Our vision is to provide convenience and help increase your sales business.</p>
            <div className='flex justify-between'>
                <div className='flex-1'>
                    <h3 className='text-[#1A202C] font-bold text-xl mb-4'>About</h3>
                    <ul className='gap-3 flex flex-col text-[#90A3BF] text-lg'>
                        <li>How it works</li>
                        <li>Featured</li>
                        <li>Partnership</li>
                        <li>Business Relation</li>
                    </ul>
                </div>
                <div className='flex-1'>
                    <h3 className='text-[#1A202C] font-bold text-xl mb-4'>Socials</h3>
                    <ul className='gap-3 flex flex-col text-[#90A3BF] text-lg'>
                        <li>How it works</li>
                        <li>Featured</li>
                        <li>Partnership</li>
                        <li>Business Relation</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer