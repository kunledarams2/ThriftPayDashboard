import React from "react";
import CustomerOverview from "../../components/Customers/customerOverview";
import CustomerChart from "../../components/Customers/CustomerChart";
import UserDistribution from "../../components/Customers/UserDistribution";
import "../Customers/customer.css";

const UserOverview = () => {
  return (
    <>
      <div className="info">
        <CustomerOverview />
      </div>
      <div className="user">
        <div className="userchart">
          <CustomerChart />
        </div>
        <div className="userdistribution">
          <UserDistribution />
        </div>
      </div>
    </>
  );
};

export default UserOverview;
