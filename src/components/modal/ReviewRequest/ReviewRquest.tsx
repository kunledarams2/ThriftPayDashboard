import React, { useState } from "react";
import "./review_request_style.css";
import { useStateContext } from "../../thriftPlan/state_provider/OverviewStateContext";
import defaultAvatar from "../../../assets/Avatars.png";
import {
  JoinPlanRequest,
  RequestMembers,
  updateJoinPlanRequest,
} from "../../../services/thriftPlans";
import { any } from "zod";
import { getCurrency } from "../../utils/util";
import SuccessfulModal from "../SuccessfulModal";
import RejectedRequest from "../RejectedRequest";
import { RequestStatus } from "../../utils/constants/constants";

interface Props {
  request: RequestMembers;
}

const ReviewRquest = () => {
  const { parentState, setParentState } = useStateContext();
  console.log(parentState.request?.full_name);

  const [approval, setApproval] = useState(false);
  const [failed, setFailed] = useState(false);
  const [view, setView] = useState(true);
  if (parentState.closeReview) {
    // setView(true);
    // setFailed(false);
    // setApproval(false);
  }

  const handleClose = () => {
    console.log("close...........");

    setView(true);
    setFailed(false);
    setApproval(false);
  };

  const handleRequest = (status: string, isApprove: boolean) => {
    const requestBody: JoinPlanRequest = {
      request_status: status,
      approval: isApprove,
      thrift_plan_id: String(parentState.request?.thrift_id),
      preferred_slot: String(parentState.request?.slot),
      rejected_reason: "",
    };

    updateJoinPlanRequest(requestBody, parentState.request?.join_id!).then(
      (response) => {
        console.log(response);
        if (isApprove) {
          setApproval(true);
          setFailed(false);
          // setView(false);

          setParentState({
            openReview: true,
            loading: false,
            response: parentState.response,
            request: parentState.request,
            closeReview: false,
          });
        } else {
          setFailed(true);
          // setView(false);
          setApproval(false);

          setParentState({
            openReview: true,
            loading: false,
            response: parentState.response,
            request: parentState.request,
            closeReview: false,
          });
        }
      }
    );
  };

  return (
    <div
      className="overlay-modal-create-plan"
      style={{
        transform: parentState.openReview
          ? "translateY(0vh)"
          : "translateY(-100vh)",
        opacity: parentState.openReview ? 1 : 0,
      }}
    >
      <>
        {approval && !parentState.closeReview && (
          <SuccessfulModal
            titleText={"Request Approved"}
            bodyText={
              "John Doe’s Request to Join Thrift Plan have been reviewed and approved"
            }
          />
        )}
        {!parentState.closeReview && failed && (
          <RejectedRequest close={handleClose} />
        )}
      </>
      {parentState.closeReview && (
        <div className="review-request-open">
          <div className="review-request2-open">
            <div className="frame-1000002726">
              <div className="review-request3-open">Review Request </div>
              <div
                className="button-open"
                onClick={() => {
                  setParentState({
                    openReview: false,
                    loading: false,
                    response: parentState.response,
                    request: parentState.request,
                    closeReview: true,
                  });
                }}
              >
                <svg
                  className="icons-open"
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1537_5159)">
                    <path
                      d="M10.9375 3.5625L3.0625 11.4375"
                      stroke="#444A5B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.9375 11.4375L3.0625 3.5625"
                      stroke="#444A5B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1537_5159">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="frame-1000002725">
              <div className="frame-1000002785">
                <div className="frame-1000002781">
                  <img
                    className="avatars-open"
                    src={defaultAvatar}
                    alt="SVG logo image"
                  />
                </div>
                <div className="frame-2716">
                  <div className="frame-2717">
                    <div className="john-doe-open">
                      {parentState.request?.full_name}{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-1000002784">
                <div className="request-details-open">Request Details </div>
                <div className="frame-1000002782">
                  <div className="frame-1000002780">
                    <div className="chosen-slot-open">Chosen Slot </div>
                    <div className="_7">{parentState.request?.slot} </div>
                  </div>
                  <div className="frame-10000027812">
                    <div className="monthly-income-open">Monthly Income </div>
                    <div className="n-100-000-open">{getCurrency(100000)} </div>
                  </div>
                </div>
                <div className="frame-1000002783">
                  <div className="frame-10000027813">
                    <div className="preferred-payment-method-open">
                      Preferred Payment Method{" "}
                    </div>
                    <div className="bank-transfer-open">Bank Transfer </div>
                  </div>
                  <div className="frame-10000027822">
                    <div className="preferred-remittance-method-open">
                      Preferred Remittance Method{" "}
                    </div>
                    <div className="bank-transfer-open">Bank Transfer </div>
                  </div>
                </div>
                <div className="frame-10000027802">
                  <div className="account-statement-open">
                    Account Statement{" "}
                  </div>
                  <div className="image-open">
                    <svg
                      className="bxs-file-pdf-open"
                      width="41"
                      height="41"
                      viewBox="0 0 41 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.2782 24.9666C13.9715 24.9666 13.7649 24.9966 13.6582 25.0266V26.9899C13.7849 27.0199 13.9432 27.0282 14.1615 27.0282C14.9599 27.0282 15.4515 26.6249 15.4515 25.9432C15.4515 25.3332 15.0282 24.9666 14.2782 24.9666ZM20.0899 24.9866C19.7565 24.9866 19.5399 25.0166 19.4115 25.0466V29.3966C19.5399 29.4266 19.7465 29.4266 19.9332 29.4266C21.2949 29.4366 22.1815 28.6866 22.1815 27.0999C22.1915 25.7166 21.3832 24.9866 20.0899 24.9866Z"
                        fill="#F85656"
                      />
                      <path
                        d="M23.8327 3.83325H10.4993C9.61529 3.83325 8.76745 4.18444 8.14233 4.80956C7.5172 5.43468 7.16602 6.28253 7.16602 7.16659V33.8333C7.16602 34.7173 7.5172 35.5652 8.14233 36.1903C8.76745 36.8154 9.61529 37.1666 10.4993 37.1666H30.4993C31.3834 37.1666 32.2312 36.8154 32.8564 36.1903C33.4815 35.5652 33.8327 34.7173 33.8327 33.8333V13.8333L23.8327 3.83325ZM16.3293 27.4833C15.8143 27.9666 15.0543 28.1833 14.1693 28.1833C13.9977 28.1851 13.8262 28.1751 13.656 28.1532V30.5299H12.166V23.9699C12.8384 23.8696 13.5179 23.8239 14.1977 23.8333C15.126 23.8333 15.786 24.0099 16.231 24.3649C16.6543 24.7016 16.941 25.2533 16.941 25.9033C16.9393 26.5566 16.7227 27.1083 16.3293 27.4833ZM22.6743 29.7416C21.9743 30.3233 20.9093 30.5999 19.6077 30.5999C18.8277 30.5999 18.276 30.5499 17.901 30.4999V23.9716C18.5737 23.8734 19.2529 23.8272 19.9327 23.8333C21.1943 23.8333 22.0143 24.0599 22.6543 24.5433C23.346 25.0566 23.7793 25.8749 23.7793 27.0499C23.7793 28.3216 23.3143 29.1999 22.6743 29.7416ZM28.8327 25.1166H26.2793V26.6349H28.666V27.8583H26.2793V30.5316H24.7693V23.8833H28.8327V25.1166ZM23.8327 15.4999H22.166V7.16659L30.4993 15.4999H23.8327Z"
                        fill="#F85656"
                      />
                    </svg>
                    <div className="frame-1000002740">
                      <div className="account-statement-pdf-open">
                        Account Statement.Pdf{" "}
                      </div>
                      <div className="_250-kb-open">250KB </div>
                    </div>
                  </div>
                  <div className="button2-open">
                    <div className="button3-open">View </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="scroll-bar"></div> */}
          </div>
          <div className="frame-1000002724">
            <div
              className="button4-open"
              onClick={() => {
                handleRequest(RequestStatus.Approve, true);
              }}
            >
              <div className="button5-open">Approve </div>
            </div>
            <div
              className="button6-open"
              onClick={() => {
                setFailed(true);
                // setView(false);
                setApproval(false);

                setParentState({
                  openReview: true,
                  loading: false,
                  response: parentState.response,
                  request: parentState.request,
                  closeReview: false,
                });
                // handleRequest("Decline", false);
              }}
            >
              <div className="button7-open">Decline </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewRquest;
