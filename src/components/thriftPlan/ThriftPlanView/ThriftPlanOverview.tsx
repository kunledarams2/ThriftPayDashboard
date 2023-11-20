import React, { useEffect } from "react";
import ThriftPlanCard from "./ThriftPlanCard";
import ThriftPlanListView from "../ThriftPlanListView";
import { useState } from "react";
import {
  Convert,
  IResult,
  ThriftPlanResponse,
  getPlan,
  getThriftPlans,
} from "../../../services/thriftPlans";
import PlanListItem from "./PlanListItem";

const ThriftPlanOverview = () => {
  const [toggle, setToggle] = useState(true);
  const [filter, setFilter] = useState(false);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [thriftPlanList, setthriftPlanList] = useState<
    ThriftPlanResponse | undefined
  >(undefined);

  const toggleView = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  const filterView = () => {
    if (filter) {
      setFilter(false);
    } else {
      setFilter(true);
    }
  };
  // useEffect(() => {
  //   getPlan().then((response) => {
  //     setthriftPlanList(response.data.results)
  //  });
  // });

  useEffect(() => {
    setLoading(true);
    getThriftPlans().then(
      (data) => {
        const stringJson = JSON.stringify(data, null, 4);
        const responseData = Convert.toThriftPlanResponse(stringJson);
        // console.log(responseData.results);

        setthriftPlanList(responseData);
        setLoading(false);
        // setContent(response.data);
      },
      (error) => {
        setLoading(false);
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        // setContent(_content);
      }
    );
  }, []);

  return (
    <>
      <div className="overview-wrapper">
        {loading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <div>
            <div className="frame-2670">
              <div className="frame-2660">
                <div className="search-field-thrift-overview">
                  <svg
                    className="icons-thrift-overview"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1182_10170)">
                      <path
                        d="M8.75 15C12.2018 15 15 12.2018 15 8.75C15 5.29822 12.2018 2.5 8.75 2.5C5.29822 2.5 2.5 5.29822 2.5 8.75C2.5 12.2018 5.29822 15 8.75 15Z"
                        stroke="#666F89"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.1694 13.1694L17.4999 17.4999"
                        stroke="#666F89"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1182_10170">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="search-thrift-overview">Search </div>
                </div>
                <div className="button-thrift-overview">
                  <svg
                    className="icons2-thrift-overview"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1182_9577)">
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
                      <clipPath id="clip0_1182_9577">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div onClick={filterView} className="button2-thrift-overview">
                    Filters{" "}
                  </div>
                </div>
              </div>
              <div className="frame-2745">
                <div className="sort-by-thrift-overview">Sort By: </div>
                <div className="button3-thrift-overview">
                  <div className="recently-added-thrift-overview">
                    Recently Added{" "}
                  </div>
                  <svg
                    className="icons-white-thrift-overview"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="#111217"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div onClick={toggleView} className="switcher-thrift-overview">
                <div
                  className={
                    toggle
                      ? "switcher-option-thrift-overview"
                      : "switcher-option2-thrift-overview"
                  }
                >
                  {toggle ? (
                    <svg
                      className="icons3-thrift-overview"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1182_9078)">
                        <path
                          d="M15.625 3.75H4.375C4.02982 3.75 3.75 4.02982 3.75 4.375V15.625C3.75 15.9702 4.02982 16.25 4.375 16.25H15.625C15.9702 16.25 16.25 15.9702 16.25 15.625V4.375C16.25 4.02982 15.9702 3.75 15.625 3.75Z"
                          stroke="#111217"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 3.75V16.25"
                          stroke="#111217"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.75 10H16.25"
                          stroke="#111217"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1182_9078">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      className="icons4-thrift-overview"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1182_9086)">
                        <path
                          d="M2.5 4.375H17.5V15C17.5 15.1658 17.4342 15.3247 17.3169 15.4419C17.1997 15.5592 17.0408 15.625 16.875 15.625H3.125C2.95924 15.625 2.80027 15.5592 2.68306 15.4419C2.56585 15.3247 2.5 15.1658 2.5 15V4.375Z"
                          stroke="#90949E"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.5 8.125H17.5"
                          stroke="#90949E"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.5 11.875H17.5"
                          stroke="#90949E"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.875 8.125V15.625"
                          stroke="#90949E"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1182_9086">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </div>
                <div
                  className={
                    toggle
                      ? "switcher-option2-thrift-overview"
                      : "switcher-option-thrift-overview"
                  }
                >
                  {toggle ? (
                    <svg
                      className="icons4-thrift-overview"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1182_9086)">
                        <path
                          d="M2.5 4.375H17.5V15C17.5 15.1658 17.4342 15.3247 17.3169 15.4419C17.1997 15.5592 17.0408 15.625 16.875 15.625H3.125C2.95924 15.625 2.80027 15.5592 2.68306 15.4419C2.56585 15.3247 2.5 15.1658 2.5 15V4.375Z"
                          stroke="#90949E"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.5 8.125H17.5"
                          stroke="#90949E"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2.5 11.875H17.5"
                          stroke="#90949E"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.875 8.125V15.625"
                          stroke="#90949E"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1182_9086">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      className="icons3-thrift-overview"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1182_9078)">
                        <path
                          d="M15.625 3.75H4.375C4.02982 3.75 3.75 4.02982 3.75 4.375V15.625C3.75 15.9702 4.02982 16.25 4.375 16.25H15.625C15.9702 16.25 16.25 15.9702 16.25 15.625V4.375C16.25 4.02982 15.9702 3.75 15.625 3.75Z"
                          stroke="#111217"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 3.75V16.25"
                          stroke="#111217"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.75 10H16.25"
                          stroke="#111217"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1182_9078">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </div>
              </div>
            </div>
            {filter ? (
              <div className="filters">
                <div className="input-text-filter">
                  <div className="label-filter">Plan Status </div>
                  <div className="field-filter">
                    <div className="input-filter">Select </div>
                    <svg
                      className="icons-filter"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1182_931)">
                        <path
                          d="M13.4623 5.80875C13.4244 5.71738 13.3604 5.63928 13.2782 5.58432C13.1959 5.52936 13.0993 5.50002 13.0004 5.5H3.00039C2.90145 5.49992 2.8047 5.5292 2.7224 5.58414C2.64011 5.63908 2.57596 5.71719 2.53808 5.8086C2.50021 5.90002 2.4903 6.00061 2.50963 6.09765C2.52895 6.1947 2.57664 6.28382 2.64664 6.35375L7.64664 11.3538C7.69308 11.4002 7.74823 11.4371 7.80892 11.4623C7.86962 11.4874 7.93469 11.5004 8.00039 11.5004C8.0661 11.5004 8.13117 11.4874 8.19186 11.4623C8.25256 11.4371 8.30771 11.4002 8.35414 11.3538L13.3541 6.35375C13.424 6.28379 13.4716 6.19466 13.4909 6.09765C13.5101 6.00064 13.5002 5.9001 13.4623 5.80875Z"
                          fill="#444A5B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1182_931">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="input-text-filter">
                  <div className="label-filter">Date Created </div>
                  <div className="field-filter">
                    <div className="input-filter">Select </div>
                    <svg
                      className="icons2-filter"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1182_9231)">
                        <path
                          d="M13.4623 5.80875C13.4244 5.71738 13.3604 5.63928 13.2782 5.58432C13.1959 5.52936 13.0993 5.50002 13.0004 5.5H3.00039C2.90145 5.49992 2.8047 5.5292 2.7224 5.58414C2.64011 5.63908 2.57596 5.71719 2.53808 5.8086C2.50021 5.90002 2.4903 6.00061 2.50963 6.09765C2.52895 6.1947 2.57664 6.28382 2.64664 6.35375L7.64664 11.3538C7.69308 11.4002 7.74823 11.4371 7.80892 11.4623C7.86962 11.4874 7.93469 11.5004 8.00039 11.5004C8.0661 11.5004 8.13117 11.4874 8.19186 11.4623C8.25256 11.4371 8.30771 11.4002 8.35414 11.3538L13.3541 6.35375C13.424 6.28379 13.4716 6.19466 13.4909 6.09765C13.5101 6.00064 13.5002 5.9001 13.4623 5.80875Z"
                          fill="#444A5B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1182_9231">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="input-text-filter">
                  <div className="label-filter">No of Slots </div>
                  <div className="field-filter">
                    <div className="input-filter">Select </div>
                    <svg
                      className="icons3-filter"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1182_9237)">
                        <path
                          d="M13.4623 5.80875C13.4244 5.71738 13.3604 5.63928 13.2782 5.58432C13.1959 5.52936 13.0993 5.50002 13.0004 5.5H3.00039C2.90145 5.49992 2.8047 5.5292 2.7224 5.58414C2.64011 5.63908 2.57596 5.71719 2.53808 5.8086C2.50021 5.90002 2.4903 6.00061 2.50963 6.09765C2.52895 6.1947 2.57664 6.28382 2.64664 6.35375L7.64664 11.3538C7.69308 11.4002 7.74823 11.4371 7.80892 11.4623C7.86962 11.4874 7.93469 11.5004 8.00039 11.5004C8.0661 11.5004 8.13117 11.4874 8.19186 11.4623C8.25256 11.4371 8.30771 11.4002 8.35414 11.3538L13.3541 6.35375C13.424 6.28379 13.4716 6.19466 13.4909 6.09765C13.5101 6.00064 13.5002 5.9001 13.4623 5.80875Z"
                          fill="#444A5B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1182_9237">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="input-text-filter">
                  <div className="label-filter">Start Date </div>
                  <div className="field-filter">
                    <div className="input2-filter">28-01-2023 </div>
                    <svg
                      className="icons4-filter"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1182_10767)">
                        <path
                          d="M13.3541 9.64615L8.35414 4.64615C8.30771 4.59967 8.25256 4.56279 8.19186 4.53763C8.13117 4.51246 8.0661 4.49951 8.00039 4.49951C7.93469 4.49951 7.86962 4.51246 7.80892 4.53763C7.74823 4.56279 7.69308 4.59967 7.64664 4.64615L2.64664 9.64615C2.57664 9.71608 2.52895 9.80521 2.50963 9.90225C2.4903 9.99929 2.50021 10.0999 2.53808 10.1913C2.57596 10.2827 2.64011 10.3608 2.7224 10.4158C2.8047 10.4707 2.90145 10.5 3.00039 10.4999H13.0004C13.0993 10.5 13.1961 10.4707 13.2784 10.4158C13.3607 10.3608 13.4248 10.2827 13.4627 10.1913C13.5006 10.0999 13.5105 9.99929 13.4912 9.90225C13.4718 9.80521 13.4242 9.71608 13.3541 9.64615Z"
                          fill="#444A5B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1182_10767">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="input-text2-filter">
                  <div className="label-filter">Participant Count </div>
                  <div className="field-filter">
                    <div className="input-filter">Select </div>
                    <svg
                      className="icons5-filter"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1182_4274)">
                        <path
                          d="M13.4623 5.80875C13.4244 5.71738 13.3604 5.63928 13.2782 5.58432C13.1959 5.52936 13.0993 5.50002 13.0004 5.5H3.00039C2.90145 5.49992 2.8047 5.5292 2.7224 5.58414C2.64011 5.63908 2.57596 5.71719 2.53808 5.8086C2.50021 5.90002 2.4903 6.00061 2.50963 6.09765C2.52895 6.1947 2.57664 6.28382 2.64664 6.35375L7.64664 11.3538C7.69308 11.4002 7.74823 11.4371 7.80892 11.4623C7.86962 11.4874 7.93469 11.5004 8.00039 11.5004C8.0661 11.5004 8.13117 11.4874 8.19186 11.4623C8.25256 11.4371 8.30771 11.4002 8.35414 11.3538L13.3541 6.35375C13.424 6.28379 13.4716 6.19466 13.4909 6.09765C13.5101 6.00064 13.5002 5.9001 13.4623 5.80875Z"
                          fill="#444A5B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1182_4274">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            ) : null}

            {toggle ? (
              <div className="wrapper-grid-card">
                {thriftPlanList?.results.map((results) => (
                  <ThriftPlanCard result={results} />
                ))}
              </div>
            ) : (
              <div>
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
                      <div className="progress-thrift-overview-list">
                        Progress
                      </div>
                      <div className="frame-1000002711"></div>
                    </div>
                  </div>
                </div>
                {thriftPlanList?.results.map((results) => (
                  <PlanListItem result={results} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ThriftPlanOverview;
