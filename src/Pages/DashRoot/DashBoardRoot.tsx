import SideBar from "../../components/sideBar/SideBar";
import Header from "../../components/header/Header";
import classes from "./dashboardroot.module.css";
import { Outlet } from "react-router-dom";
import LoginPage from "../../components/oldies/auth/LoginPage";
import LoginSide from "../../components/oldies/auth/authside/LoginSide";
import { Slider } from "antd";

const DashboardRoot = () => {
  return (
    <div className={classes.container}>
      <SideBar />
      <div className={classes.outlet}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardRoot;
