import { Hero } from '../components'
import useScrollToTop from '../utils/scrollToTop.js'

const Home = () => {
    useScrollToTop()
    return (
        <div className='bg-background h-full'>
            <Hero />
        </div>
    )
}

export default Home