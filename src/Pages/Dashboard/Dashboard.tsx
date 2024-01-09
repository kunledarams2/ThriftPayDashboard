import classes from './Dashboard.module.css'
import Card from '../../components/dashboardCard/Card'
import Select from '../../components/select/Select'
import DoughnutChart from '../../components/Charts/DoughnutChart'
import Status from '../../components/status/Status'
import totalUsers from '../../assets/dashboard/totalUsers.png'
import activeUsers from '../../assets/dashboard/activeUsers.png'
import thrift from '../../assets/dashboard/thrift.png'
import wallet from '../../assets/dashboard/wallet.png'
import Pnl from '../../components/profit-n-loss/Pnl'
import Flow from '../../components/flow/Flow'
import inflow from '../../assets/dashboard/inflow.png'
import outflow from '../../assets/dashboard/outflow.png'
import LineChart from '../../components/Charts/LineChart'
import Activity from '../../components/activity/Activity'

const Dashboard = () => {
  return (
   

         <div className={classes.dateRange}>
            <Select/>
            <section className={classes.overview}>
            <div>
              <Card icon={totalUsers} title='Total Users' amount={250} trend='up' period='Last 7 days' pnl='+2.5' />

              <Card icon={activeUsers} title='Active Users' amount={20} trend='down' period='Last 7 days' pnl='-2.5' />

              <Card icon={wallet} title='Total Wallet Transactions' amount={1234} trend='down' period='Last 7 days' pnl='-2.5' />
              <Card icon={thrift} title='Active Thrift Plans' amount={5} trend='down' period='Last 7 days' pnl='-2.5' />
            </div>
            <div>
              
              <DoughnutChart />
              
              <div className={classes.legend}>
                <p><Status type="md" boxColor='#111217'>Active</Status> <span>12</span></p> 
                
                <p><Status type="md" boxColor='#FFE999'>Pending</Status><span>4</span></p> 
               
                <p><Status type="md" boxColor='#B1E3FF'>Completed</Status><span>4</span></p> 
                
                
                
              </div>
            </div>
            </section>
            <section className={classes.walletActivities}>
              <aside className={classes.wallet}>
                <div className={classes.walletHeader}>
                  <div>
                    <p>
                    <span className={classes.balText}>Total Wallet Balance</span>
                    <span className={classes.balance}>N{'12,340'}</span>
                    </p>
                  <Pnl badge={true} trend='up' pnl='+2.5'/>
                  </div>
                  <div>
                    <Status type='sm' boxColor='#111217'>Inflow</Status>
                    <Status type='sm' boxColor='#CC3366'>Outflow</Status>
                  </div>
                </div>
                <div className={classes.flowContainer}>
                  <Flow icon={inflow} amount='12,350' pnl={{trend:'up',pnl:'+2.5'}}>Total Inflow</Flow>
                  <Flow icon={outflow} amount='12,340' pnl={{trend:'down',pnl:'-2.5'}}>Total Outflow</Flow>
                </div>
                <LineChart/>
              </aside>
              <aside className={classes.activities}>
                <div className={classes.activitiesHeader}>
                  <span>Recent Activities</span>
                  <span>See All</span>
                </div>
                <div className={classes.activitiesContent}>
                  {/* Backend should send activity in an html template using this format inside the Activity component */}
                  {/* thrift plan should be kept in <bold></bold> and other important texts should be kept in <strong> while the rest should be wrapped in span */}
                  <Activity time={new Date()}><strong>John Doe’s</strong> <span>request to join</span> <strong>Thrift plan</strong> <b>"Summer Savings"</b> <span>approved</span> </Activity>

                  <Activity time={new Date()}><strong>John Doe’s</strong> <span>request to join</span> <strong>Thrift plan</strong> <b>"Summer Savings"</b> <span>approved</span> </Activity>

                  <Activity time={new Date()}><strong>John Doe’s</strong> <span>request to join</span> <strong>Thrift plan</strong> <b>"Summer Savings"</b> <span>approved</span> </Activity>

                  <Activity time={new Date()}><strong>John Doe’s</strong> <span>request to join</span> <strong>Thrift plan</strong> <b>"Summer Savings"</b> <span>approved</span> </Activity>

                  <Activity time={new Date()}><strong>John Doe’s</strong> <span>request to join</span> <strong>Thrift plan</strong> <b>"Summer Savings"</b> <span>approved</span> </Activity>
                  {/* <Activity activity='hello' time={new Date(Date.now() - 864e5)}/> */}
                </div>
              </aside>
            </section>
        </div>
  )
}

export default Dashboard