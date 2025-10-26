import React, { useState } from "react";
// import CustomerChart from "../../components/Customers/CustomerChart";
// import CustomerOverview from "../../components/Customers/customerOverview";
// import UserDistribution from "../../components/Customers/UserDistribution";
// import "../Customers/customer.css";
// import styles from "./usercontent.module.css";

// import UserSubTab from "../../components/Customers/Usertab";
// import UserListHeader from "../../components/Customers/UserListHeader";
// import UserListView from "../../components/Customers/UserListView";
import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";
import { UserStateProvider } from "./UserStateProvider";
import UserTab from "./UserTab";

const CustomerDashboard = () => {
  let navigate: NavigateFunction = useNavigate();
  const [details, setDetails] = useState(false);
  const [overview, setOverview] = useState(true);

  const handelViewDetail = () => {
    setDetails(true);
    setOverview(false);
    navigate("/users/info/all");
  };
  const handelViewOverview = () => {
    setDetails(false);
    setOverview(true);
    navigate("/users");
  };
  return (
    <div>
      <UserTab />

      <UserStateProvider>
        <Outlet />
      </UserStateProvider>
    </div>
  );
};

export default CustomerDashboard;
