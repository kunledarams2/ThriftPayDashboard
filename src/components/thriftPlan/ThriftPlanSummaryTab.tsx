import React, { useState } from "react";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";

const ThriftPlanSummaryTab = () => {
  const { state } = useLocation();
  const { data } = state;
  let navigate: NavigateFunction = useNavigate();
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

  return (
    <>
      {" "}
      <div className="tabs-summary">
        <div onClick={handelViewPlanOverview} className="tab-summary">
          <div className="frame-1000002689">
            <div
              className={overview ? "tab-label-summary" : "tab-label2-summary"}
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
              className={details ? "tab-label-summary" : "tab-label2-summary"}
            >
              Plan Details{" "}
            </div>
          </div>
          <div
            className={details ? "rectangle-3-summary" : "rectangle-32-summary"}
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
                  <div className="label-breadcrumb-overview">Thrift Plans </div>
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
                  <div className="label2-breadcrumb-overview">{data.name} </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThriftPlanSummaryTab;
