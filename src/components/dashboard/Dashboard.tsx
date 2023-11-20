import React, { useEffect } from "react";
import DashboardSlider from "./DashboardSlider";
import Overview from "./Overview";

import WalletBalance from "./WalletBalance";
import RecentActivities from "./RecentActivities";
import UserPieChart from "./UserPieChart";
import { Button } from "react-bootstrap";
import { getThriftPlans, getPlan } from "../../services/thriftPlans";
import "./dashboard.css";

const Dashboard = () => {
  // const thriftData = getThriftPlans().then((response) => {
  //   console.log(response);
  // });

  return (
    <>
      <div className="content-wrapper">
        <div className="button-past-week">
          <div className="button-past-week2">Past week </div>
          <svg
            className="button-past-week-icons"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1060_328)">
              <path
                d="M13 6L8 11L3 6"
                stroke="#444A5B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1060_328">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="overview-user-pie-chart-card">
          <div className="overview">
            {" "}
            <Overview />
          </div>
          <div className="user-pie-layout">
            <UserPieChart />
          </div>
        </div>

        <div className="wallet-recent-activities">
          <div>
            {" "}
            <WalletBalance />
          </div>
          <div>
            {" "}
            <RecentActivities />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
