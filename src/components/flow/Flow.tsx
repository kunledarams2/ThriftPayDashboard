import classes from "./Flow.module.css";
import inflow from "../../assets/dashboard/inflow.png";
import Pnl from "../profit-n-loss/Pnl";
import { flowProps } from "../../utils/types/Types";
const Flow = ({ icon, amount, children, pnl }: flowProps) => {
  return (
    <div className={classes.flow}>
      <div className={classes.total}>
        <img src={icon} width={32} height={32} />
        <p>
          <span>{children}</span>
          <span>{amount}</span>
        </p>
      </div>
      <Pnl trend={pnl.trend} pnl={pnl.pnl} />
    </div>
  );
};

export default Flow;
