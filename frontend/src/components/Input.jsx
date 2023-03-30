import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-hot-toast"

import { magnify } from "../assets"
import { updateSearch } from "../redux/activeFiltersSlice"
import { setCars } from "../redux/carListSlice"

const Input = ({ placeholder, rounded }) => {
    const dispatch = useDispatch()
    const [searchTimeout, setSearchTimeout] = useState(null);

    const displayToast = (success, message) => {
        if (success) {
            toast.success(message);
        } else {
            toast.error(message);
        }
    }

    const fetchCars = async (searchQuery) => {
        try {
            const response = await axios.get(`https://morent.onrender.com/api/searchcars`, {
                params: { q: searchQuery }
            });
            dispatch(setCars(response.data));
            displayToast(true, 'Search completed');
        } catch (error) {
            console.error('Error fetching cars', error);
            displayToast(false, 'Error searching for cars');
        }
    }

    const handleChange = (e) => {
        dispatch(updateSearch(e.target.value))
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }
        setSearchTimeout(setTimeout(() => {
            fetchCars(e.target.value);
        }, 500));
    }

    return (
        <div className={`border border-[#C3D4E966] flex items-center py-[11px] px-[26px] gap-2 rounded-[10px] w-full flex-1 ${rounded ? 'rounded-[70px]' : 'rounded-full'}`}>
            <img src={magnify} alt="" />
            <input type="text" placeholder={placeholder} onChange={handleChange} />
        </div>
    )
}

export default Input