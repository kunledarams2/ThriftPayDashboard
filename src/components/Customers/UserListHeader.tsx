import React from "react";
import styles from "../Customers/UserListHeader.module.css";

const UserListHeader = () => {
  return (
    <div className={styles.heading}>
      <div className={styles.headerCell}>
        <div className={styles.checkbox}>
          <div className={styles.checkboxChild} />
        </div>
        <div className={styles.user}>User</div>
      </div>
      <div className={styles.headerCell1}>
        <div className={styles.phoneNo}>Phone No</div>
      </div>
      <div className={styles.headerCell2}>
        <div className={styles.phoneNo}> Status</div>
      </div>
      <div className={styles.headerCell3}>
        <div className={styles.phoneNo}>Registration Date</div>
      </div>
      <div className={styles.headerCell3}>
        <div className={styles.phoneNo}>Last Login</div>
      </div>
      <div className={styles.headerCell1}>
        <div className={styles.phoneNo}>Active Thrift Plans</div>
      </div>
      <div className={styles.headerCell6}>
        <div className={styles.phoneNo}>Wallet Balance</div>
      </div>
      <div className={styles.headingChild} />
    </div>
  );
};

export default UserListHeader;
