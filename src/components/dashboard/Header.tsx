import React from "react";
import defaultAvatar from "../../assets/Avatar.jpg";

interface Props {
  headerTitle: string;
}

const Header = ({ headerTitle }: Props) => {
  return (
    <div className="header">
      <div className="dashboard-text-header">{headerTitle} </div>
      <div className="search-field">
        <svg
          className="icons-header"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1182_995)">
            <path
              d="M9.41666 15C12.8684 15 15.6667 12.2018 15.6667 8.75C15.6667 5.29822 12.8684 2.5 9.41666 2.5C5.96488 2.5 3.16666 5.29822 3.16666 8.75C3.16666 12.2018 5.96488 15 9.41666 15Z"
              stroke="#666F89"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.8362 13.1696L18.1667 17.5"
              stroke="#666F89"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1182_995">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0.666656)"
              />
            </clipPath>
          </defs>
        </svg>
        <div className="search">Search </div>
      </div>
      <div className="frame-1000002688">
        <div className="button-header">
          <svg
            className="icons2-header"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1182_1002)">
              <path
                d="M6.00006 12C6.00006 12.5304 6.21077 13.0391 6.58585 13.4142C6.96092 13.7893 7.46963 14 8.00006 14C8.53049 14 9.0392 13.7893 9.41427 13.4142C9.78935 13.0391 10.0001 12.5304 10.0001 12"
                stroke="#444A5B"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.50004 6.5C3.50004 5.30653 3.97415 4.16193 4.81806 3.31802C5.66198 2.47411 6.80657 2 8.00004 2C9.19352 2 10.3381 2.47411 11.182 3.31802C12.0259 4.16193 12.5 5.30653 12.5 6.5C12.5 8.73875 13.0188 10.5375 13.4313 11.25C13.4751 11.3259 13.4982 11.4119 13.4983 11.4996C13.4984 11.5872 13.4754 11.6733 13.4317 11.7492C13.3881 11.8252 13.3252 11.8883 13.2494 11.9324C13.1737 11.9764 13.0877 11.9997 13 12H3.00004C2.91253 11.9995 2.82669 11.976 2.7511 11.9319C2.67551 11.8878 2.61281 11.8246 2.56929 11.7487C2.52576 11.6728 2.50292 11.5868 2.50305 11.4992C2.50319 11.4117 2.52629 11.3258 2.57004 11.25C2.98192 10.5375 3.50004 8.73813 3.50004 6.5Z"
                stroke="#444A5B"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1182_1002">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="user-account-header">
          <div className="group-105-header">
            <img
              className="avatar-header"
              src={defaultAvatar}
              alt="SVG logo image"
            />
            <div className="name-position-header">
              <div className="eleanor-pena-header">Eleanor Pena </div>
            </div>
            <div className="name-position2-header">
              <div className="admin-header">Admin </div>
            </div>
            <svg
              className="icon-arrow-down-header"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9201 8.18005H11.6901H6.08005C5.12005 8.18005 4.64005 9.34005 5.32005 10.0201L10.5001 15.2001C11.3301 16.0301 12.6801 16.0301 13.5101 15.2001L15.4801 13.2301L18.6901 10.0201C19.3601 9.34005 18.8801 8.18005 17.9201 8.18005Z"
                fill="#666F89"
              />
            </svg>
          </div>
        </div>
        <div className="badge-header"></div>
      </div>
    </div>

    // <div className="header">
    //   <div className="dashboard-text-header">Dashboard </div>
    //   <div className="search-field">
    //     <svg
    //       className="icons-header"
    //       width="21"
    //       height="20"
    //       viewBox="0 0 21 20"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <g clipPath="url(#clip0_1039_6969)">
    //         <path
    //           d="M9.41666 15C12.8684 15 15.6667 12.2018 15.6667 8.75C15.6667 5.29822 12.8684 2.5 9.41666 2.5C5.96488 2.5 3.16666 5.29822 3.16666 8.75C3.16666 12.2018 5.96488 15 9.41666 15Z"
    //           stroke="#666F89"
    //           strokeWidth="1.5"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //         />
    //         <path
    //           d="M13.8362 13.1696L18.1667 17.5"
    //           stroke="#666F89"
    //           strokeWidth="1.5"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //         />
    //       </g>
    //       <defs>
    //         <clipPath id="clip0_1039_6969">
    //           <rect
    //             width="20"
    //             height="20"
    //             fill="white"
    //             transform="translate(0.666656)"
    //           />
    //         </clipPath>
    //       </defs>
    //     </svg>
    //     <div className="search">Search </div>
    //   </div>
    //   <div className="frame-1000002688">
    //     <div className="button-header">
    //       <svg
    //         className="icons2-header"
    //         width="16"
    //         height="16"
    //         viewBox="0 0 16 16"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <g clipPath="url(#clip0_1039_6976)">
    //           <path
    //             d="M8.00006 10.5C9.38077 10.5 10.5001 9.38071 10.5001 8C10.5001 6.61929 9.38077 5.5 8.00006 5.5C6.61935 5.5 5.50006 6.61929 5.50006 8C5.50006 9.38071 6.61935 10.5 8.00006 10.5Z"
    //             stroke="#444A5B"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           />
    //           <path
    //             d="M2.58946 11.1306C2.31319 10.6547 2.10154 10.1442 1.96008 9.61246L3.00883 8.29996C2.99696 8.0993 2.99696 7.89812 3.00883 7.69746L1.96071 6.38496C2.10192 5.85313 2.31314 5.34242 2.58883 4.86621L4.25821 4.67871C4.39152 4.52852 4.53364 4.38639 4.68383 4.25309L4.87133 2.58434C5.34686 2.30996 5.85674 2.09999 6.38758 1.95996L7.70008 3.00871C7.90074 2.99684 8.10192 2.99684 8.30258 3.00871L9.61508 1.96059C10.1469 2.1018 10.6576 2.31302 11.1338 2.58871L11.3213 4.25809C11.4715 4.39139 11.6137 4.53352 11.747 4.68371L13.4157 4.87121C13.692 5.34706 13.9036 5.85759 14.0451 6.38934L12.9963 7.70184C13.0082 7.90249 13.0082 8.10368 12.9963 8.30434L14.0445 9.61684C13.9042 10.1485 13.6941 10.6592 13.4195 11.1356L11.7501 11.3231C11.6168 11.4733 11.4746 11.6154 11.3245 11.7487L11.137 13.4175C10.6611 13.6937 10.1506 13.9054 9.61883 14.0468L8.30633 12.9981C8.10567 13.01 7.90449 13.01 7.70383 12.9981L6.39133 14.0462C5.85966 13.906 5.34895 13.6958 4.87258 13.4212L4.68508 11.7518C4.53489 11.6185 4.39277 11.4764 4.25946 11.3262L2.58946 11.1306Z"
    //             stroke="#444A5B"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           />
    //         </g>
    //         <defs>
    //           <clipPath id="clip0_1039_6976">
    //             <rect width="16" height="16" fill="white" />
    //           </clipPath>
    //         </defs>
    //       </svg>
    //     </div>
    //     <div className="button-header">
    //       <svg
    //         className="icons3-header"
    //         width="16"
    //         height="16"
    //         viewBox="0 0 16 16"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <g clipPath="url(#clip0_1039_6981)">
    //           <path
    //             d="M6.00006 12C6.00006 12.5304 6.21077 13.0391 6.58585 13.4142C6.96092 13.7893 7.46963 14 8.00006 14C8.53049 14 9.0392 13.7893 9.41427 13.4142C9.78935 13.0391 10.0001 12.5304 10.0001 12"
    //             stroke="#444A5B"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           />
    //           <path
    //             d="M3.50004 6.5C3.50004 5.30653 3.97415 4.16193 4.81806 3.31802C5.66198 2.47411 6.80657 2 8.00004 2C9.19352 2 10.3381 2.47411 11.182 3.31802C12.0259 4.16193 12.5 5.30653 12.5 6.5C12.5 8.73875 13.0188 10.5375 13.4313 11.25C13.4751 11.3259 13.4982 11.4119 13.4983 11.4996C13.4984 11.5872 13.4754 11.6733 13.4317 11.7492C13.3881 11.8252 13.3252 11.8883 13.2494 11.9324C13.1737 11.9764 13.0877 11.9997 13 12H3.00004C2.91253 11.9995 2.82669 11.976 2.7511 11.9319C2.67551 11.8878 2.61281 11.8246 2.56929 11.7487C2.52576 11.6728 2.50292 11.5868 2.50305 11.4992C2.50319 11.4117 2.52629 11.3258 2.57004 11.25C2.98192 10.5375 3.50004 8.73813 3.50004 6.5Z"
    //             stroke="#444A5B"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           />
    //         </g>
    //         <defs>
    //           <clipPath id="clip0_1039_6981">
    //             <rect width="16" height="16" fill="white" />
    //           </clipPath>
    //         </defs>
    //       </svg>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
