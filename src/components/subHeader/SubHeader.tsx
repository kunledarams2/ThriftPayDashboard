// import clsx from 'clsx'
import classes from './subHeader.module.css'
import { NavLink } from 'react-router-dom'


const SubHeader = () => {
  return (
    <div className={classes.header}>
       
            <NavLink to='./overview' className={({ isActive }) =>[isActive ? `${classes.active}` : "",`${classes.link}`].join(' ')}>Overview</NavLink>
            <NavLink to='./transactions' className={({ isActive }) =>[isActive ? `${classes.active}` : "",`${classes.link}`].join(' ')}>Transactions</NavLink>


            
            {/* <li>Transactions</li> */}
    
        
    </div>
  )
}



export default SubHeader