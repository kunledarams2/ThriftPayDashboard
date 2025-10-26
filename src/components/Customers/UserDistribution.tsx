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
  );
};

export default UserDistribution;
