import SideBar from "../../components/sideBar/SideBar"
import Header from "../../components/header/Header"
import classes from './Root.module.css'
import { Outlet } from "react-router-dom"
const Root = () => {
  return (
    <div className={classes.container}>
    <SideBar/>
    <div className={classes.outlet}>
      <Header/>
      <Outlet/>
    </div>
    </div>
    
  )
}

export default Root