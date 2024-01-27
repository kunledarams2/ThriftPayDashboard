import React from "react";
import styles from "../Customers/userthriftplan.module.css";
import { useLocation } from "react-router-dom";

const UserThriftPlan = () => {
  const { state } = useLocation();
  const { data } = state;
  console.log(data);
  return (
    <>
      <div className={styles.pillParent}>
        <div className={styles.pill4}>
          <div className={styles.buttonLabel}>All</div>
        </div>
        <div className={styles.pill5}>
          <div className={styles.buttonLabel1}>Active</div>
        </div>
        <div className={styles.pill5}>
          <div className={styles.buttonLabel1}>Pending</div>
        </div>
        <div className={styles.pill5}>
          <div className={styles.buttonLabel1}>Completed</div>
        </div>
        <div className={styles.pill8} />
        <div className={styles.pill8} />
        <div className={styles.pill8} />
        <div className={styles.pill8} />
      </div>

      <div className={styles.frameParent}>
        <div className={styles.thriftplanCardParent}>
          <div className={styles.thriftplanCard}>
            <div className={styles.thriftplan}>
              <div className={styles.frameParent}>
                <div className={styles.basicThriftPlanParent}>
                  <div className={styles.basicThriftPlan1}>
                    Basic Thrift Plan
                  </div>
                  <img className={styles.icons1} alt="" src="Icons.png" />
                </div>
                <div className={styles.createdParent}>
                  <div className={styles.created}>Created:</div>
                  <div className={styles.july1420232}>July 14, 2023</div>
                </div>
              </div>
              <div className={styles.info2Parent}>
                <div className={styles.info2}>
                  <div className={styles.div}>₦10,000</div>
                  <div className={styles.targetRemitmonthly}>
                    Amount Per Member
                  </div>
                </div>
                <div className={styles.info2}>
                  <div className={styles.div}>10</div>
                  <div className={styles.targetRemitmonthly}>No of Slots</div>
                </div>
              </div>
              <div className={styles.info2Parent}>
                <div className={styles.info2}>
                  <div className={styles.div}>₦100,000</div>
                  <div className={styles.targetRemitmonthly}>
                    Target Remit/Monthly
                  </div>
                </div>
                <div className={styles.info2}>
                  <div className={styles.div}>5/10</div>
                  <div className={styles.targetRemitmonthly}>Filled Slots</div>
                </div>
              </div>
              <div className={styles.progress}>
                <div className={styles.progressBar}>
                  <div className={styles.progressBarChild} />
                </div>
                <div className={styles.div4}>1000%</div>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.startDateParent}>
                <div className={styles.startDate}>Start Date:</div>
                <div className={styles.july1420233}>July 14, 2023</div>
              </div>
              <div className={styles.bagde}>
                <div className={styles.completed}>Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserThriftPlan;
