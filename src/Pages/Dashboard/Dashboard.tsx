import classes from "./Dashboard.module.css";
import Card from "../../components/dashboardCard/Card";
import Select from "../../components/select/Select";
// import DoughnutChart from "../../components/Charts/DoughnutChart";
import DoughnutOverview from "../../components/fullDoughnutChart/DoughnutOverview";
import Status from "../../components/status/Status";
import totalUsers from "../../assets/dashboard/activeUsers.svg";
import activeUsers from "../../assets/dashboard/activeUsers.svg";
import thrift from "../../assets/dashboard/totalIncome.svg";
import wallet from "../../assets/dashboard/totalExpense.svg";
import Pnl from "../../components/profit-n-loss/Pnl";
import Flow from "../../components/flow/Flow";
import inflow from "../../assets/dashboard/inflow.svg";
import outflow from "../../assets/dashboard/outflow.svg";
import LineChart from "../../components/Charts/LineChart";
import Activity from "../../components/activity/Activity";
import { DashboardStateProvider } from "../../components/thriftPlan/state_provider/DashboardStateContext";
import { useLocation, useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Convert,
  DashboardStatsData,
  fetchDashboardStat,
} from "../../services/dashboardService";
// import { useLocation } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import { getCurrency } from "../../components/utils/util";
import { string } from "zod";

