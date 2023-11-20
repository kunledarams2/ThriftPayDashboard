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
            <div className="tabs-summary">
              <div onClick={handelViewPlanOverview} className="tab-summary">
                <div className="frame-1000002689">
                  <div
                    className={
                      overview ? "tab-label-summary" : "tab-label2-summary"
                    }
                  >
                    Overview{" "}
                  </div>
                </div>
                <div
                  className={
                    overview ? "rectangle-3-summary" : "rectangle-32-summary"
                  }
                ></div>
              </div>
              <div onClick={handelViewPlanDetail} className="tab-summary">
                <div className="frame-1000002690">
                  <div
                    className={
                      details ? "tab-label-summary" : "tab-label2-summary"
                    }
                  >
                    Plan Details{" "}
                  </div>
                </div>
                <div
                  className={
                    details ? "rectangle-3-summary" : "rectangle-32-summary"
                  }
                ></div>
              </div>
              <div className="frame-1000002738">
                <div className="button-summary">
                  <svg
                    className="icons-summary"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1182_4277)">
                      <path
                        d="M6 13.5001H3C2.86739 13.5001 2.74021 13.4474 2.64645 13.3536C2.55268 13.2599 2.5 13.1327 2.5 13.0001V10.207C2.50006 10.0745 2.55266 9.94753 2.64625 9.85383L10.3538 2.14633C10.4475 2.05263 10.5746 2 10.7072 2C10.8397 2 10.9669 2.05263 11.0606 2.14633L13.8538 4.93758C13.9474 5.03134 14.0001 5.15847 14.0001 5.29102C14.0001 5.42357 13.9474 5.5507 13.8538 5.64446L6 13.5001Z"
                        stroke="#90949E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.5 13.5H6"
                        stroke="#90949E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.5 4L12 7.5"
                        stroke="#90949E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1182_4277">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="button2-summary">Edit Plan </div>
                </div>
                <div className="button3-summary">
                  <svg
                    className="icons2-summary"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1182_11855)">
                      <path
                        d="M9.25 8C9.25 8.24723 9.17669 8.4889 9.03934 8.69446C8.90199 8.90003 8.70676 9.06024 8.47836 9.15485C8.24995 9.24946 7.99861 9.27421 7.75614 9.22598C7.51366 9.17775 7.29093 9.0587 7.11612 8.88389C6.9413 8.70907 6.82225 8.48634 6.77402 8.24386C6.72579 8.00139 6.75054 7.75005 6.84515 7.52165C6.93976 7.29324 7.09998 7.09802 7.30554 6.96066C7.5111 6.82331 7.75277 6.75 8 6.75C8.33152 6.75 8.64946 6.8817 8.88388 7.11612C9.1183 7.35054 9.25 7.66848 9.25 8ZM8.69446 4.03934C8.4889 4.17669 8.24723 4.25 8 4.25C7.66848 4.25 7.35054 4.11831 7.11612 3.88388C6.8817 3.64946 6.75 3.33152 6.75 3C6.75 2.75277 6.82331 2.5111 6.96066 2.30554C7.09802 2.09998 7.29324 1.93976 7.52165 1.84515C7.75005 1.75054 8.00139 1.72579 8.24386 1.77402C8.48634 1.82225 8.70907 1.9413 8.88388 2.11612C9.0587 2.29093 9.17775 2.51366 9.22598 2.75614C9.27421 2.99861 9.24946 3.24995 9.15485 3.47836C9.06024 3.70676 8.90002 3.90199 8.69446 4.03934ZM7.30554 11.9607C7.5111 11.8233 7.75277 11.75 8 11.75C8.33152 11.75 8.64946 11.8817 8.88388 12.1161C9.1183 12.3505 9.25 12.6685 9.25 13C9.25 13.2472 9.17669 13.4889 9.03934 13.6945C8.90199 13.9 8.70676 14.0602 8.47836 14.1549C8.24995 14.2495 7.99861 14.2742 7.75614 14.226C7.51366 14.1778 7.29093 14.0587 7.11612 13.8839C6.9413 13.7091 6.82225 13.4863 6.77402 13.2439C6.72579 13.0014 6.75054 12.7501 6.84515 12.5216C6.93976 12.2932 7.09998 12.098 7.30554 11.9607Z"
                        fill="#444A5B"
                        stroke="#444A5B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1182_11855">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="breadcrumb-overview">
              <div
                className="breadcrumb2-overview"
                onClick={() => navigate("/thrift")}
              >
                <div className="breadcrumb-style-active-overview">
                  <div className="breadcrumb-master-overview">
                    <div className="container-breadcrumb-overview">
                      <div className="content-breadcrumb-overview">
                        <div className="label-breadcrumb-overview">
                          Thrift Plans{" "}
                        </div>
                      </div>
                      <div className="seperator-breadcrumb-overview">/ </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="breadcrumb2-overview">
                <div className="breadcrumb-style-inactive-overview">
                  <div className="breadcrumb-master-overview">
                    <div className="container-breadcrumb-overview">
                      <div className="content-breadcrumb-overview">
                        <div className="label2-breadcrumb-overview">
                          {data.name}{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Outlet />
          </div>

          <div className="content-summary-side">
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
                      Thrift Members
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
              {/* {data.member.map} */}

              <div className="summary-right-tab-wrapper">
                {request && <ThriftPlanRequest />}
                {member && <ThriftPlanMember members={data} />}

                {activity && <ThriftPlanActivities />}
              </div>
            </div>

            {/* {open && } */}
          </div>
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
