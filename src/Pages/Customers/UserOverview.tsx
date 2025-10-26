import React, { useEffect, useState } from "react";
import CustomerOverview from "../../components/Customers/customerOverview";
import CustomerChart from "../../components/Customers/CustomerChart";
import UserDistribution from "../../components/Customers/UserDistribution";
// import "../Customers/customer.css";
import styles from "./useroverview.module.css";
import { Convert, DashboardStatsData } from "../../services/dashboardService";
import { number } from "zod";

import {
  totalUsers,
  totalCoordinator,
  inactiveUsers,
  activeUsers,
} from "../../assets/user/index";

const UserOverview = () => {
  const [inActiveUser, setInActiveUser] = useState(0);
  const [dashboardStat, setDashboardStat] = useState<
    DashboardStatsData | undefined
  >(undefined);

  useEffect(() => {
    const items = localStorage.getItem("dashStats");
    const responseData = Convert.toDashboardstats(items!);
    if (responseData.success) {
      setDashboardStat(responseData.data);
      const inActiveUser =
        responseData.data.total_users - responseData.data.total_active_users;
      setInActiveUser(inActiveUser);
    }

    // if (responseData) {
    //   setDashStat(responseData);
    // }
  }, []);
  return (
    <>
      <div className={styles.content}>
        <div className={styles.overview}>
          <div className={styles.totalThriftPlansParent}>
            <div className={styles.totalThriftPlans}>
              <div className={styles.frameParent}>
                <img alt="" src={totalUsers} />
                <div className={styles.frameGroup}>
                  <div className={styles.totalUsersParent}>
                    <div className={styles.totalUsers}>Total Users</div>
                    <div className={styles.div}>
                      {dashboardStat?.total_users}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.totalThriftPlans}>
              <div className={styles.frameParent}>
                <img alt="" src={activeUsers} />
                <div className={styles.frameGroup}>
                  <div className={styles.totalUsersParent}>
                    <div className={styles.totalUsers}>Active Users</div>
                    <div className={styles.div}>
                      {dashboardStat?.total_active_users}
                    </div>
                  </div>
                  <div className={styles.change}>
                    <div className={styles.change1}>
                      <img className={styles.icons1} alt="" src={activeUsers} />
                      <div className={styles.div1}>-2.5%</div>
                    </div>
                    <div className={styles.last7Days}>Last 7 Days</div>
                  </div>
                  <div className={styles.change2}>
                    <div className={styles.change3}>
                      <img className={styles.icons1} alt="" src="Icons.svg" />
                      <div className={styles.div1}>+2.5%</div>
                    </div>
                    <div className={styles.last7Days}>Last 7 Days</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.totalThriftPlans}>
              <div className={styles.frameParent}>
                <img alt="" src={inactiveUsers} />

                <div className={styles.frameGroup}>
                  <div className={styles.totalUsersParent}>
                    <div className={styles.totalUsers}>Inactive Users</div>
                    <div className={styles.div}>{inActiveUser}</div>
                  </div>
                  <div className={styles.change}>
                    <div className={styles.change1}>
                      <img className={styles.icons1} alt="" src="Icons.svg" />
                      <div className={styles.div1}>-2.5%</div>
                    </div>
                    <div className={styles.last7Days}>Last 7 Days</div>
                  </div>
                  <div className={styles.change2}>
                    <div className={styles.change3}>
                      <img className={styles.icons1} alt="" src="Icons.svg" />
                      <div className={styles.div1}>+2.5%</div>
                    </div>
                    <div className={styles.last7Days}>Last 7 Days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.totalWalletBalanceParent}>
          <CustomerChart />
          <UserDistribution />
        </div>
      </div>
    </>
  );
};

export default UserOverview;
