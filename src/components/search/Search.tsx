// import classes from './Search.module.css'
import search from '../../assets/header/search.png'
interface searchProps {
  className?:string
}
import { twMerge } from 'tailwind-merge'
const Search = ({className}:searchProps) => {
  return (
    <div className={twMerge("flex items-center border-1 border-[#C3C6D2] rounded-md pl-3",className)} >
        <span><img src={search} alt="search" /></span>
         <input type="text" name="Search" placeholder='Search' className='border-none bg-none text-sm w-full outline-none !ring-0 '/>
    </div>
  )
}

export default Search