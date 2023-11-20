import React, { useMemo, useState } from "react";
import "./EmailVerify.css";
import OtpInput from "react-otp-input";

import { RE_DIGIT } from "../utils/constants/constants";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";

interface Props {
  emailAddress: string;
  open: boolean;
  close: any;
  valueLength: number;
  value: string;
  onChange: (value: string) => void;
}

const EmailVerificationModal = ({
  emailAddress,
  open,
  close,
  valueLength,
  value,
  onChange,
}: Props) => {
  const [otp, setOtp] = useState("");
  const [activateClick, setActivateClick] = useState(false);

  const valueItems = useMemo(() => {
    const valueArray = value.split("");
    const items: Array<string> = [];

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];

      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push("");
      }
    }

    return items;
  }, [value, valueLength]);

  const inputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const target = e.target;
    let targetValue = target.value;
    const isTargetValueDigit = RE_DIGIT.test(targetValue);

    if (!isTargetValueDigit && targetValue !== "") {
      return;
    }
    targetValue = isTargetValueDigit ? targetValue : " ";
    // console.log(targetValue);

    // if (!RE_DIGIT.test(targetValue)) {
    //   return;
    // }

    const newValue =
      value.substring(0, idx) + targetValue + value.substring(idx + 1);

    if (newValue.length === valueLength && isTargetValueDigit) {
      setOtp(newValue);
      setActivateClick(true);
      console.log(newValue);
    } else {
      setActivateClick(false);
    }

    onChange(newValue);

    if (!isTargetValueDigit) {
      return;
    }
    const nextElementSibling =
      target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };

  const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (e.key !== "Backspace" || target.value !== "") {
      return;
    }
    // if (target.value === "") {
    //   setActivateClick(false);
    // } else {
    //   setActivateClick(true);
    // }

    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      setActivateClick(false);
      previousElementSibling.focus();
    }
  };
  let navigate: NavigateFunction = useNavigate();

  const handleVerification = () => {
    navigate("/login");
  };

  return (
    <div className="overlay-modal">
      <div className="enter-otp-modal">
        <div className="frame-31">
          <div className="frame-1000002685">
            <div className="title">Verify Email </div>
            <svg
              className="icons"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={close}
            >
              <g clip-path="url(#clip0_796_6794)">
                <path
                  d="M25 7.44531L7 25.4453"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25 25.4453L7 7.44531"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_796_6794">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(0 0.445312)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="subcaption">
            We’ve sent to your email {emailAddress} a verification code, please
            enter the code below{" "}
          </div>
        </div>
        <div className="input-otp-code">
          {/* <OtpInput
            containerStyle={{}}
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          /> */}

          {/* <div className="otp-field"> */}
          {/* <input className="otp-field" type="password" maxLength={1} /> */}
          {/* </div> */}
          {/* <div className="otp-field"> */}

          {valueItems.map((digit, idx) => (
            <input
              className="otp-field"
              key={idx}
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              pattern="\d{1}"
              value={digit}
              maxLength={valueLength}
              onChange={(e) => inputOnChange(e, idx)}
              onKeyDown={inputOnKeyDown}
            />
          ))}
          {/* </div> */}
          {/* <div className="otp-field"></div> */}
          {/* <div className="otp-field"></div> */}
        </div>
        <div className="resend-otp">
          <div className="frame-1000002683">
            <div className="didn-t-receive-any-code-resend-in">
              Didn&#039;t receive any code? Resend in{" "}
            </div>
            <div className="_00-30">00:30 </div>
          </div>
          <div className="resend-otp2">Resend OTP </div>
        </div>
        {activateClick ? (
          <div className="frame-1000002684">
            <div onClick={handleVerification} className="button-active">
              <div className="button2-active ">Verify Email </div>
            </div>
          </div>
        ) : (
          <div className="frame-1000002684">
            <div className="button-email-verify ">
              <div className="button2-email-verify ">Verify Email </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailVerificationModal;
function handleSubmit(event: Event | undefined) {
  throw new Error("Function not implemented.");
}

function constructor(props: any) {
  throw new Error("Function not implemented.");
}

function handleChange(value1: any, event: Event | undefined) {
  throw new Error("Function not implemented.");
}
