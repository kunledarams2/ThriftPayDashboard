import React, { useState } from "react";
// import CustomerChart from "../../components/Customers/CustomerChart";
// import CustomerOverview from "../../components/Customers/customerOverview";
// import UserDistribution from "../../components/Customers/UserDistribution";
import "../Customers/customer.css";
// import styles from "./usercontent.module.css";

// import UserSubTab from "../../components/Customers/Usertab";
// import UserListHeader from "../../components/Customers/UserListHeader";
// import UserListView from "../../components/Customers/UserListView";
import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";
import { UserStateProvider } from "./UserStateProvider";

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
      <div className="tabs">
        <div className="tab" onClick={handelViewOverview}>
          <div className="frame-1000002689">
            <div className={overview ? "tab-label" : "tab-label2"}>
              Overview{" "}
            </div>
          </div>
          <div className={overview ? "rectangle-3" : "rectangle-32"}></div>
        </div>
        <div className="tab" onClick={handelViewDetail}>
          <div className="frame-1000002690">
            <div className={details ? "tab-label" : "tab-label2"}>Users </div>
          </div>
          <div className={details ? "rectangle-3" : "rectangle-32"}></div>
        </div>
      </div>
      <UserStateProvider>
        <Outlet />
      </UserStateProvider>

      {/* <div className={styles.content}>
        <UserSubTab />
        <UserListHeader />
        <UserListView />
      </div> */}

      {/* <div className="info">
        <CustomerOverview />
      </div>
      <div className="user">
        <div className="userchart">
          <CustomerChart />
        </div>
        <div className="userdistribution">
          <UserDistribution />
        </div>
      </div> */}
    </div>
  );
};

export default CustomerDashboard;
