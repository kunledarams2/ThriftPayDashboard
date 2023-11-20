import React from "react";

import "../styles/thriftplancard.css";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { IResult } from "../../../services/thriftPlans";

interface Props {
  close: any;
  open: boolean;
  result: IResult;
}

const PlanMenu = ({ close, open, result }: Props) => {
  let navigate: NavigateFunction = useNavigate();

  const handelViewDetail = () => {
    close = false;

    navigate("/thrift/summary/overview", { state: { data: result } });
  };

  return (
    <div
      className="overlay-modal-manu"
      style={{
        transform: open ? "translateY(0vh)" : "translateY(-100vh)",
        width: "1681px",
      }}
    >
      <div className="drop-down">
        <div className="frame-2655">
          <div className="drop-down2">
            <div onClick={handelViewDetail} className="drop-down-item">
              <svg
                className="icons"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1182_9149)">
                  <path
                    d="M10 4.375C3.75 4.375 1.25 10 1.25 10C1.25 10 3.75 15.625 10 15.625C16.25 15.625 18.75 10 18.75 10C18.75 10 16.25 4.375 10 4.375Z"
                    stroke="#90949E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z"
                    stroke="#90949E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1182_9149">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="drop-down-item-1">View Details </div>
            </div>
            <div className="drop-down-item">
              <svg
                className="icons2"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1182_9156)">
                  <path
                    d="M16.875 16.875H7.49995L3.16479 12.5398"
                    stroke="#90949E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.8125 7.1875L5.3125 14.6875"
                    stroke="#90949E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.5 16.8751H3.75C3.58424 16.8751 3.42527 16.8093 3.30806 16.692C3.19085 16.5748 3.125 16.4159 3.125 16.2501V12.7587C3.12508 12.5932 3.19082 12.4344 3.30781 12.3173L12.9422 2.68291C13.0594 2.56579 13.2183 2.5 13.384 2.5C13.5497 2.5 13.7086 2.56579 13.8258 2.68291L17.3172 6.17198C17.4343 6.28917 17.5001 6.44808 17.5001 6.61377C17.5001 6.77946 17.4343 6.93837 17.3172 7.05557L7.5 16.8751Z"
                    stroke="#90949E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.625 5L15 9.375"
                    stroke="#90949E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1182_9156">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="drop-down-item-2">Edit Plan </div>
            </div>
            <div className="drop-down-item">
              <svg
                className="icons3"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1182_9165)">
                  <path
                    d="M16.875 4.375H3.125"
                    stroke="#F50202"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.125 8.125V13.125"
                    stroke="#F50202"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.875 8.125V13.125"
                    stroke="#F50202"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.625 4.375V16.25C15.625 16.4158 15.5592 16.5747 15.4419 16.6919C15.3247 16.8092 15.1658 16.875 15 16.875H5C4.83424 16.875 4.67527 16.8092 4.55806 16.6919C4.44085 16.5747 4.375 16.4158 4.375 16.25V4.375"
                    stroke="#F50202"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.125 4.375V3.125C13.125 2.79348 12.9933 2.47554 12.7589 2.24112C12.5245 2.0067 12.2065 1.875 11.875 1.875H8.125C7.79348 1.875 7.47554 2.0067 7.24112 2.24112C7.0067 2.47554 6.875 2.79348 6.875 3.125V4.375"
                    stroke="#F50202"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1182_9165">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="drop-down-item-3">Delete Plan </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanMenu;
