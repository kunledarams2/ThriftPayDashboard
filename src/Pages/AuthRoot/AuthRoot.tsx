import SideBar from "../../components/sideBar/SideBar";
import Header from "../../components/header/Header";
import classes from "../Root/Root.module.css";
import { Outlet } from "react-router-dom";
import LoginSide from "../../components/oldies/auth/authside/LoginSide";

const AuthRoot = () => {
  return (
    <div className={classes.container}>
      <LoginSide />
      <div className={classes.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthRoot;
