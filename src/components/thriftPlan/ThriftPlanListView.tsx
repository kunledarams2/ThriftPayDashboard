import React from "react";
import PlanListItem from "./ThriftPlanView/PlanListItem";

const ThriftPlanListView = () => {
  return (
    <>
      <div className="heading_wrapper">
        <div className="heading">
          <div className="thrift-name">Thrift Name </div>
          <div className="date-created">Date Created </div>
          <div className="status">Status </div>
          <div className="start-date">Start Date </div>
          <div className="amount-per-member">Amount per Member </div>
          <div className="no-of-slots">No of Slots </div>
          <div className="filled-slots">Filled Slots </div>
          <div className="frame-1000002753">
            <div className="progress-thrift-overview-list">Progress</div>
            <div className="frame-1000002711"></div>
          </div>
        </div>
      </div>

      {/* <div wrapper-list-card>
        <PlanListItem />
        <PlanListItem /> <PlanListItem /> <PlanListItem />
      </div> */}
    </>
  );
};

export default ThriftPlanListView;
