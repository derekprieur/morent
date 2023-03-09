import { magnify } from "../assets"

const Input = ({ placeholder, rounded }) => {
    return (
        <div className={`border border-[#C3D4E966] flex items-center py-[11px] px-[26px] gap-2 rounded-[10px] w-full flex-1 ${rounded ? 'rounded-[70px]' : 'rounded-full'}`}>
            <img src={magnify} alt="" />
            <input type="text" placeholder={placeholder} />
        </div>
    )
}

export default Input