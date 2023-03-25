import { useSelector, useDispatch } from "react-redux"

import { magnify } from "../assets"
import { updateSearch } from "../redux/activeFiltersSlice"

const Input = ({ placeholder, rounded }) => {
    const searchFilter = useSelector(state => state.activeFilters.searchFilter)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(updateSearch(e.target.value))
        console.log(searchFilter, 'searchFilter')
    }

    return (
        <div className={`border border-[#C3D4E966] flex items-center py-[11px] px-[26px] gap-2 rounded-[10px] w-full flex-1 ${rounded ? 'rounded-[70px]' : 'rounded-full'}`}>
            <img src={magnify} alt="" />
            <input type="text" placeholder={placeholder} onChange={handleChange} />
        </div>
    )
}

export default Input