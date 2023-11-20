import React, { useState } from "react";
import DashboardSlider from "./dashboard/DashboardSlider";
import InnerContent from "./InnerContent";
import Header from "./dashboard/Header";
import MainAppRoutes from "../MainAppRoutes";
import SideBar from "./dashboard/SideBar";

const MainApp = () => {
  const [title, setTitle] = useState("Dashboard");

  const handleTitleClick = (title: string) => {
    setTitle(title);
  };
  return (
    <>
      <div className="sign-up-empty">
        <SideBar handleNavBarClick={handleTitleClick} />

        <div className="dashboard-inside-wrapper">
          <Header headerTitle={title} />
          <MainAppRoutes />
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default MainApp;
