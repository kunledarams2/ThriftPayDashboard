import { useLocation } from "react-router-dom";
import Search from "../search/Search";
import AdminPanel from "../adminPanel/AdminPanel";
import classes from "./header.module.css";
const Header = () => {
  const url = useLocation();

  const headerTitle = url.pathname.split("/");
  const titleName = headerTitle[1];
  const capitalizedValue =
    titleName.charAt(0).toUpperCase() + titleName.slice(1);
  // headerTitle =
  //   headerTitle.length === 0
  //     ? ""
  //     : headerTitle
  //         .split("/")
  //         .map((pathname) => pathname[0] + pathname.substring(1))
  //         .join(" ");

  return (
    <header className={classes.header}>
      <div className={classes.headerTitle}>
        {capitalizedValue == "Thrift" ? "Thrift Plan" : capitalizedValue}
      </div>
      {/* <div className={}>form</div> */}
      <Search />
      <AdminPanel />
    </header>
  );
};

export default Header;
