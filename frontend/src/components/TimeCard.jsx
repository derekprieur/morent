import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { updateField } from '../redux/timeInputsSlice'

const TimeCard = ({ text }) => {
    const timeInputs = useSelector(state => state.timeInputs.timeInputs)
    const dispatch = useDispatch()

    const [locationValue, setLocationValue] = useState('');
    const [dateValue, setDateValue] = useState('');
    const [timeValue, setTimeValue] = useState('');

    useEffect(() => {
        if (text === 'Pick-Up') {
            setLocationValue(timeInputs.pickupLocation)
            setDateValue(timeInputs.pickupDate)
            setTimeValue(timeInputs.pickupTime)
        } else {
            setLocationValue(timeInputs.dropoffLocation)
            setDateValue(timeInputs.dropoffDate)
            setTimeValue(timeInputs.dropoffTime)
        }
    }, [timeInputs])

    const createKey = (text, suffix) => {
        return text.toLowerCase().replace('-', '') + suffix;
    }

    const handleLocationChange = e => {
        setLocationValue(e.target.value);
        dispatch(updateField({ key: createKey(text, "Location"), value: e.target.value }))
    }

    const handleDateChange = e => {
        setDateValue(e.target.value);
        dispatch(updateField({ key: createKey(text, "Date"), value: e.target.value }))
    }

    const handleTimeChange = e => {
        setTimeValue(e.target.value);
        dispatch(updateField({ key: createKey(text, "Time"), value: e.target.value }))
    }

    return (
        <div className='bg-white w-full rounded-[10px] p-4 max-w-md md:max-w-2xl flex-shrink-0'>
            <div className='flex items-center gap-2 mb-6'>
                {text === 'Pick-Up' ? (
                    <div className='w-4 h-4 rounded-full flex items-center justify-center bg-[#3563E94D]'>
                        <div className='w-2 h-2 rounded-full bg-[#3563E9]' />
                    </div>
                ) : (
                    <div className='w-4 h-4 rounded-full flex items-center justify-center bg-[#5CAFFC4D]'>
                        <div className='w-2 h-2 rounded-full bg-[#5CAFFC]' />
                    </div>
                )}
                <h2 className='font-medium text-[#1A202C] text-xl'>{text}</h2>
            </div>
            <div className='flex justify-between flex-wrap'>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-[#1A202C] font-bold text-xl'>Locations</h3>
                    <input
                        type='text'
                        className='text-[#90A3BF] font-light text-sm'
                        placeholder='Select your city'
                        value={locationValue}
                        onChange={handleLocationChange}
                    />
                </div>
                <div className='border-r' />
                <div className='flex flex-col gap-2'>
                    <h3 className='text-[#1A202C] font-bold text-xl'>Date</h3>
                    <input
                        type='date'
                        className='text-[#90A3BF] font-light text-sm'
                        value={dateValue}
                        onChange={handleDateChange}
                    />
                </div>
                <div className='border-r' />
                <div className='flex flex-col gap-2'>
                    <h3 className='text-[#1A202C] font-bold text-xl'>Time</h3>
                    <input
                        type='time'
                        className='text-[#90A3BF] font-light text-sm'
                        value={timeValue}
                        onChange={handleTimeChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default TimeCard