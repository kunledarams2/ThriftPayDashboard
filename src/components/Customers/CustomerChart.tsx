import React from "react";
import { ArrowPointer } from "../../assets/IconsExtension/ArrowPointer";
import styles from "./customerchart.module.css";
import Select from "../../components/select/Select";
import LineChart from "../Charts/LineChart";
// import "./overview.css";

const CustomerChart = () => {
  return (
    <>
      <div className={styles.totalWalletBalance}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.headingParent}>
                <div className={styles.heading1}>New Users</div>
              </div>
              <div className={styles.change}>
                <ArrowPointer />
                <div className={styles.div}>+2.5%</div>
              </div>
            </div>
          </div>
          <Select />
        </div>

        <LineChart />
      </div>
    </>
  );
};

export default CustomerChart;
