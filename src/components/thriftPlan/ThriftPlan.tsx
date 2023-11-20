import React from "react";

import ThriftPlanEmptyView from "./ThriftPlanEmptyView";
import ThriftPlanOverview from "./ThriftPlanView/ThriftPlanOverview";
import "./styles/thrift_plan_style.css";
import ThriftPlanTab from "./ThriftPlanTab";

const ThriftPlan = () => {
  return (
    <div className="thrift-view-wrapper">
      <>
        <ThriftPlanTab />
        <ThriftPlanOverview />
      </>
    </div>
  );
};

export default ThriftPlan;
