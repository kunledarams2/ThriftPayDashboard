import arrowDown from "../../assets/header/arrowDown.png";
import avatar from "../../assets/header/avatar.png";
import notification from "../../assets/header/notification.png";
import classes from "./AdminPanel.module.css";
import { NavLink } from "react-router-dom";
const AdminPanel = () => {
  let notifications: boolean = true;
  return (
    <div className={classes.adminPanel}>
      <NavLink to={"/notifications"} className={classes.notification}>
        <img src={notification} alt="notification" />

        {notifications && <span></span>}
      </NavLink>
      {/* <div className={classes.notification}></div> */}
      <div className={classes.adminDetails}>
        <img src={avatar} alt="avatar" width={40} height={40} />
        <span className={classes.name}>Eleanor Pena</span>
        <span className={classes.userType}>Admin</span>
      </div>
      <span>
        <img src={arrowDown} alt="arrow-down" width={20} height={20} />
      </span>
    </div>
  );
};

export default AdminPanel;
