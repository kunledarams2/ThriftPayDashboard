import React, { useEffect } from "react";
import { useState } from "react";
import {
  getThriftPlans,
  Convert,
  getThriftPlanOverview,
  IResult,
  thriftPlanOverviewResponseConvert,
  ThriftPlanOverviewResponse,
  Data,
} from "../../services/thriftPlans";
import { useLocation } from "react-router-dom";
import moment from "moment";
import EmptyContainer from "../utils/EmptyContainer";
import { useStateContext } from "./state_provider/OverviewStateContext";
import NoContentSVG from "../../assets/no_content_backup.svg";
import ThriftPlanSummarySide from "./ThriftPlanSummarySide";
import ThriftPlanSummaryTab from "./ThriftPlanSummaryTab";
// import "./styles/thrift_plan_style.css";

interface Props {
  thriftPlan: IResult;
  // dataResult : Data
}

const ThriftPlanSummary = () => {
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);
  const { state } = useLocation();
  const { data } = state;
  // console.log(data.id);
  const [filter, setFilterTransaction] = useState(false);

  const clickFilterHandle = () => {
    if (filter) {
      setFilterTransaction(false);
    } else setFilterTransaction(true);
  };

  const [seeAll, setSeeAllTransaction] = useState(false);

  const clickSeeAllHandle = () => {
    if (seeAll) {
      setSeeAllTransaction(false);
    } else setSeeAllTransaction(true);
  };

  const { parentState, setParentState } = useStateContext();
  // console.log(parentState.response);
  // setLoading(false);
  // setLoading(parentState.loading);
  console.log(parentState.openReview);

  // useEffect(() => {
  //   setLoading(true);
  //   if (parentState.response?.success) {
  //     setthriftPlanOverview(parentState.response?.data);
  //     if (parentState.response?.data.contributions.length == 0) setEmpty(false);
  //   } else {
  //     setEmpty(true);
  //   }
  //   // setLoading(false);
  //   // getThriftPlanOverview(data.id).then(
  //   //   (data) => {
  //   //     const stringJson = JSON.stringify(data, null, 4);
  //   //     const responseData =
  //   //       thriftPlanOverviewResponseConvert.tothriftPlanOverviewResponse(
  //   //         stringJson
  //   //       );
  //   //     // console.log(responseData.results);
  //   //     // setthriftPlanList(responseData);
  //   //     // setContent(response.data);
  //   //   },
  //   //   (error) => {
  //   //     setLoading(false);
  //   //     const _content =
  //   //       (error.response &&
  //   //         error.response.data &&
  //   //         error.response.data.message) ||
  //   //       error.message ||
  //   //       error.toString();
  //   //     // setContent(_content);
  //   //   }
  //   // );
  // }, []);

  const [thriftPlanOverview, setthriftPlanOverview] = useState<
    Data | undefined
  >(undefined);

  return (
    <>
      {parentState.loading ? (
        <div className="loader-container">
          <div
            className="spinner"
            style={{ margin: "20px 600px 300px 0px" }}
          ></div>
        </div>
      ) : (
        <div className="summary-content-empty">
          <div>
            <>
              <ThriftPlanSummaryTab />
              {seeAll ? null : (
                <div className="frame-1000002705">
                  <div className="plan-summary">Plan Summary </div>
                  <div className="overview-summary-card ">
                    <div className="total-thrift-plans-summary-card ">
                      <div className="frame-1000002748-summary-card">
                        <div className="frame-1000002690-summary-card">
                          <div className="icon-summary-card">
                            <svg
                              className="icons-summary-card"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_1176_13129)">
                                <path
                                  d="M12.8537 9.35375L8.35366 13.8538C8.30722 13.9002 8.25207 13.9371 8.19138 13.9623C8.13068 13.9874 8.06561 14.0004 7.99991 14.0004C7.9342 14.0004 7.86913 13.9874 7.80844 13.9623C7.74774 13.9371 7.69259 13.9002 7.64616 13.8538L3.14616 9.35375C3.07615 9.28382 3.02847 9.1947 3.00914 9.09765C2.98982 9.00061 2.99972 8.90002 3.03759 8.80861C3.07547 8.71719 3.13962 8.63908 3.22191 8.58414C3.30421 8.5292 3.40096 8.49992 3.49991 8.5H7.49991V2.5C7.49991 2.36739 7.55258 2.24021 7.64635 2.14645C7.74012 2.05268 7.8673 2 7.99991 2C8.13251 2 8.25969 2.05268 8.35346 2.14645C8.44723 2.24021 8.49991 2.36739 8.49991 2.5V8.5H12.4999C12.5989 8.49992 12.6956 8.5292 12.7779 8.58414C12.8602 8.63908 12.9243 8.71719 12.9622 8.80861C13.0001 8.90002 13.01 9.00061 12.9907 9.09765C12.9713 9.1947 12.9237 9.28382 12.8537 9.35375Z"
                                  fill="#444A5B"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1176_13129">
                                  <rect width="16" height="16" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="frame-1000002691">
                          <div className="frame-1000002697">
                            <div className="total-contribution-summary-card ">
                              Total Contribution{" "}
                            </div>
                            <div className="_260-000-summary-card ">
                              {parentState.response?.data.total_contribution.toLocaleString(
                                "en-NG",
                                {
                                  style: "currency",
                                  currency: "NGN",
                                }
                              )}{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="active-thrift-plans-summary-card ">
                      <div className="frame-1000002748-summary-card">
                        <div className="frame-1000002690-summary-card">
                          <div className="icon2-summary-card">
                            <svg
                              className="icons2-summary-card "
                              width="17"
                              height="16"
                              viewBox="0 0 17 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_1176_13143)">
                                <path
                                  d="M13.4618 7.19115C13.424 7.28253 13.3599 7.36063 13.2777 7.41558C13.1955 7.47054 13.0988 7.49988 12.9999 7.49991H8.99991V13.4999C8.99991 13.6325 8.94723 13.7597 8.85346 13.8535C8.75969 13.9472 8.63251 13.9999 8.49991 13.9999C8.3673 13.9999 8.24012 13.9472 8.14635 13.8535C8.05258 13.7597 7.99991 13.6325 7.99991 13.4999V7.49991H3.99991C3.90096 7.49998 3.80421 7.4707 3.72191 7.41577C3.63962 7.36083 3.57547 7.28271 3.53759 7.1913C3.49972 7.09989 3.48982 6.99929 3.50914 6.90225C3.52847 6.80521 3.57615 6.71608 3.64616 6.64615L8.14616 2.14615C8.19259 2.09967 8.24774 2.06279 8.30844 2.03763C8.36913 2.01246 8.4342 1.99951 8.49991 1.99951C8.56561 1.99951 8.63068 2.01246 8.69138 2.03763C8.75207 2.06279 8.80722 2.09967 8.85366 2.14615L13.3537 6.64615C13.4236 6.71612 13.4711 6.80524 13.4904 6.90225C13.5096 6.99926 13.4997 7.0998 13.4618 7.19115Z"
                                  fill="#444A5B"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1176_13143">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="translate(0.5)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="frame-1000002691">
                          <div className="frame-1000002698">
                            <div className="total-payout-summary-card ">
                              Total Payout{" "}
                            </div>
                            <div className="_200-000-summary-card ">
                              {" "}
                              {parentState.response?.data?.total_payout.toLocaleString(
                                "en-NG",
                                {
                                  style: "currency",
                                  currency: "NGN",
                                }
                              )}{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="total-thrift-plans-summary-card">
                      <div className="frame-1000002748-summary-card">
                        <div className="frame-1000002690-summary-card">
                          <div className="icon3-summary-card ">
                            <svg
                              className="icons3-summary-card "
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_1176_13157)">
                                <path
                                  d="M14.2069 5.01438L10.9856 1.79313C10.7975 1.60616 10.5433 1.50084 10.2781 1.5H5.72188C5.45667 1.50084 5.20247 1.60616 5.01438 1.79313L1.79313 5.01438C1.60616 5.20247 1.50084 5.45667 1.5 5.72188V10.2781C1.50084 10.5433 1.60616 10.7975 1.79313 10.9856L5.01438 14.2069C5.20247 14.3938 5.45667 14.4992 5.72188 14.5H10.2781C10.5433 14.4992 10.7975 14.3938 10.9856 14.2069L14.2069 10.9856C14.3938 10.7975 14.4992 10.5433 14.5 10.2781V5.72188C14.4992 5.45667 14.3938 5.20247 14.2069 5.01438ZM7.5 5C7.5 4.86739 7.55268 4.74021 7.64645 4.64645C7.74021 4.55268 7.86739 4.5 8 4.5C8.13261 4.5 8.25979 4.55268 8.35355 4.64645C8.44732 4.74021 8.5 4.86739 8.5 5V8.5C8.5 8.63261 8.44732 8.75979 8.35355 8.85355C8.25979 8.94732 8.13261 9 8 9C7.86739 9 7.74021 8.94732 7.64645 8.85355C7.55268 8.75979 7.5 8.63261 7.5 8.5V5ZM8 11.5C7.85166 11.5 7.70666 11.456 7.58332 11.3736C7.45999 11.2912 7.36386 11.1741 7.30709 11.037C7.25032 10.9 7.23547 10.7492 7.26441 10.6037C7.29335 10.4582 7.36478 10.3246 7.46967 10.2197C7.57456 10.1148 7.7082 10.0434 7.85368 10.0144C7.99917 9.98547 8.14997 10.0003 8.28701 10.0571C8.42406 10.1139 8.54119 10.21 8.6236 10.3333C8.70601 10.4567 8.75 10.6017 8.75 10.75C8.75 10.9489 8.67098 11.1397 8.53033 11.2803C8.38968 11.421 8.19891 11.5 8 11.5Z"
                                  fill="#444A5B"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1176_13157">
                                  <rect width="16" height="16" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="frame-1000002697">
                          <div className="total-penalties-summary-card ">
                            Total Penalties{" "}
                          </div>
                          <div className="_0">₦0 </div>
                        </div>
                      </div>
                    </div>
                    <div className="total-thrift-plans-summary-card ">
                      <div className="frame-1000002748-summary-card">
                        <div className="frame-1000002690-summary-card">
                          <div className="icon4-summary-card ">
                            <svg
                              className="icons4-summary-card "
                              width="17"
                              height="16"
                              viewBox="0 0 17 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_1176_13165)">
                                <path
                                  d="M13.5 2H12V1.5C12 1.36739 11.9473 1.24021 11.8536 1.14645C11.7598 1.05268 11.6326 1 11.5 1C11.3674 1 11.2402 1.05268 11.1464 1.14645C11.0527 1.24021 11 1.36739 11 1.5V2H6V1.5C6 1.36739 5.94732 1.24021 5.85355 1.14645C5.75979 1.05268 5.63261 1 5.5 1C5.36739 1 5.24021 1.05268 5.14645 1.14645C5.05268 1.24021 5 1.36739 5 1.5V2H3.5C3.23478 2 2.98043 2.10536 2.79289 2.29289C2.60536 2.48043 2.5 2.73478 2.5 3V13C2.5 13.2652 2.60536 13.5196 2.79289 13.7071C2.98043 13.8946 3.23478 14 3.5 14H13.5C13.7652 14 14.0196 13.8946 14.2071 13.7071C14.3946 13.5196 14.5 13.2652 14.5 13V3C14.5 2.73478 14.3946 2.48043 14.2071 2.29289C14.0196 2.10536 13.7652 2 13.5 2ZM13.5 5H3.5V3H5V3.5C5 3.63261 5.05268 3.75979 5.14645 3.85355C5.24021 3.94732 5.36739 4 5.5 4C5.63261 4 5.75979 3.94732 5.85355 3.85355C5.94732 3.75979 6 3.63261 6 3.5V3H11V3.5C11 3.63261 11.0527 3.75979 11.1464 3.85355C11.2402 3.94732 11.3674 4 11.5 4C11.6326 4 11.7598 3.94732 11.8536 3.85355C11.9473 3.75979 12 3.63261 12 3.5V3H13.5V5Z"
                                  fill="#444A5B"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_1176_13165">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="translate(0.5)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="frame-1000002691">
                          <div className="frame-1000002697">
                            <div className="months-completed-summary-card">
                              Months Completed{" "}
                            </div>
                            <div className="_3-of-5-summary-card ">
                              {parentState.response?.data?.complete_month} of{" "}
                              {data.total_slot}{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="frame-1000002745-see-all">
                <div className="recent-transactions-see-all">
                  Recent Transactions{" "}
                </div>
                <div onClick={clickSeeAllHandle} className="button-see-all">
                  <div className="button2-see-all">See All </div>
                </div>
              </div>
              {seeAll ? (
                <div className="frame-1000002747-transaction-filter">
                  <div className="pills-transaction-filter">
                    <div className="frame-2616">
                      <div className="pill-transaction-filter">
                        <div className="button-label-transaction-filter">
                          All{" "}
                        </div>
                      </div>
                      <div className="pill2-transaction-filter">
                        <div className="button-label2-transaction-filter">
                          February{" "}
                        </div>
                      </div>
                      <div className="pill2-transaction-filter">
                        <div className="button-label2-transaction-filter">
                          March{" "}
                        </div>
                      </div>
                      <div className="pill2-transaction-filter">
                        <div className="button-label2-transaction-filter">
                          April{" "}
                        </div>
                      </div>
                    </div>
                    <div className="rectangle-227"></div>
                    <div className="icons-chevron-left-transaction-filter">
                      <svg
                        className="icons-chevron-left2-transaction-filter"
                        width="24"
                        height="24"
                      ></svg>
                    </div>
                  </div>
                  <div className="frame-1000002779">
                    <div className="button-transaction-filter">
                      <svg
                        className="icons-transaction-filter"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1266_12904)">
                          <path
                            d="M4 8H12"
                            stroke="#444A5B"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.5 5H14.5"
                            stroke="#444A5B"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.5 11H9.5"
                            stroke="#444A5B"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1266_12904">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <div
                        onClick={clickFilterHandle}
                        className="button2-transaction-filter"
                      >
                        Filters{" "}
                      </div>
                    </div>
                    <div className="button-transaction-filter">
                      <svg
                        className="icons2-transaction-filter"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1266_12897)">
                          <path
                            d="M11 6.5H12.5C12.6326 6.5 12.7598 6.55268 12.8536 6.64645C12.9473 6.74021 13 6.86739 13 7V13C13 13.1326 12.9473 13.2598 12.8536 13.3536C12.7598 13.4473 12.6326 13.5 12.5 13.5H3.5C3.36739 13.5 3.24021 13.4473 3.14645 13.3536C3.05268 13.2598 3 13.1326 3 13V7C3 6.86739 3.05268 6.74021 3.14645 6.64645C3.24021 6.55268 3.36739 6.5 3.5 6.5H5"
                            stroke="#444A5B"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.5 4L8 1.5L10.5 4"
                            stroke="#444A5B"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8 1.5V8.5"
                            stroke="#444A5B"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1266_12897">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <div className="button2-transaction-filter">Export </div>
                    </div>
                  </div>
                </div>
              ) : null}
              {filter ? (
                <div className="filters-transaction">
                  <div className="input-text-transaction">
                    <div className="label-transaction">Date Range </div>
                    <div className="field-transaction">
                      <div className="input-transaction">Select </div>
                      <svg
                        className="icons-transaction"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1182_7205)">
                          <path
                            d="M13.4623 5.80875C13.4244 5.71738 13.3604 5.63928 13.2782 5.58432C13.1959 5.52936 13.0993 5.50002 13.0004 5.5H3.00039C2.90145 5.49992 2.8047 5.5292 2.7224 5.58414C2.64011 5.63908 2.57596 5.71719 2.53808 5.8086C2.50021 5.90002 2.4903 6.00061 2.50963 6.09765C2.52895 6.1947 2.57664 6.28382 2.64664 6.35375L7.64664 11.3538C7.69308 11.4002 7.74823 11.4371 7.80892 11.4623C7.86962 11.4874 7.93469 11.5004 8.00039 11.5004C8.0661 11.5004 8.13117 11.4874 8.19186 11.4623C8.25256 11.4371 8.30771 11.4002 8.35414 11.3538L13.3541 6.35375C13.424 6.28379 13.4716 6.19466 13.4909 6.09765C13.5101 6.00064 13.5002 5.9001 13.4623 5.80875Z"
                            fill="#444A5B"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1182_7205">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="input-text-transaction ">
                    <div className="label-transaction">Transaction Type </div>
                    <div className="field2-transaction">
                      <div className="input2-transaction">Contribution </div>
                      <svg
                        className="icons2-transaction"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1182_7221)">
                          <path
                            d="M13.3541 9.64615L8.35414 4.64615C8.30771 4.59967 8.25256 4.56279 8.19186 4.53763C8.13117 4.51246 8.0661 4.49951 8.00039 4.49951C7.93469 4.49951 7.86962 4.51246 7.80892 4.53763C7.74823 4.56279 7.69308 4.59967 7.64664 4.64615L2.64664 9.64615C2.57664 9.71608 2.52895 9.80521 2.50963 9.90225C2.4903 9.99929 2.50021 10.0999 2.53808 10.1913C2.57596 10.2827 2.64011 10.3608 2.7224 10.4158C2.8047 10.4707 2.90145 10.5 3.00039 10.4999H13.0004C13.0993 10.5 13.1961 10.4707 13.2784 10.4158C13.3607 10.3608 13.4248 10.2827 13.4627 10.1913C13.5006 10.0999 13.5105 9.99929 13.4912 9.90225C13.4718 9.80521 13.4242 9.71608 13.3541 9.64615Z"
                            fill="#444A5B"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1182_7221">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="input-text-transaction ">
                    <div className="label-transaction ">Payment Method </div>
                    <div className="field2-transaction ">
                      <div className="input2-transaction ">Wallet </div>
                      <svg
                        className="icons3-transaction"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1182_9190)">
                          <path
                            d="M13.3541 9.64615L8.35414 4.64615C8.30771 4.59967 8.25256 4.56279 8.19186 4.53763C8.13117 4.51246 8.0661 4.49951 8.00039 4.49951C7.93469 4.49951 7.86962 4.51246 7.80892 4.53763C7.74823 4.56279 7.69308 4.59967 7.64664 4.64615L2.64664 9.64615C2.57664 9.71608 2.52895 9.80521 2.50963 9.90225C2.4903 9.99929 2.50021 10.0999 2.53808 10.1913C2.57596 10.2827 2.64011 10.3608 2.7224 10.4158C2.8047 10.4707 2.90145 10.5 3.00039 10.4999H13.0004C13.0993 10.5 13.1961 10.4707 13.2784 10.4158C13.3607 10.3608 13.4248 10.2827 13.4627 10.1913C13.5006 10.0999 13.5105 9.99929 13.4912 9.90225C13.4718 9.80521 13.4242 9.71608 13.3541 9.64615Z"
                            fill="#444A5B"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1182_9190">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              ) : null}
              <div className="heading_wrapper-recent-transaction">
                {" "}
                <div className="heading-transaction">
                  <div className="member-heading">Member </div>
                  <div className="transaction-type-heading">
                    Transaction type{" "}
                  </div>
                  <div className="date-heading">Date </div>
                  <div className="payment-method-heading">Payment Method </div>
                  <div className="amount-heading">Amount </div>
                </div>
              </div>

              {parentState.response?.data?.contributions.length == 0 && (
                <EmptyContainer
                  title={"No Data Yet"}
                  body={
                    "More details about the thrift will be displayed here once the plan starts."
                  }
                  imagePath={NoContentSVG}
                />
              )}
              {parentState.response?.data?.contributions.map((contribution) => (
                <div className="heading_wrapper-recent-transaction">
                  <div className="thriftplan-card-recent-transaction ">
                    <div className="frank-lampard-recent-transaction ">
                      {contribution.user.first_name}{" "}
                      {contribution.user.last_name}
                    </div>
                    <div className="february-contribution-recent-transaction ">
                      February Contribution{" "}
                    </div>
                    <div className="mar-3-2023-recent-transaction ">
                      {moment(contribution.created_at).format("MMM, Do YYYY")}{" "}
                    </div>
                    <div className="wallet-recent-transaction ">Wallet </div>
                    <div className="n-10-000-recent-transaction ">
                      +
                      {contribution.thrift.contribution_amount.toLocaleString(
                        "en-NG",
                        {
                          style: "currency",
                          currency: "NGN",
                        }
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </>
          </div>
          <ThriftPlanSummarySide />
        </div>
      )}
    </>
  );
};

export default ThriftPlanSummary;
