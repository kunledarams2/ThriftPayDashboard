import React, { useEffect, useState } from "react";
// import { useStateContext } from "./state_provider/OverviewStateContext";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import ThriftPlanRequest from "./ThriftPlanRequest";

import ThriftPlanActivities from "./ThriftPlanActivities";
import ThriftPlanMember from "./ThriftPlanMember";
// import { useState } from "react";

const ThriftPlanSummarySide = () => {
  //   const { parentState, setParentState } = useStateContext();
  const { state } = useLocation();
  const { data } = state;
  console.log(data);

  let navigate: NavigateFunction = useNavigate();

  const [activity, setActivityTab] = useState(false);
  const [request, setRequestTab] = useState(false);
  const [member, setMemberTab] = useState(true);

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(
      (data.contribution_amount /
        (data.contribution_amount * data.total_slot)) *
        100
    );
  });

  const handleTabClickListener = (tabName: string) => {
    if (tabName === "activity") {
      setActivityTab(true);
      setRequestTab(false);
      setMemberTab(false);
    } else if (tabName === "request") {
      setActivityTab(false);
      setRequestTab(true);
      setMemberTab(false);
    } else {
      setActivityTab(false);
      setRequestTab(false);
      setMemberTab(true);
    }
  };

  return (
    <div className="content-summary-side">
      <div className="frame-1000002730">
        <div className="bottom-summary-side">
          <div className="frame-1000002715">
            <div className="start-date-summary-side">Start Date: </div>
            <div className="july-14-2023-summary-side">July 14, 2023 </div>
          </div>
          <div className="bagde-summary-side">
            <div className="renter-summary-side">Active </div>
          </div>
        </div>
      </div>
      <div className="frame-1000002729">
        <div className="thrift-plan-card-summary-side">
          <div className="basic-thrift-plan-i-summary-side">{data.name}</div>
          <div className="frame-625905">
            <div className="info-2-summary-side">
              <div className="_10-000-summary-side">
                {" "}
                {data.contribution_amount.toLocaleString("en-NG", {
                  style: "currency",
                  currency: "NGN",
                })}
              </div>
              <div className="amount-per-member-summary-side">
                Amount Per Member{" "}
              </div>
            </div>
            <div className="info-3-summary-side">
              <div className="_5-summary-side">{data.total_slot}</div>
              <div className="no-of-slots-summary-side">No of Slots </div>
            </div>
          </div>
          <div className="frame-625906">
            <div className="info-3-summary-side">
              <div className="_50-000-summary-side">
                {" "}
                {(data.total_slot * data.contribution_amount).toLocaleString(
                  "en-NG",
                  {
                    style: "currency",
                    currency: "NGN",
                  }
                )}{" "}
              </div>
              <div className="target-remit-monthly-summary-side">
                Target Remit/Monthly{" "}
              </div>
            </div>
            <div className="info-4-summary-side">
              <div className="_5-5-summary-side">
                {data.locked_slot}/{data.total_slot}
              </div>
              <div className="filled-slots-summary-side">Filled Slots </div>
            </div>
          </div>
          <div className="progress-summary-side">
            <div className="progress-bar-summary-side">
              <div
                className="rectangle-3972-summary-side"
                style={{ width: `${progress}%` }}
              ></div>
              <div className="rectangle-3973-summary-side"></div>
            </div>
            <div className="_50-summary-side">{progress}% </div>
          </div>
          <div className="divider-summary-side"></div>
          <div className="frame-1000002736">
            <div className="frame-625907">
              <div className="feb-nov-2023-summary-side">Feb - Nov 2023 </div>
              <div className="duration-summary-side">Duration </div>
            </div>
            <div className="frame-625901">
              <div className="february-summary-side">February </div>
              <div className="current-month-summary-side">Current Month </div>
            </div>
          </div>
        </div>
      </div>
      <div className="thrift-detail-member-summary-side">
        <div className="frame-1000002728">
          <div
            className="tab-summary-side"
            onClick={() => handleTabClickListener("member")}
          >
            <div className="frame-1000002690">
              <div
                className={
                  member ? "tab-label2-summary-side" : "tab-label-summary-side"
                }
              >
                Members
              </div>
            </div>
            <div
              className={
                member
                  ? "rectangle-32-summary-side"
                  : "rectangle-3-summary-side"
              }
            ></div>
          </div>
          <div
            className="tab-summary-side"
            onClick={() => handleTabClickListener("request")}
          >
            <div className="frame-1000002690">
              <div
                className={
                  request ? "tab-label2-summary-side" : "tab-label-summary-side"
                }
              >
                Requests{" "}
              </div>
            </div>
            <div
              className={
                request
                  ? "rectangle-32-summary-side"
                  : "rectangle-3-summary-side"
              }
            ></div>
          </div>
          <div className="tab-summary-side">
            <div className="frame-1000002689">
              <div
                className={
                  activity
                    ? "tab-label2-summary-side"
                    : "tab-label-summary-side"
                }
                onClick={() => handleTabClickListener("activity")}
              >
                Activities{" "}
              </div>
            </div>
            <div
              className={
                activity
                  ? "rectangle-32-summary-side"
                  : "rectangle-3-summary-side"
              }
            ></div>
          </div>
        </div>

        <div className="summary-right-tab-wrapper">
          {request && <ThriftPlanRequest />}
          {member && <ThriftPlanMember members={data} />}

          {activity && <ThriftPlanActivities />}
        </div>
      </div>
    </div>
  );
};

export default ThriftPlanSummarySide;
