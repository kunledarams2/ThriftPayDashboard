// import clsx from 'clsx'
// import userY from '../../assets/dashboard/userY.png'
import classes from "./Card.module.css";
// import { GoArrowUp, GoArrowDown } from "react-icons/go";
import Pnl from "../profit-n-loss/Pnl";
import { cardProps } from "../../utils/types/Types";

// interface props {
//   icon: string,
//   trend: 'up'|'down'
//   title:string,
//   amount: number,
//   pnl:string,
//   period: string
// }
const Card = ({ icon, title, amount, pnl, trend, period }: cardProps) => {
  return (
    <div className={classes.card}>
      <div>
        <img src={icon} width={40} height={40} />
        <span className={classes.title}>{title}</span>
        <span className={classes.amount}>{amount}</span>
      </div>
      <div>
        <Pnl trend={trend} pnl={pnl} />
        <span className={classes.period}>{period}</span>
      </div>
    </div>
  );
};

export default Card;
