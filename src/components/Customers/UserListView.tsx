import React from "react";

import styles from "../Customers/UserListView.module.css";

const UserListView = () => {
  return (
    <div className={styles.thriftplanCard}>
      <div className={styles.tableCell}>
        <div className={styles.checkbox}>
          <div className={styles.checkboxChild} />
        </div>
        <img className={styles.avatarsIcon1} alt="" src="Avatars.png" />
        <div className={styles.textAndSupportingText1}>
          <div className={styles.text5}>Tolani Bayode</div>
          <div className={styles.supportingText1}>orlando@Example.com</div>
        </div>
      </div>
      <div className={styles.tableCell1}>
        <div className={styles.div}>08093327543</div>
      </div>
      <div className={styles.tableCell2}>
        <div className={styles.bagde}>
          <div className={styles.completed}>Active</div>
        </div>
      </div>
      <div className={styles.tableCell3}>
        <div className={styles.div}>15/09/2023, 14:30</div>
      </div>
      <div className={styles.tableCell3}>
        <div className={styles.div}>15/09/2023, 14:30</div>
      </div>
      <div className={styles.tableCell5}>
        <div className={styles.div3}>2</div>
      </div>
      <div className={styles.tableCell6}>
        <div className={styles.n20000}>N20,000</div>
      </div>
    </div>
  );
};

export default UserListView;
