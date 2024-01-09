import React from "react";
import styles from "./userdrightside.module.css";
import { Outlet } from "react-router-dom";
const UserDRightSide = () => {
  return (
    <div className={styles.tabsParent}>
      <div className={styles.tabs}>
        <div className={styles.tab}>
          <div className={styles.tabLabelWrapper}>
            <div className={styles.tabLabel}>Thrift Plans</div>
          </div>
          <div className={styles.tabChild} />
        </div>
        <div className={styles.tab1}>
          <div className={styles.tabLabelWrapper}>
            <div className={styles.tabLabel1}>Wallet</div>
          </div>
          <div className={styles.tabItem} />
        </div>
        <div className={styles.tab1}>
          <div className={styles.tabLabelWrapper}>
            <div className={styles.tabLabel1}>KYC</div>
          </div>
          <div className={styles.tabItem} />
        </div>
        <div className={styles.tab1}>
          <div className={styles.tabLabelWrapper}>
            <div className={styles.tabLabel1}>Transactions</div>
          </div>
          <div className={styles.tabItem} />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default UserDRightSide;
