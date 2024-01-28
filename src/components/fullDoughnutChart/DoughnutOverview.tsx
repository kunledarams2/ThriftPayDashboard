import DoughnutChart from "../Charts/DoughnutChart"
import Status from "../status/Status"
import classes from './doughnutOverview.module.css'
import { doughnutProps } from "../../utils/types/Types"


// children : total whatever
const DoughnutOverview = ({options,title}:doughnutProps) => {

    const titles = options.map(data => data.dataTitle)
    const colors = options.map(data => data.dataColor)
    const data = options.map(data => data.data)
    // const total = data.reduce((acc,current)=> acc+ current, 0)
  return (
  
    <div className={classes.overview}>
          <DoughnutChart
            chartData={options} title={title}
          />

          <div className={classes.legend}>

            {options.map(option => (<p>
                <Status type="md" boxColor={option.dataColor}>{option.dataTitle}</Status>
                <span>{option.data}</span>
            </p>))}
            {/* <p>
              <Status type="md" boxColor="#111217">
                Active
              </Status>{" "}
              <span>{dashboardStat?.total_active_thrift_plan}</span>
            </p> */}

            {/* <p>
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
            </p> */}
          </div>
        </div>
  )
}

export default DoughnutOverview