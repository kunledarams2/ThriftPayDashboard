import React from "react";

import ThriftPlanEmptyView from "./ThriftPlanEmptyView";
import ThriftPlanOverview from "./ThriftPlanView/ThriftPlanOverview";
import "./styles/thrift_plan_style.css";
import ThriftPlanTab from "./ThriftPlanTab";

const ThriftPlan = () => {
  return (
    <>
      <ThriftPlanTab />
      <ThriftPlanOverview />
    </>
    // <div className="thrift-view-wrapper">

    // </div>
  );
};

export default ThriftPlan;
