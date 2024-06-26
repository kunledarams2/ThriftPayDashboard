import SideBar from "../../components/sideBar/SideBar";
import Header from "../../components/header/Header";
import classes from "./Root.module.css";
import { Outlet } from "react-router-dom";
import LoginPage from "../../components/oldies/auth/LoginPage";
import LoginSide from "../../components/oldies/auth/authside/LoginSide";

const Root = () => {
  return (
    <div className={classes.container}>
      <Outlet />
      {/* <LoginSide />
      <div className={classes.outlet}>
        <Header />
       
      </div> */}
    </div>
  );
};

export default Root;
