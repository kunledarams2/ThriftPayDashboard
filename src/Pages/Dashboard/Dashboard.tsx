import classes from "./Dashboard.module.css";
import Card from "../../components/dashboardCard/Card";
import Select from "../../components/select/Select";
// import DoughnutChart from "../../components/Charts/DoughnutChart";
import DoughnutOverview from "../../components/fullDoughnutChart/DoughnutOverview";
import Status from "../../components/status/Status";
import totalUsers from "../../assets/dashboard/totalUsers.png";
import activeUsers from "../../assets/dashboard/activeUsers.png";
import thrift from "../../assets/dashboard/thrift.png";
import wallet from "../../assets/dashboard/wallet.png";
import Pnl from "../../components/profit-n-loss/Pnl";
import Flow from "../../components/flow/Flow";
import inflow from "../../assets/dashboard/inflow.png";
import outflow from "../../assets/dashboard/outflow.png";
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
            period="Last 7 days"
            pnl="+2.5"
          />

          <Card
            icon={activeUsers}
            title="Active Users"
            amount={dashboardStat?.total_active_users!}
            trend="down"
            period="Last 7 days"
            pnl="-2.5"
          />

          <Card
            icon={wallet}
            title="Total Wallet Transactions"
            amount={dashboardStat?.total_virtual_account_transaction!}
            trend="down"
            period="Last 7 days"
            pnl="-2.5"
          />
          <Card
            icon={thrift}
            title="Active Thrift Plans"
            amount={dashboardStat?.total_active_thrift_plan!}
            trend="down"
            period="Last 7 days"
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
          <div >
      <DoughnutOverview options={[{dataTitle:'Active',dataColor:'#111217',data:dashboardStat?.total_active_thrift_plan!},{dataTitle:'Pending',dataColor:'#FFE999',data:dashboardStat?.total_pending_thrift_plan!},{dataTitle:'Completed',dataColor:'#B1E3FF',data:dashboardStat?.total_completed_thrift_plan!}]} title="Total Thrift Plans"></DoughnutOverview>
      </div>
        </div>
      </section>
      <section className={classes.walletActivities}>
        <aside className={classes.wallet}>
          <div className={classes.walletHeader}>
            <div>
              <p>
                <span className={classes.balText}>Total Wallet Balance</span>
                <span className={classes.balance}>N{"12,340"}</span>
              </p>
              <Pnl badge={true} trend="up" pnl="+2.5" />
            </div>
            <div>
              <Status type="sm" boxColor="#111217">
                Inflow
              </Status>
              <Status type="sm" boxColor="#CC3366">
                Outflow
              </Status>
            </div>
          </div>
          <div className={classes.flowContainer}>
            <Flow
              icon={inflow}
              amount={getCurrency(
                Number(dashboardStat?.total_virtual_account_Inflow)
              )}
              pnl={{ trend: "up", pnl: "+2.5" }}
            >
              Total Inflow
            </Flow>
            <Flow
              icon={outflow}
              amount={getCurrency(
                Number(dashboardStat?.total_virtual_account_Outflow)
              )}
              pnl={{ trend: "down", pnl: "-2.5" }}
            >
              Total Outflow
            </Flow>
          </div>
          <LineChart />
        </aside>
        <aside className={classes.activities}>
          <div className={classes.activitiesHeader}>
            <span>Recent Activities</span>
            <span>See All</span>
          </div>
          <div className={classes.activitiesContent}>
            {/* Backend should send activity in an html template using this format inside the Activity component */}
            {/* thrift plan should be kept in <bold></bold> and other important texts should be kept in <strong> while the rest should be wrapped in span */}
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
            {/* <Activity activity='hello' time={new Date(Date.now() - 864e5)}/> */}
          </div>
        </aside>
      </section>
    </div>
    // </DashboardStateProvider>
  );
};

export default Dashboard;
