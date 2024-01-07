import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ThriftPlanSummary from "./ThriftPlanSummary";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import ThriftPlanMember from "./ThriftPlanMember";
import ThriftPlanRequest from "./ThriftPlanRequest";
import ThriftPlanActivities from "./ThriftPlanActivities";
import {
  ActiveThriftPlanConvert,
  ActiveThriftPlanData,
  Convert,
  Data,
  Members,
  ThriftPlanResponse,
  getThriftPlanActive,
  getThriftPlanOverview,
  getThriftPlans,
  thriftPlanOverviewResponseConvert,
} from "../../services/thriftPlans";
import {
  StateProvider,
  useStateContext,
} from "./state_provider/OverviewStateContext";
// import ReviewRquest from "../modal/ReviewRequest/ReviewRquest";
import { boolean } from "zod";
import ReviewRquest from "../modal/ReviewRequest/ReviewRquest";

const ThriftPlanInfoContent = () => {
  const [members, setMembers] = useState<Members | undefined>(undefined);
  let navigate: NavigateFunction = useNavigate();
  const { state } = useLocation();
  const { data } = state;
  console.log(data);
  const [details, setDetails] = useState(false);
  const [overview, setOverview] = useState(true);

  const handelViewPlanDetail = () => {
    setDetails(true);
    setOverview(false);
    navigate("/thrift/summary/detail", { state: { data: data } });
  };
  const handelViewPlanOverview = () => {
    setDetails(false);
    setOverview(true);
    navigate("/thrift/summary/overview", { state: { data: data } });
  };

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

  // const [loading, setLoading] = useState(false);
  // const [empty, setEmpty] = useState(false);
  // const [progress, setProgress] = useState(0);
  // const [status, setStatus] = useState(false);

  // const [thriftPlanList, setthriftPlanList] = useState<
  //   ThriftPlanResponse | undefined
  // >(undefined);

  // const [thriftPlanActive, setthriftPlanActive] = useState<
  //   ActiveThriftPlanData | undefined
  // >(undefined);

  // const [thriftPlanOverview, setthriftPlanOverview] = useState<
  //   Data | undefined
  // >(undefined);
  // const { parentState, setParentState } = useStateContext();

  // useEffect(() => {
  //   setLoading(true);
  //   getThriftPlanOverview(data.id).then(
  //     (data) => {
  //       const stringJson = JSON.stringify(data, null, 4);
  //       const responseData =
  //         thriftPlanOverviewResponseConvert.tothriftPlanOverviewResponse(
  //           stringJson
  //         );
  //       if (responseData.success) {
  //         setthriftPlanOverview(responseData.data);
  //         if (responseData.data.contributions.length == 0) setEmpty(false);
  //       } else {
  //         setEmpty(true);
  //       }
  //       setLoading(false);
  //       // console.log(responseData.results);
  //       // setthriftPlanList(responseData);
  //       // setContent(response.data);
  //     },
  //     (error) => {
  //       setLoading(false);
  //       const _content =
  //         (error.response &&
  //           error.response.data &&
  //           error.response.data.message) ||
  //         error.message ||
  //         error.toString();
  //       // setContent(_content);
  //     }
  //   );
  // }, []);

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

  const [open, setOpen] = useState(false);

  const handleOpenReview = () => true;
  // {
  // return true;
  //   // console.log("clickopenReview");
  // };

  function Callback() {}

  return (
    <StateProvider>
      <>
        <div className="summary-content-empty">
          <div>
            <Outlet />
          </div>

          {/* <div className="content-summary-side">
            <div className="frame-1000002730">
              <div className="bottom-summary-side">
                <div className="frame-1000002715">
                  <div className="start-date-summary-side">Start Date: </div>
                  <div className="july-14-2023-summary-side">
                    July 14, 2023{" "}
                  </div>
                </div>
                <div className="bagde-summary-side">
                  <div className="renter-summary-side">Active </div>
                </div>
              </div>
            </div>
            <div className="frame-1000002729">
              <div className="thrift-plan-card-summary-side">
                <div className="basic-thrift-plan-i-summary-side">
                  {data.name}
                </div>
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
                      {(
                        data.total_slot * data.contribution_amount
                      ).toLocaleString("en-NG", {
                        style: "currency",
                        currency: "NGN",
                      })}{" "}
                    </div>
                    <div className="target-remit-monthly-summary-side">
                      Target Remit/Monthly{" "}
                    </div>
                  </div>
                  <div className="info-4-summary-side">
                    <div className="_5-5-summary-side">
                      {data.available_slot}/{data.total_slot}
                    </div>
                    <div className="filled-slots-summary-side">
                      Filled Slots{" "}
                    </div>
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
                    <div className="feb-nov-2023-summary-side">
                      Feb - Nov 2023{" "}
                    </div>
                    <div className="duration-summary-side">Duration </div>
                  </div>
                  <div className="frame-625901">
                    <div className="february-summary-side">February </div>
                    <div className="current-month-summary-side">
                      Current Month{" "}
                    </div>
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
                        member
                          ? "tab-label2-summary-side"
                          : "tab-label-summary-side"
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
                        request
                          ? "tab-label2-summary-side"
                          : "tab-label-summary-side"
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
          </div> */}
          {/* <ThriftPlanSummary /> */}

          {/* <div> */}

          {/* </div> */}
          <ReviewRquest />
        </div>
      </>
    </StateProvider>
  );
};

export default ThriftPlanInfoContent;
