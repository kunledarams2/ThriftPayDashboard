import React, { useEffect, useState } from "react";
import "../styles/thriftplancard.css";
import { Dropdown } from "react-bootstrap";
import PlanMenu from "../dropdown/PlanMenu";
import { IResult } from "../../../services/thriftPlans";
import { colors } from "react-select/dist/declarations/src/theme";
import { NavigateFunction, useNavigate } from "react-router-dom";
import moment from "moment";

interface Props {
  result: IResult;
}

const ThriftPlanCard = ({ result }: Props) => {
  let navigate: NavigateFunction = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const handleToggleMenu = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(
      (result.ongoing_contribution /
        (result.contribution_amount * result.total_slot)) *
        100
    );
    // var status = true if (progress > 100) else false

    setStatus(Boolean(progress == 100));
    //  active plan => is_active = true and is_open =false
  });

  const getProgressColors = () => {
    if (progress < 40) {
      return "#cc3366";
    } else if (progress < 70) {
      return "#ffa500";
    } else {
      return "#2ecc71";
    }
  };

  const [status, setStatus] = useState(false);

  return (
    <div>
      <div
        className="thriftplan-card"
        onClick={() => {
          if (!result.is_open && result.is_active) {
            navigate("/thrift/summary/overview", { state: { data: result } });
          }
        }}
      >
        <div className="thriftplan">
          <div className="frame-1000002717-card ">
            <div className="frame-1000002714-card ">
              <div className="basic-thrift-plan">{result.name} </div>

              {/* <Dropdown className="icons-card">
              <Dropdown.Toggle className="menu-toggle">
                <svg
                  className="icons-card"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1182_6238)">
                    <path
                      d="M14.7917 12C14.7917 12.4203 14.6671 12.8311 14.4336 13.1806C14.2001 13.53 13.8682 13.8024 13.48 13.9632C13.0917 14.1241 12.6644 14.1662 12.2522 14.0842C11.84 14.0022 11.4613 13.7998 11.1641 13.5026C10.867 13.2054 10.6646 12.8268 10.5826 12.4146C10.5006 12.0024 10.5427 11.5751 10.7035 11.1868C10.8643 10.7985 11.1367 10.4666 11.4862 10.2331C11.8356 9.99963 12.2465 9.875 12.6667 9.875C13.2303 9.875 13.7708 10.0989 14.1694 10.4974C14.5679 10.8959 14.7917 11.4364 14.7917 12ZM13.48 21.4632L13.6713 21.9252L13.48 21.4632C13.0917 21.6241 12.6644 21.6662 12.2522 21.5842C11.84 21.5022 11.4613 21.2998 11.1641 21.0026C10.867 20.7054 10.6646 20.3268 10.5826 19.9146C10.5006 19.5024 10.5427 19.0751 10.7035 18.6868C10.8643 18.2985 11.1367 17.9666 11.4862 17.7331C11.8356 17.4996 12.2465 17.375 12.6667 17.375C13.2303 17.375 13.7708 17.5989 14.1694 17.9974C14.5679 18.3959 14.7917 18.9364 14.7917 19.5C14.7917 19.9203 14.6671 20.3311 14.4336 20.6806C14.2001 21.03 13.8682 21.3024 13.48 21.4632ZM13.8473 6.26687C13.4979 6.50037 13.087 6.625 12.6667 6.625C12.1032 6.625 11.5627 6.40112 11.1641 6.0026C10.7656 5.60409 10.5417 5.06359 10.5417 4.5C10.5417 4.07972 10.6664 3.66887 10.8999 3.31941C11.1334 2.96996 11.4653 2.69759 11.8535 2.53676C12.2418 2.37592 12.6691 2.33384 13.0813 2.41583C13.4935 2.49783 13.8722 2.70021 14.1694 2.9974C14.4665 3.29459 14.6689 3.67322 14.7509 4.08543C14.8329 4.49764 14.7908 4.92491 14.63 5.3132C14.4692 5.7015 14.1968 6.03338 13.8473 6.26687Z"
                      fill="#90949E"
                      stroke="#90949E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1182_6238">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.666748)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
              <svg
                className="icons-card"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleToggleMenu}
              >
                <g clip-path="url(#clip0_1182_6238)">
                  <path
                    d="M14.7917 12C14.7917 12.4203 14.6671 12.8311 14.4336 13.1806C14.2001 13.53 13.8682 13.8024 13.48 13.9632C13.0917 14.1241 12.6644 14.1662 12.2522 14.0842C11.84 14.0022 11.4613 13.7998 11.1641 13.5026C10.867 13.2054 10.6646 12.8268 10.5826 12.4146C10.5006 12.0024 10.5427 11.5751 10.7035 11.1868C10.8643 10.7985 11.1367 10.4666 11.4862 10.2331C11.8356 9.99963 12.2465 9.875 12.6667 9.875C13.2303 9.875 13.7708 10.0989 14.1694 10.4974C14.5679 10.8959 14.7917 11.4364 14.7917 12ZM13.48 21.4632L13.6713 21.9252L13.48 21.4632C13.0917 21.6241 12.6644 21.6662 12.2522 21.5842C11.84 21.5022 11.4613 21.2998 11.1641 21.0026C10.867 20.7054 10.6646 20.3268 10.5826 19.9146C10.5006 19.5024 10.5427 19.0751 10.7035 18.6868C10.8643 18.2985 11.1367 17.9666 11.4862 17.7331C11.8356 17.4996 12.2465 17.375 12.6667 17.375C13.2303 17.375 13.7708 17.5989 14.1694 17.9974C14.5679 18.3959 14.7917 18.9364 14.7917 19.5C14.7917 19.9203 14.6671 20.3311 14.4336 20.6806C14.2001 21.03 13.8682 21.3024 13.48 21.4632ZM13.8473 6.26687C13.4979 6.50037 13.087 6.625 12.6667 6.625C12.1032 6.625 11.5627 6.40112 11.1641 6.0026C10.7656 5.60409 10.5417 5.06359 10.5417 4.5C10.5417 4.07972 10.6664 3.66887 10.8999 3.31941C11.1334 2.96996 11.4653 2.69759 11.8535 2.53676C12.2418 2.37592 12.6691 2.33384 13.0813 2.41583C13.4935 2.49783 13.8722 2.70021 14.1694 2.9974C14.4665 3.29459 14.6689 3.67322 14.7509 4.08543C14.8329 4.49764 14.7908 4.92491 14.63 5.3132C14.4692 5.7015 14.1968 6.03338 13.8473 6.26687Z"
                    fill="#90949E"
                    stroke="#90949E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1182_6238">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.666748)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="frame-1000002713-card ">
              <div className="created-card">Created: </div>
              <div className="july-14-2023-card">
                {moment(result.created_at).format("MMMM DD, yyyy")}
              </div>
            </div>
          </div>
          <div className="frame-625905-card ">
            <div className="info-2-card ">
              <div className="_10-000-card ">
                {(result.contribution_amount / 100).toLocaleString("en-NG", {
                  style: "currency",
                  currency: "NGN",
                })}
              </div>
              <div className="amount-per-member-card ">Amount Per Member </div>
            </div>
            <div className="info-3-card ">
              <div className="_10-card ">{result.total_slot}</div>
              <div className="no-of-slots-card ">No of Slots </div>
            </div>
          </div>
          <div className="frame-625906-card ">
            <div className="info-3-card">
              <div className="_100-000-card ">
                {(
                  (result.total_slot * result.contribution_amount) /
                  100
                ).toLocaleString("en-NG", {
                  style: "currency",
                  currency: "NGN",
                })}{" "}
              </div>
              <div className="target-remit-monthly-card">
                Target Remit/Monthly{" "}
              </div>
            </div>
            <div className="info-4-card">
              <div className="_5-10-card ">
                {result.locked_slot}/{result.total_slot}{" "}
              </div>
              <div className="filled-slots-card">Filled Slots </div>
            </div>
          </div>
          <div className="progress-card">
            <div className="progress-bar-card">
              <div
                className="rectangle-3972-card"
                style={{
                  width: `${progress}%`,
                  // background: getProgressColors(),
                }}
              ></div>
            </div>
            <div className="_50-card">{progress}% </div>
          </div>
        </div>
        <div className="bottom-card">
          <div className="frame-1000002715-card">
            <div className="start-date-card">Start Date: </div>
            <div className="july-14-20232-card">
              {" "}
              {moment(result.start_date).format("MMMM DD, yyyy")}
            </div>
          </div>
          <div
            className="bagde-card"
            style={{ background: status ? "#b5fedc" : "#b1e3ff" }}
          >
            <div
              className="completed-card"
              style={{ color: status ? "#016236" : "#111217" }}
            >
              {" "}
              {status && !result.is_open && !result.is_active
                ? "Completed"
                : !result.is_open && result.is_active
                ? "Active"
                : "Pending"}{" "}
            </div>
          </div>
        </div>
        {open && (
          <PlanMenu result={result} close={handleToggleMenu} open={open} />
        )}
      </div>
    </div>
  );
};

export default ThriftPlanCard;