const Dashboard = () => {
  // const { state } = useLocation();
  // const { data } = state;
  // console.log(data);

  const stats = useLoaderData();
  const navigation = useNavigation();

  console.log("statsCrate", stats);
  console.log("loodingstate", navigation.state);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(false);

  const [dashboardStat, settdashboardStat] = useState<
    DashboardStatsData | undefined
  >(undefined);
  useEffect(() => {
    const stringJson = JSON.stringify(stats, null, 4);
    const responseData = Convert.toDashboardstats(stringJson);
    if (responseData.success) {
      setEmpty(false);
      settdashboardStat(responseData.data);

      setStatus(Boolean(progress == 100));
    } else {
      setEmpty(true);
    }
    // setLoading(true);
    // fetchDashboardStat().then(
    //   (data) => {
    //     const stringJson = JSON.stringify(data, null, 4);
    //     const responseData = Convert.toDashboardstats(stringJson);
    //     if (responseData.success) {
    //       setEmpty(false);
    //       settdashboardStat(responseData.data);

    //       setStatus(Boolean(progress == 100));
    //     } else {
    //       setEmpty(true);
    //     }
    //     setLoading(false);
    //   },
    //   (error) => {
    //     setLoading(false);
    //     const _content =
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //       error.message ||
    //       error.toString();
    //     // setContent(_content);
    //   }
    // );
  }, []);

  return (
    // <DashboardStateProvider>
    <div className={classes.frameparent}>
      <Select />
      <section className={classes.overview}>
        <div>
          <Card
            icon={totalUsers}
            title="Total Users"
            amount={dashboardStat?.total_users!}
            trend="up"
            period=""
            pnl="+2.5"
          />

          <Card
            icon={activeUsers}
            title="Active Users"
            amount={dashboardStat?.total_active_users!}
            trend="down"
            period=""
            pnl="-2.5"
          />

          <Card
            icon={wallet}
            title="Total Expenses"
            amount={200}
            trend="down"
            period=""
            pnl="-2.5"
          />
          <Card
            icon={thrift}
            title="Total  Income"
            amount={getCurrency(Number(dashboardStat?.total_income) / 100)}
            trend="down"
            period=""
            pnl="-2.5"
          />
        </div>

        <div>
          {/* <DoughnutChart
            activePlan={dashboardStat?.total_active_thrift_plan!}
            pendingPlan={dashboardStat?.total_pending_thrift_plan!}
            completedPlan={dashboardStat?.total_completed_thrift_plan!}
          />

          <div className={classes.legend}>
            <p>
              <Status type="md" boxColor="#111217">
                Active
              </Status>{" "}
              <span>{dashboardStat?.total_active_thrift_plan}</span>
            </p>

            <p>
              <Status type="md" boxColor="#FFE999">
                Pending
              </Status>
              <span>{dashboardStat?.total_pending_thrift_plan}</span>
            </p>

            <p>
              <Status type="md" boxColor="#B1E3FF">
                Completed
              </Status>
              <span>{dashboardStat?.total_completed_thrift_plan}</span>
            </p>
          </div> */}
          <div>
            <DoughnutOverview
              options={[
                {
                  dataTitle: "Active",
                  dataColor: "#0B53CB",
                  data: dashboardStat?.total_active_thrift_plan!,
                },
                {
                  dataTitle: "Pending",
                  dataColor: "#B7E4FF",
                  data: dashboardStat?.total_pending_thrift_plan!,
                },
                {
                  dataTitle: "Completed",
                  dataColor: "#E4E5EB",
                  data: dashboardStat?.total_completed_thrift_plan!,
                },
              ]}
              title="Total Thrift Plans"
            ></DoughnutOverview>
          </div>
        </div>
      </section>
      <section className={classes.walletActivities}>
        <aside className={classes.wallet}>
          <div className={classes.walletHeader}>
            <div>
              <p>
                <span className={classes.balText}>Total Thrift Balance</span>
                <span className={classes.balance}>
                  {getCurrency(
                    Number(dashboardStat?.total_thrift_balance) / 100
                  )}
                </span>
              </p>
              <Pnl badge={true} trend="up" pnl="+2.5" />
            </div>
            <div>
              <Status type="sm" boxColor="#111217">
                Total Contributions
              </Status>
              <Status type="sm" boxColor="#CC3366">
                Total Payouts
              </Status>
            </div>
          </div>
          <div className={classes.flowContainer}>
            <Flow
              icon={inflow}
              amount={getCurrency(
                Number(dashboardStat?.total_contribution_inflow) / 100
              )}
              pnl={{ trend: "up", pnl: "+2.5" }}
            >
              Total Contributions
            </Flow>
            <Flow
              icon={outflow}
              amount={getCurrency(
                Number(dashboardStat?.total_contribution_payout) / 100
              )}
              pnl={{ trend: "down", pnl: "-2.5" }}
            >
              Total Payouts
            </Flow>
          </div>
          <LineChart />
        </aside>
        {/* <aside className={classes.activities}>
          <div className={classes.activitiesHeader}>
            <span>Recent Activities</span>
            <span>See All</span>
          </div>
          <div className={classes.activitiesContent}>

            <Activity time={new Date()}>
              <strong>John Doe’s</strong> <span>request to join</span>{" "}
              <strong>Thrift plan</strong> <b>"Summer Savings"</b>{" "}
              <span>approved</span>{" "}
            </Activity>

            <Activity time={new Date()}>
              <strong>John Doe’s</strong> <span>request to join</span>{" "}
              <strong>Thrift plan</strong> <b>"Summer Savings"</b>{" "}
              <span>approved</span>{" "}
            </Activity>

            <Activity time={new Date()}>
              <strong>John Doe’s</strong> <span>request to join</span>{" "}
              <strong>Thrift plan</strong> <b>"Summer Savings"</b>{" "}
              <span>approved</span>{" "}
            </Activity>

            <Activity time={new Date()}>
              <strong>John Doe’s</strong> <span>request to join</span>{" "}
              <strong>Thrift plan</strong> <b>"Summer Savings"</b>{" "}
              <span>approved</span>{" "}
            </Activity>

            <Activity time={new Date()}>
              <strong>John Doe’s</strong> <span>request to join</span>{" "}
              <strong>Thrift plan</strong> <b>"Summer Savings"</b>{" "}
              <span>approved</span>{" "}
            </Activity>
           
          </div>
        </aside> */}

        <aside className={classes.wallet}>
          <div className={classes.walletHeader}>
            <div>
              <p>
                <span className={classes.balText}>Total Wallet Balance</span>
                <span className={classes.balance}>
                  {getCurrency(
                    Number(dashboardStat?.total_wallet_balance) / 100
                  )}
                </span>
              </p>
              <Pnl badge={true} trend="up" pnl="+2.5" />
            </div>
            <div>
              <Status type="sm" boxColor="#A023FA">
                Inflow
              </Status>
              <Status type="sm" boxColor="#0B53CB">
                Outflow
              </Status>
            </div>
          </div>
          <div className={classes.flowContainer}>
            <Flow
              icon={inflow}
              amount={getCurrency(
                Number(dashboardStat?.total_virtual_account_Inflow) / 100
              )}
              pnl={{ trend: "up", pnl: "+2.5" }}
            >
              Total Inflow
            </Flow>
            <Flow
              icon={outflow}
              amount={getCurrency(
                Number(dashboardStat?.total_virtual_account_Outflow) / 100
              )}
              pnl={{ trend: "down", pnl: "-2.5" }}
            >
              Total Outflow
            </Flow>

            <Flow
              icon={outflow}
              amount={getCurrency(Number(dashboardStat?.total_charges) / 100)}
              pnl={{ trend: "down", pnl: "-2.5" }}
            >
              Total Charges
            </Flow>
          </div>
          <LineChart />
        </aside>
      </section>
    </div>
    // </DashboardStateProvider>
  );
};

export default Dashboard;
