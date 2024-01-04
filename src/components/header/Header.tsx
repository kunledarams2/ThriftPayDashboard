import {useLocation} from 'react-router-dom'
import Search from '../search/Search'
import AdminPanel from '../adminPanel/AdminPanel'
import classes from './header.module.css'
const Header = () => {
    const url = useLocation()
    let headerTitle = url.pathname.replace('/','')
    
    
    headerTitle = headerTitle.length === 0 ? '': headerTitle.split('-').map(pathname => pathname[0].toUpperCase()+pathname.substring(1)).join(' ')
  return (
    <header className={classes.header}>
      <div className={classes.headerTitle}>{headerTitle}</div>
      {/* <div className={}>form</div> */}
      <Search />
      <AdminPanel/>    
     </header>

   
  )
}

export default Header