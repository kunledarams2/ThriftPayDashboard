import { FunctionComponent, useState } from "react";
import styles from "./UserTab.module.css";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Tabs: FunctionComponent = () => {
  let navigate: NavigateFunction = useNavigate();
  const [details, setDetails] = useState(false);
  const [overview, setOverview] = useState(true);

  const handelViewDetail = () => {
    setDetails(true);
    setOverview(false);
    navigate("/users/info/all");
  };
  const handelViewOverview = () => {
    setDetails(false);
    setOverview(true);
    navigate("/users");
  };
  return (
    <div className={styles.tabs}>
      <div className={overview ? styles.tab1 : styles.tab}>
        <div className={styles.tabLabelWrapper}>
          <div
            className={overview ? styles.tabLabel1 : styles.tabLabel}
            onClick={handelViewOverview}
          >
            Overview
          </div>
        </div>
        <div className={overview ? styles.tabItem : styles.tabChild} />
      </div>
      <div className={details ? styles.tab1 : styles.tab}>
        <div className={styles.tabLabelWrapper}>
          <div
            className={details ? styles.tabLabel1 : styles.tabLabel}
            onClick={handelViewDetail}
          >
            User
          </div>
        </div>
        <div className={details ? styles.tabItem : styles.tabChild} />
      </div>
    </div>
  );
};

export default Tabs;
