import React from "react";
import "./successful_modal.css";
import { useStateContext } from "../thriftPlan/state_provider/OverviewStateContext";

interface Props {
  titleText: string;
  bodyText: string;
}
const SuccessfulModal = ({ titleText, bodyText }: Props) => {
  const { parentState, setParentState } = useStateContext();
  return (
    // <div className="inline">
    //   <div className="body-container-icon-successful">
    //     <div className="body-container-successful">
    //       <div className="alert-title-successful">{titleText} </div>
    //       <div className="body-successful">
    //         <div className="provide-users-with-non-disruptive-feedback-or-the-status-of-an-action">
    //           {bodyText}{" "}
    //         </div>
    //       </div>
    //     </div>
    //     <div className="end-successful">
    //       <svg
    //         className="icon-multiply-successful"
    //         width="16"
    //         height="16"
    //         viewBox="0 0 16 16"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           d="M8.93931 7.99988L13.1393 3.80655C13.2648 3.68101 13.3354 3.51075 13.3354 3.33321C13.3354 3.15568 13.2648 2.98542 13.1393 2.85988C13.0138 2.73434 12.8435 2.66382 12.666 2.66382C12.4884 2.66382 12.3182 2.73434 12.1926 2.85988L7.99931 7.05988L3.80597 2.85988C3.68044 2.73434 3.51018 2.66382 3.33264 2.66382C3.15511 2.66382 2.98484 2.73434 2.85931 2.85988C2.73377 2.98542 2.66325 3.15568 2.66325 3.33321C2.66325 3.51075 2.73377 3.68101 2.85931 3.80655L7.05931 7.99988L2.85931 12.1932C2.79682 12.2552 2.74723 12.3289 2.71338 12.4102C2.67954 12.4914 2.66211 12.5785 2.66211 12.6665C2.66211 12.7546 2.67954 12.8417 2.71338 12.9229C2.74723 13.0042 2.79682 13.0779 2.85931 13.1399C2.92128 13.2024 2.99502 13.252 3.07626 13.2858C3.1575 13.3197 3.24463 13.3371 3.33264 13.3371C3.42065 13.3371 3.50779 13.3197 3.58903 13.2858C3.67027 13.252 3.744 13.2024 3.80597 13.1399L7.99931 8.93988L12.1926 13.1399C12.2546 13.2024 12.3284 13.252 12.4096 13.2858C12.4908 13.3197 12.578 13.3371 12.666 13.3371C12.754 13.3371 12.8411 13.3197 12.9224 13.2858C13.0036 13.252 13.0773 13.2024 13.1393 13.1399C13.2018 13.0779 13.2514 13.0042 13.2852 12.9229C13.3191 12.8417 13.3365 12.7546 13.3365 12.6665C13.3365 12.5785 13.3191 12.4914 13.2852 12.4102C13.2514 12.3289 13.2018 12.2552 13.1393 12.1932L8.93931 7.99988Z"
    //           fill="#181818"
    //         />
    //       </svg>
    //     </div>
    //   </div>
    // </div>

    <div className="inline">
      <div className="right-line-successful"></div>
      <div className="inline2-successful">
        <div className="body-container-icon-successful">
          <div className="body-container-successful">
            <div className="alert-title-successful">{titleText} </div>
            <div className="body-successful">
              <div className="provide-users-with-non-disruptive-feedback-or-the-status-of-an-action">
                {bodyText}{" "}
              </div>
            </div>
          </div>
          <div
            className="end-successful"
            onClick={() => {
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
              className="icon-multiply-successful"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.93931 7.99988L13.1393 3.80655C13.2648 3.68101 13.3354 3.51075 13.3354 3.33321C13.3354 3.15568 13.2648 2.98542 13.1393 2.85988C13.0138 2.73434 12.8435 2.66382 12.666 2.66382C12.4884 2.66382 12.3182 2.73434 12.1926 2.85988L7.99931 7.05988L3.80597 2.85988C3.68044 2.73434 3.51018 2.66382 3.33264 2.66382C3.15511 2.66382 2.98484 2.73434 2.85931 2.85988C2.73377 2.98542 2.66325 3.15568 2.66325 3.33321C2.66325 3.51075 2.73377 3.68101 2.85931 3.80655L7.05931 7.99988L2.85931 12.1932C2.79682 12.2552 2.74723 12.3289 2.71338 12.4102C2.67954 12.4914 2.66211 12.5785 2.66211 12.6665C2.66211 12.7546 2.67954 12.8417 2.71338 12.9229C2.74723 13.0042 2.79682 13.0779 2.85931 13.1399C2.92128 13.2024 2.99502 13.252 3.07626 13.2858C3.1575 13.3197 3.24463 13.3371 3.33264 13.3371C3.42065 13.3371 3.50779 13.3197 3.58903 13.2858C3.67027 13.252 3.744 13.2024 3.80597 13.1399L7.99931 8.93988L12.1926 13.1399C12.2546 13.2024 12.3284 13.252 12.4096 13.2858C12.4908 13.3197 12.578 13.3371 12.666 13.3371C12.754 13.3371 12.8411 13.3197 12.9224 13.2858C13.0036 13.252 13.0773 13.2024 13.1393 13.1399C13.2018 13.0779 13.2514 13.0042 13.2852 12.9229C13.3191 12.8417 13.3365 12.7546 13.3365 12.6665C13.3365 12.5785 13.3191 12.4914 13.2852 12.4102C13.2514 12.3289 13.2018 12.2552 13.1393 12.1932L8.93931 7.99988Z"
                fill="#181818"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessfulModal;
