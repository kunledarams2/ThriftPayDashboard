import clsx from 'clsx'
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import classes from './Pnl.module.css'
import { pnlProps } from '../../utils/types/Types';

const Pnl = ({trend,pnl,badge}:pnlProps) => {
    const arrow = trend === 'up' ? <GoArrowUp width={14} height={14} color='green'/>: <GoArrowDown width={14} height={14} color='red'/>
  return (
    <div className={clsx(classes.perc, (trend=== 'up'? [badge && classes.greenBadge, classes.green]: [badge && classes.redBadge,classes.red]).join(' '))}>{arrow} {pnl}%</div>
  )
}

export default Pnl