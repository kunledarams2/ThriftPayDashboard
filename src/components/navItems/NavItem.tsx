import classes from './Navitem.module.css'
import { navProps } from '../utils/types'
import { NavLink } from 'react-router-dom'
import { clsx } from 'clsx';

interface linkChild {
    icon: string,
    title: string
}
const LinkChild = ({icon, title}:linkChild) => {
    return(
<div className={`${classes.navItem}`}>
        <span>
            <img src={icon}  />
        </span>
        <span>{title}</span>
        </div>
        )
}

const NavItem = ({inActiveicon,activeIcon, to, children}:navProps) => {
  return (
    <NavLink to={to} className={({ isActive }) =>
     [isActive ? `${classes.active}` : "",`${classes.link}`].join(' ')
  }>
        {({ isActive }) => <LinkChild icon={isActive?activeIcon:inActiveicon} title={children}/>}
    </NavLink>
  )
//   {`${classes.link}` }
}
// `${classes.navItem} active
export default NavItem

// ({isActive})=> isActive? inActiveicon: activeIcon