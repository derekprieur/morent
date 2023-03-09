import { HeroCard, TimeCard } from '../components'

const Hero = () => {
    return (
        <div className='px-6 relative flex items-center justify-center'>
            <div className='absolute px-6 flex'>
                <HeroCard size='small' />
            </div>
            {/* <TimeCard /> */}
        </div>
    )
}

export default Hero