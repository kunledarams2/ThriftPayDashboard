import clsx from 'clsx'
import userY from '../../assets/dashboard/userY.png'
import classes from './Card.module.css'
const Card = () => {

    const up =true;
  return (
    <div className={classes.card}>
       <div>
        <img src={userY} alt="" width={40} height={40}/>
        <span className={classes.title}>Total users</span>
        <span className={classes.amount}>250</span>
       </div>
       <div>
        <span className={clsx(classes.perc, up && classes.green)}>+2.5%</span>
        <span className={classes.period}>Last 7 days</span>

       </div>
    </div>
  )
}

export default Card