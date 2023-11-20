import React from "react";
import { Button } from "react-bootstrap";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface Props {
  open: boolean;
  close: any;
  route: string;
}

const SuccessMessage = ({ open, close, route }: Props) => {
  let navigate: NavigateFunction = useNavigate();
  const handelButtonClick = () => {
    close = false;
    navigate(route);
  };
  return (
    <div
      className="overlay-modal "
      style={{
        transform: open ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: open ? 1 : 0,
      }}
    >
      <div
        className="account-created-successfully-modal"
        // style={{
        //   transform: open ? "translateY(0vh)" : "translateY(-100vh)",
        //   opacity: open ? 1 : 0,
        // }}
      >
        <div className="frame-1000002686">
          <div className="fullcolors-check">
            <svg
              className="fullcolors-check2"
              width="65"
              height="64"
              viewBox="0 0 65 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1147_269)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.5 64C50.1732 64 64.5 49.6732 64.5 32C64.5 14.3269 50.1732 0 32.5 0C14.8269 0 0.5 14.3269 0.5 32C0.5 49.6732 14.8269 64 32.5 64ZM47.6212 25.1213C48.7928 23.9498 48.7928 22.0502 47.6212 20.8787C46.4496 19.7071 44.5504 19.7071 43.3788 20.8787L27.5 36.7574L21.6213 30.8787C20.4498 29.7071 18.5502 29.7071 17.3787 30.8787C16.2071 32.0502 16.2071 33.9498 17.3787 35.1213L25.3787 43.1212C26.5502 44.2928 28.4498 44.2928 29.6213 43.1212L47.6212 25.1213Z"
                  fill="#26A068"
                />
              </g>
              <defs>
                <clipPath id="clip0_1147_269">
                  <rect
                    width="64"
                    height="64"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="frame-1000002687">
            <div className="password-reset-successful">
              Password Reset Successful{" "}
            </div>
            <div className="please-login-to-continue-to-your-dashboard">
              Please login to continue to your dashboard{" "}
            </div>
          </div>
          <Button onClick={handelButtonClick} className="button">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
