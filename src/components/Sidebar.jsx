import { Filter, Input } from '../components'
import { typeFilters, capacityFilters } from '../constants/carList'

const Sidebar = () => {
  return (
    <div className='bg-white h-full w-[360px] border-t px-8 py-10'>
      <h4 className='text-[#94A7CB] text-sm font-medium mb-7'>SEARCH</h4>
      <Input placeholder='Search by brand or title' rounded />
      <h4 className='text-[#94A7CB] text-sm font-medium mt-14 mb-7 tracking-widest'>TYPE</h4>
      <div className='flex flex-col gap-8'>
        {typeFilters.map((type, i) => (
          <Filter key={type.name + i} {...type} />
        ))}
      </div>
      <h4 className='text-[#94A7CB] text-sm font-medium mt-14 mb-7 tracking-widest'>CAPACITY</h4>
      <div className='flex flex-col gap-8'>
        {capacityFilters.map((type, i) => (
          <Filter key={type.name + i} {...type} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar