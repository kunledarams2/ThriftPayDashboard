import { useState } from "react";
import CreateThriftPlanModal from "../modal/CreateThriftPlanModal";
import "./styles/thriftPlanTab.css";

const ThriftPlanTab = () => {
  const [open, setOpen] = useState(false);
  const closeHandleClose = () => setOpen(false);

  const openCreateThriftModal = () => {
    setOpen(true);
  };
  return (
    <div>
      <div className="tabs">
        <div className="tab">
          <div className="frame-1000002689">
            <div className="tab-label">Thrift plans </div>
          </div>
          <div className="rectangle-3"></div>
        </div>
        <div className="tab">
          <div className="frame-1000002690">
            <div className="tab-label2">Analytics </div>
          </div>
          <div className="rectangle-32-tab"></div>
        </div>
        <div className="frame-1000002720">
          <div onClick={openCreateThriftModal} className="button-tab">
            <svg
              className="icons-tab"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1182_10717)">
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
                <clipPath id="clip0_1182_10717">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="button2-tab">Create Thrift Plan </div>
          </div>
        </div>
      </div>
      {open && <CreateThriftPlanModal open={open} close={closeHandleClose} />}
    </div>
  );
};

export default ThriftPlanTab;
