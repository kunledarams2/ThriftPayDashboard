import React, { useEffect, useState } from "react";
import { IResult } from "../../../services/thriftPlans";
import PlanMenu from "../dropdown/PlanMenu";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface Props {
  result: IResult;
}

const PlanListItem = ({ result }: Props) => {
  let navigate: NavigateFunction = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const handleToggleMenu = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const [status, setStatus] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(
      (result.contribution_amount /
        (result.contribution_amount * result.total_slot)) *
        100
    );
    setStatus(Boolean(progress == 100));
  });

  const getProgressColors = () => {
    if (progress < 40) {
      return "#2ecc71";
    } else if (progress < 70) {
      return "#ffa500";
    } else {
      return "#2ecc71";
    }
  };
  return (
    <div
      className="thriftplan-card-list"
      onClick={() =>
        navigate("/thrift/summary/overview", { state: { data: result } })
      }
    >
      <div className="basic-thrift-plan-list">{result.name}</div>
      <div className="july-14-2023">July 14, 2023 </div>
      <div className="frame-2688">
        <div
          className="bagde"
          style={{ background: status ? "#b5fedc" : "#b1e3ff" }}
        >
          <div
            className="renter"
            style={{ color: status ? "#016236" : "#111217" }}
          >
            {status ? "Completed" : "Active"}{" "}
          </div>
        </div>
      </div>
      <div className="july-14-2023">July 14, 2023 </div>
      <div className="n-50-000">
        {" "}
        {result.contribution_amount.toLocaleString("en-NG", {
          style: "currency",
          currency: "NGN",
        })}{" "}
      </div>
      <div className="_5">{result.total_slot} </div>
      <div className="_0-5">
        {result.locked_slot}/{result.total_slot}{" "}
      </div>
      <div className="frame-1000002754">
        <div className="progress-list-view">
          <div className="progress-bar-list-view">
            <div
              className="rectangle-3972"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="_50">{progress}% </div>
        </div>
        <svg
          className="icons"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleToggleMenu}
        >
          <g clip-path="url(#clip0_1182_9419)">
            <path
              d="M9.25 8C9.25 8.24723 9.17669 8.4889 9.03934 8.69446C8.90199 8.90003 8.70676 9.06024 8.47836 9.15485C8.24995 9.24946 7.99861 9.27421 7.75614 9.22598C7.51366 9.17775 7.29093 9.0587 7.11612 8.88389C6.9413 8.70907 6.82225 8.48634 6.77402 8.24386C6.72579 8.00139 6.75054 7.75005 6.84515 7.52165C6.93976 7.29324 7.09998 7.09802 7.30554 6.96066C7.5111 6.82331 7.75277 6.75 8 6.75C8.33152 6.75 8.64946 6.8817 8.88388 7.11612C9.1183 7.35054 9.25 7.66848 9.25 8ZM8.69446 4.03934C8.4889 4.17669 8.24723 4.25 8 4.25C7.66848 4.25 7.35054 4.11831 7.11612 3.88388C6.8817 3.64946 6.75 3.33152 6.75 3C6.75 2.75277 6.82331 2.5111 6.96066 2.30554C7.09802 2.09998 7.29324 1.93976 7.52165 1.84515C7.75005 1.75054 8.00139 1.72579 8.24386 1.77402C8.48634 1.82225 8.70907 1.9413 8.88388 2.11612C9.0587 2.29093 9.17775 2.51366 9.22598 2.75614C9.27421 2.99861 9.24946 3.24995 9.15485 3.47836C9.06024 3.70676 8.90002 3.90199 8.69446 4.03934ZM7.30554 11.9607C7.5111 11.8233 7.75277 11.75 8 11.75C8.33152 11.75 8.64946 11.8817 8.88388 12.1161C9.1183 12.3505 9.25 12.6685 9.25 13C9.25 13.2472 9.17669 13.4889 9.03934 13.6945C8.90199 13.9 8.70676 14.0602 8.47836 14.1549C8.24995 14.2495 7.99861 14.2742 7.75614 14.226C7.51366 14.1778 7.29093 14.0587 7.11612 13.8839C6.9413 13.7091 6.82225 13.4863 6.77402 13.2439C6.72579 13.0014 6.75054 12.7501 6.84515 12.5216C6.93976 12.2932 7.09998 12.098 7.30554 11.9607Z"
              fill="#666F89"
              stroke="#666F89"
            />
          </g>
          <defs>
            <clipPath id="clip0_1182_9419">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      {open && (
        <PlanMenu result={result} close={handleToggleMenu} open={open} />
      )}
    </div>
  );
};

export default PlanListItem;
