import React from 'react'

import { AddCarForm } from '../components'
import useScrollToTop from '../utils/scrollToTop.js'

const AddCar = () => {
    useScrollToTop()
    return (
        <div className='bg-[#F6F7F9] pt-8 md:px-72 md:py-10 h-full'>
            <AddCarForm />
        </div>
    )
}

export default AddCar