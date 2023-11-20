import React from "react";
import "../../components/modal/checkemail.css";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";

interface Props {
  open: boolean;
  close: any;
}

const CheckEmail = ({ open, close }: Props) => {
  let navigate: NavigateFunction = useNavigate();
  const handelButtonClick = () => {
    close = false;
    navigate("/forgot/password/reset");
  };
  return (
    <div className="overlay-modal">
      {" "}
      <div className="account-created-successfully-modal">
        <div className="frame-1000002686">
          <svg
            className="icons"
            width="65"
            height="64"
            viewBox="0 0 65 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_797_9248)">
              <path
                d="M57.61 22.335L33.61 6.33496C33.2813 6.11568 32.8951 5.99866 32.5 5.99866C32.1049 5.99866 31.7187 6.11568 31.39 6.33496L7.39 22.335C7.11603 22.5177 6.89144 22.7654 6.73617 23.0558C6.58091 23.3463 6.49979 23.6706 6.5 24V50C6.5 51.0608 6.92143 52.0782 7.67157 52.8284C8.42172 53.5785 9.43913 54 10.5 54H54.5C55.5609 54 56.5783 53.5785 57.3284 52.8284C58.0786 52.0782 58.5 51.0608 58.5 50V24C58.5002 23.6706 58.4191 23.3463 58.2638 23.0558C58.1086 22.7654 57.884 22.5177 57.61 22.335ZM24.68 38L10.5 48V27.8825L24.68 38ZM28.7725 40H36.2275L50.385 50H14.615L28.7725 40ZM40.32 38L54.5 27.8825V48L40.32 38Z"
                fill="#444A5B"
              />
            </g>
            <defs>
              <clipPath id="clip0_797_9248">
                <rect
                  width="64"
                  height="64"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="frame-1000002687">
            <div className="check-your-mail">Check Your Mail </div>
            <div className="password-reset-instructions-have-been-sent-to-your-email-address">
              Password reset instructions have been sent to your email address{" "}
            </div>
          </div>
          <div onClick={handelButtonClick} className="button-check-email">
            <div className="button2-check-email">Continue </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
