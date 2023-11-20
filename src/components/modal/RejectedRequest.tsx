import React, { useState } from "react";
import "./rejected_requect.css";
import { useStateContext } from "../thriftPlan/state_provider/OverviewStateContext";
import { RadioButton } from "../utils/RadioButton";
import { RequestStatus } from "../utils/constants/constants";
import {
  JoinPlanRequest,
  updateJoinPlanRequest,
} from "../../services/thriftPlans";

interface Props {
  close: any;
}
const RejectedRequest = ({ close }: Props) => {
  const rejectOptions = [
    {
      value: " Incomplete Bank Statement",
      label: " Incomplete Bank Statement ",
    },
    { value: " Other", label: " Other " },
  ];

  const { parentState, setParentState } = useStateContext();

  // const handleChange = (event) => {
  //   const { reason } = event.target;
  //   console.log(reason)
  // }
  const [radioSelected, setRadioSelected] = useState("");

  const [otherSelected, setOtherSelected] = useState(false);
  const [noteContent, setNoteContent] = useState("");

  const handleSubmit = () => {
    console.log(radioSelected);
  };

  const handleRequest = (status: string, isApprove: boolean) => {
    const requestBody: JoinPlanRequest = {
      request_status: status,
      approval: isApprove,
      thrift_plan_id: String(parentState.request?.thrift_id),
      preferred_slot: String(parentState.request?.slot),
      rejected_reason: radioSelected + ":" + noteContent,
    };

    console.log(requestBody);

    updateJoinPlanRequest(requestBody, parentState.request?.join_id!).then(
      (response) => {
        console.log(response);

        close;
        setParentState({
          openReview: false,
          loading: false,
          response: parentState.response,
          request: parentState.request,
          closeReview: false,
        });
      }
    );
  };

  return (
    <div className="request-decline-confirmation-modal">
      <div className="review-request">
        <div className="frame-1000002726">
          <div
            className="button-decline"
            onClick={() => {
              close;
              setParentState({
                openReview: false,
                loading: false,
                response: parentState.response,
                request: parentState.request,
                closeReview: false,
              });
            }}
          >
            <svg
              className="icons-decline"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1565_8782)">
                <path
                  d="M10.9375 3.0625L3.0625 10.9375"
                  stroke="#444A5B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.9375 10.9375L3.0625 3.0625"
                  stroke="#444A5B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1565_8782">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="frame-2717">
          <div className="are-you-sure-you-want-to-decline-john-doe-s-request-to-join-thrift-plan">
            Are you sure you want to Decline {parentState.request?.full_name}
            {"'s "}
            request to join Thrift Plan?{" "}
          </div>
          <div className="divider"></div>
          <div className="frame-1000002787">
            <div className="reason-for-declining-request">
              Reason for Declining Request{" "}
            </div>
            {rejectOptions.map((x, i) => (
              <RadioButton
                selected={radioSelected}
                onChange={function (value: string): void {
                  setRadioSelected(value);
                  console.log(radioSelected);
                  if (radioSelected == "Other") {
                    setOtherSelected(true);
                  }
                }}
                text={x.label}
                value={x.value}
              />
            ))}

            <textarea
              className="text-box"
              placeholder="Add note"
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
            />

            {/* <div className="text-box">
              <div className="add-note">Add note </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="frame-1000002724">
        <div
          className="button2"
          onClick={() => {
            close;
            setParentState({
              openReview: false,
              loading: false,
              response: parentState.response,
              request: parentState.request,
              closeReview: false,
            });
          }}
        >
          <div className="button3">Cancel </div>
        </div>
        <div
          className="button4"
          onClick={() => handleRequest(RequestStatus.Decline, false)}
        >
          <div className="button5">Decline </div>
        </div>
      </div>
    </div>
  );
};

export default RejectedRequest;
