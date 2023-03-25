import { morent, morentLarge } from '../assets'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='bg-[#F6F7F9] md:bg-white px-6 md:px-[60px] pt-3 md:pt-[60px]'>
            <div className='flex flex-col md:flex-row justify-between'>
                <div>
                    <img src={morent} alt="logo" className='pb-4 flex md:hidden' />
                    <img src={morentLarge} alt="logo" className='pb-8 hidden md:flex' />
                    <p className='text-[#90A3BF] max-w-[65%] pb-12 md:text-lg'>Our vision is to provide convenience and help increase your sales business.</p>
                </div>
                <div className='flex gap-16 flex-wrap'>
                    <div>
                        <h3 className='text-[#1A202C] font-bold text-xl mb-4'>About</h3>
                        <ul className='gap-3 flex flex-col text-[#90A3BF] text-lg'>
                            <li>How it works</li>
                            <li>Featured</li>
                            <li>Partnership</li>
                            <li>Business Relation</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[#1A202C] font-bold text-xl mb-4'>Socials</h3>
                        <ul className='gap-3 flex flex-col text-[#90A3BF] text-lg'>
                            <li>Discord</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-[#1A202C] font-bold text-xl mb-4'>Community</h3>
                        <ul className='gap-3 flex flex-col text-[#90A3BF] text-lg'>
                            <li>Events</li>
                            <li>Blog</li>
                            <li>Podcast</li>
                            <li>Invite a friend</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row-reverse justify-between'>
                <div className='flex justify-between mt-12 font-bold text-sm md:text-lg md:gap-[60px]'>
                    <p>Privacy & Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <p className='font-bold text-sm md:text-lg mt-8 pb-6 md:pb-[60px]'>©{year} MORENT. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer