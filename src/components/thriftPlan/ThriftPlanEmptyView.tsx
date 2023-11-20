import React from "react";
import "./styles/tPlanEmptyView.css";
import { useState } from "react";
import CreateThriftPlanModal from "../modal/CreateThriftPlanModal";

const ThriftPlanEmptyView = () => {
  const [open, setOpen] = useState(false);
  const closeHandleClose = () => setOpen(false);

  const openCreateThriftModal = () => {
    setOpen(true);
  };

  return (
    <div>
      <div className="content">
        <div className="frame-1000002722">
          <div className="frame-2714">
            <svg
              className="icons"
              width="226"
              height="225"
              viewBox="0 0 226 225"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1013_8939)">
                <path
                  d="M148.156 112.5C148.156 119.453 146.094 126.25 142.231 132.032C138.368 137.813 132.878 142.319 126.454 144.98C120.03 147.641 112.961 148.337 106.141 146.981C99.3217 145.624 93.0575 142.276 88.1408 137.359C83.2241 132.443 79.8758 126.178 78.5193 119.359C77.1628 112.539 77.859 105.47 80.5199 99.0463C83.1807 92.6223 87.6868 87.1317 93.4682 83.2687C99.2496 79.4056 106.047 77.3438 113 77.3438C122.324 77.3438 131.266 81.0477 137.859 87.6408C144.452 94.2339 148.156 103.176 148.156 112.5ZM218.469 56.25V168.75C218.469 170.615 217.728 172.403 216.409 173.722C215.091 175.04 213.302 175.781 211.438 175.781H14.5625C12.6977 175.781 10.9093 175.04 9.59066 173.722C8.27204 172.403 7.53125 170.615 7.53125 168.75V56.25C7.53125 54.3852 8.27204 52.5968 9.59066 51.2782C10.9093 49.9595 12.6977 49.2187 14.5625 49.2188H211.438C213.302 49.2188 215.091 49.9595 216.409 51.2782C217.728 52.5968 218.469 54.3852 218.469 56.25ZM204.406 96.9873C196.422 94.6266 189.156 90.3059 183.269 84.4188C177.382 78.5317 173.061 71.2652 170.7 63.2812H55.2998C52.9391 71.2652 48.6184 78.5317 42.7313 84.4188C36.8442 90.3059 29.5777 94.6266 21.5938 96.9873V128.013C29.5777 130.373 36.8442 134.694 42.7313 140.581C48.6184 146.468 52.9391 153.735 55.2998 161.719H170.7C173.061 153.735 177.382 146.468 183.269 140.581C189.156 134.694 196.422 130.373 204.406 128.013V96.9873Z"
                  fill="#E4E5EB"
                />
              </g>
              <defs>
                <clipPath id="clip0_1013_8939">
                  <rect
                    width="225"
                    height="225"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="text">
              <div className="your-wallet-is-empty">Thrift plans </div>
              <div className="your-wallet-is-empty2">
                You currently have no thrift plans{" "}
              </div>
            </div>
          </div>
          <div onClick={openCreateThriftModal} className="button-empty-tplan">
            <svg
              className="icons2-empty-tplan"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1182_11945)">
                <path
                  d="M2.5 8H13.5"
                  stroke="#FAFAFB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 2.5V13.5"
                  stroke="#FAFAFB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1182_11945">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="button2-empty-tplan">Create Thrift Plan </div>
          </div>
        </div>
      </div>
      {open && <CreateThriftPlanModal open={open} close={closeHandleClose} />}
    </div>
  );
};

export default ThriftPlanEmptyView;
