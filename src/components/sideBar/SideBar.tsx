import NavItem from "../navItems/NavItem";
import classes from "./siderbar.module.css";
import Dreallogo from "../../assets/Dreallogo.svg";
// import styles from "./Sidebar.module.css";

import {
  wallet,
  walletAc,
  users,
  usersAc,
  dashboard,
  dashboardAc,
  thriftPlans,
  thriftPlansAc,
} from "../../assets/nav";

// import wallet from "../../assets/nav/wallet.svg";

const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      <header className={classes.header}>
        <p>
          <img src={Dreallogo} alt="Dreal" />
        </p>
        <p>ThriftNest</p>
      </header>
      <nav>
        <NavItem
          to="/dashboard"
          inActiveicon={dashboard}
          activeIcon={dashboardAc}
        >
          Dashboard
        </NavItem>
        <NavItem
          to="/thrift"
          inActiveicon={thriftPlans}
          activeIcon={thriftPlansAc}
        >
          Thrift Plans
        </NavItem>
        <NavItem to="/wallets" inActiveicon={wallet} activeIcon={walletAc}>
          Wallets
        </NavItem>
        <NavItem to="/users" inActiveicon={users} activeIcon={usersAc}>
          Users
        </NavItem>
      </nav>
      <div>logout</div>
    </div>
  );
};

export default SideBar;
