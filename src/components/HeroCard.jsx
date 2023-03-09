import { carCardLightBlue, carCardLightBlueSmall } from "../assets"

const HeroCard = ({ size }) => {
    if (size === 'large') return <img src={carCardLightBlue} alt="car-card" className='rounded-[10px]' />
    if (size === 'small') return <img src={carCardLightBlueSmall} alt="car-card" className='rounded-[10px]' />
}

export default HeroCard