import React from "react";
import styles from "./Usertab.module.css";

const UserSubTab = () => {
  return (
    <div className={styles.usersParent}>
      <div className={styles.users}>Users</div>
      <div className={styles.pillsParent}>
        <div className={styles.pills}>
          <div className={styles.pillParent}>
            <div className={styles.pill4}>
              <div className={styles.buttonLabel}>All</div>
            </div>
            <div className={styles.pill5}>
              <div className={styles.buttonLabel1}>February</div>
            </div>
            <div className={styles.pill5}>
              <div className={styles.buttonLabel1}>March</div>
            </div>
            <div className={styles.pill5}>
              <div className={styles.buttonLabel1}>April</div>
            </div>
            <div className={styles.pill8} />
            <div className={styles.pill8} />
            <div className={styles.pill8} />
            <div className={styles.pill8} />
          </div>
          <div className={styles.pillsChild} />
          <img
            className={styles.iconschevronLeft1}
            alt=""
            src="Icons/chevron-left.png"
          />
          <div className={styles.arrow}>
            <div className={styles.arrowChild} />
            <img
              className={styles.iconschevronRight1}
              alt=""
              src="Icons/chevron-right.png"
            />
          </div>
        </div>
        <div className={styles.searchFieldParent}>
          <div className={styles.searchField1} />
          <div className={styles.button}>
            <img className={styles.icons4} alt="" src="Icons.png" />
            <div className={styles.button1}>Filters</div>
          </div>
        </div>
      </div>
      <div className={styles.searchFieldGroup}>
        <div className={styles.searchField2}>
          <img className={styles.icons5} alt="" src="Icons.png" />
          <div className={styles.search}>Search</div>
        </div>
        <div className={styles.button2}>
          <img className={styles.icons6} alt="" src="Icons.png" />
          <div className={styles.buttonLabel}>Filters</div>
        </div>
      </div>
      <div className={styles.button4}>
        <img className={styles.icons6} alt="" src="Icons.png" />
        <div className={styles.buttonLabel}>Export</div>
      </div>
    </div>
  );
};

export default UserSubTab;
