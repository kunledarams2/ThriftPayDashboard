import classes from './Dashboard.module.css'
import Card from '../../components/dashboardCard/Card'
import Select from '../../components/select/Select'


const Dashboard = () => {
  return (
   

         <div className={classes.dateRange}>
            <Select/>
            <section className={classes.overview}>
            <div>
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div></div>
            </section>
            
        </div>
  )
}

export default Dashboard