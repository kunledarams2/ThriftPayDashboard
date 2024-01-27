import classes from './overview.module.css'
import { Link } from 'react-router-dom'
import DoughnutOverview from '../../../components/fullDoughnutChart/DoughnutOverview'
import Card from '../../../components/dashboardCard/Card'
import activeUsers from '../../../assets/dashboard/activeUsers.png'
import completed from '../../../assets/wallet/completed.png'
import failed from '../../../assets/wallet/failed.png'
import pending from '../../../assets/wallet/pending.png'
import thrift from '../../../assets/wallet/thrift.png' //duplicate png

import Status from '../../../components/status/Status'
import Flow from '../../../components/flow/Flow'
import Pnl from '../../../components/profit-n-loss/Pnl'
import inflow from "../../../assets/dashboard/inflow.png";
import outflow from "../../../assets/dashboard/outflow.png";
import LineChart from "../../../components/Charts/LineChart";
import Select from '../../../components/select/Select'
import Transactions  from '../../../components/transactions/Transactions'
import { dummyTnxs } from '../../../utils/dummyData'
const Overview = () => {
  
  return (
    <div>
        <section className={classes.overview}>
    <div className={classes.chart}>
      <DoughnutOverview options={[{dataTitle:'Deposit',dataColor:'#111217',data:12},{dataTitle:'Thrift Plans',dataColor:'#FFE999',data:4},{dataTitle:'Withdrawals',dataColor:'#C6C7F8',data:4}]} title="Total transactions"></DoughnutOverview>
    </div>
    <div>
    <Card
            icon={completed}
            title="Total Completed Transactions"
            amount={20}
          />
    <Card
            icon={pending}
            title="Total Pending Transactions"
            amount={20}
          />
    <Card
            icon={failed}
            title="Total Failed Transactions"
            amount={20}
          />
    <Card
            icon={thrift}
            title="Total Thrift Transactions"
            amount={20}
          />
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
            <div className={classes.statuses}>
              <Status type="sm" boxColor="#111217">
                Inflow
              </Status>
              <Status type="sm" boxColor="#CC3366">
                Outflow
              </Status>
            </div>
            <Select />
          </div>
          <div className={classes.flowContainer}>
            <Flow
              icon={inflow}
              amount={'12'}
              pnl={{ trend: "up", pnl: "+2.5" }}
            >
              Total Inflow
            </Flow>
            <Flow
              icon={outflow}
              amount={'12'}              
              pnl={{ trend: "down", pnl: "-2.5" }}
            >
              Total Outflow
            </Flow>
          </div>
          <LineChart />
        </aside>
        </section>
        <section className={classes.transactions}>
            <div className={classes.transactionsHeader}>
                <p>Recent Transactions</p>
                <p> <Link to={'../transactions'}> See All </Link></p>
            </div>
            <Transactions transactions={dummyTnxs}/>
        </section>
    </div>
  )
}

export default Overview