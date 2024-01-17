import React, { useState } from "react";
import Map from "./Map";
// import "./overview.css";
// import Nigeria from "@svg-maps/nigeria";
import styles from "./userdistribution.module.css";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const UserDistribution = () => {
  const [content, setContent] = useState("");
  return (
    <>
      <div className={styles.usersDistribution}>
        <div className={styles.headingParent}>
          <div className={styles.heading}>Users Distribution</div>
          <div className={styles.heading1}>3200 Users in 20 States</div>

          {/* <div className="App">
            <h1
              data-tooltip-id="my-tooltip-1"
              style={{ backgroundColor: "#999" }}
            >
              Hello Tooltip Example
            </h1>
            <h2
              data-tooltip-id="my-tooltip-2"
              style={{ backgroundColor: "#999" }}
            >
              This is a basic example on how to use ReactTooltip
            </h2>
          </div> */}
          {/* <Tooltip
            id="my-tooltip-1"
            place="bottom"
            content="Hello world! I'm a Tooltip"
          />
          <Tooltip
            id="my-tooltip-2"
            place="top"
            variant="info"
            content="I'm a info tooltip"
          />
          <Tooltip
            data-tooltip-id="my-tooltip-3"
            anchorSelect=".my-anchor-element"
            place="top"
            content={content}
          >
            Hello world!
          </Tooltip> */}

          {/* <div className={styles.heading}>Users Distribution</div> */}
        </div>
        <div className={styles.usersDistributionInner}>
          <div className={styles.nigeria1Parent}>
            <div className={styles.nigeria1}>
              {/* <Tooltip opacity={10}>{content}</Tooltip> */}

              <Tooltip
                id="my-tooltip"
                content={content}
                place="top"
                offset={0}
              />

              <Map setTooltipContent={setContent} />

              {/* <div className={styles.tooltipParent}>
                <div className={styles.tooltip}>
                  <div className={styles.tooltipStyleBottomPoint}>
                    <div className={styles.tooltipMaster}>
                      <div className={styles.container}>
                        <div className={styles.content}>
                          <div className={styles.headingParent}>
                            <div className={styles.header}>
                              <div className={styles.title}>{content}</div>
                            </div>
                            <div className={styles.subtext}>500 Users</div>
                          </div>
                        </div>
                        <div className={styles.bottomFrame}>
                          <div className={styles.pointer} />
                          <img
                            className={styles.pointerIcon}
                            alt=""
                            src="Pointer.png"
                          />
                          <div className={styles.pointer} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameChild} />
              </div> */}
            </div>
            <div className={styles.topStatesParent}>
              <div className={styles.topStates}>Top States</div>
              <div className={styles.frameParent}>
                <div className={styles.lagosParent}>
                  <div className={styles.lagos}>Lagos</div>
                  <div className={styles.k}>{`2.1k `}</div>
                </div>
                <div className={styles.lagosParent}>
                  <div className={styles.lagos}>Rivers</div>
                  <div className={styles.k}>{`1.2k `}</div>
                </div>
                <div className={styles.lagosParent}>
                  <div className={styles.lagos}>FCT</div>
                  <div className={styles.k}>500</div>
                </div>
                <div className={styles.lagosParent}>
                  <div className={styles.lagos}>Oyo</div>
                  <div className={styles.k}>154</div>
                </div>
                <div className={styles.lagosParent}>
                  <div className={styles.lagos}>Ogun</div>
                  <div className={styles.k}>89</div>
                </div>
                <div className={styles.lagosParent}>
                  <div className={styles.lagos}>Imo</div>
                  <div className={styles.k}>55</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

    // <div className="users-distribution">
    //   <div className="frame">
    //     <div className="heading">Users Distribution</div>
    //     <p className="p">3200 Users in 20 States</p>
    //   </div>
    //   <div className="frame-wrapper">
    //     <div className="frame-2">
    //       <div className="nigeria">
    //         <Map />

    //       </div>
    //       <div className="frame-4">
    //         <div className="text-wrapper-2">Top States</div>
    //         <div className="frame-5">
    //           <div className="frame-6">
    //             <div className="text-wrapper-3">Lagos</div>
    //             <div className="text-wrapper-4">2.1k</div>
    //           </div>
    //           <div className="frame-6">
    //             <div className="text-wrapper-3">Rivers</div>
    //             <div className="text-wrapper-4">1.2k</div>
    //           </div>
    //           <div className="frame-6">
    //             <div className="text-wrapper-3">FCT</div>
    //             <div className="text-wrapper-4">500</div>
    //           </div>
    //           <div className="frame-6">
    //             <div className="text-wrapper-3">Oyo</div>
    //             <div className="text-wrapper-4">154</div>
    //           </div>
    //           <div className="frame-6">
    //             <div className="text-wrapper-3">Ogun</div>
    //             <div className="text-wrapper-4">89</div>
    //           </div>
    //           <div className="frame-6">
    //             <div className="text-wrapper-3">Imo</div>
    //             <div className="text-wrapper-4">55</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default UserDistribution;
