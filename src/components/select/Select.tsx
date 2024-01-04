import classes from './Select.module.css'
// import arrowdown from '../../assets/arrowdown.png'
import { useState } from 'react';
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";


// need to make it a versatile component
const options = ['Past Week','Past Month','1 Year','2 Years']
const defaultOption = options[0]
const Select = () => {
  const [isActive,setIsActive] = useState(false);
  const [currentValue,setCurrentValue] = useState(defaultOption);
  const handleClick = () => {
    setIsActive(!isActive)
  }
  
  const handleSelect = (option:string) => {
    setIsActive(!isActive);
    setCurrentValue(option)

  }
  return (
    <div className={classes.select}>
      <button onClick={handleClick}>
        <span>{currentValue}</span>
        {isActive? <IoIosArrowUp size={16} />:<IoIosArrowDown  size={16} />}
      </button>
      { isActive &&
      <ul>
        {options.map(option => <li key={option} onClick={()=>handleSelect(option)}>{option}</li>)}
      </ul>}
      </div>
  )
}

export default Select