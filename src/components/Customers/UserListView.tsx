import React from "react";

import styles from "../Customers/UserListView.module.css";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { User } from "../../services/userServices";
import moment from "moment";
import { generateInitials, getCurrency, getInitials } from "../utils/util";

interface Props {
  user: User;
}

const UserListView = ({ user }: Props) => {
  let navigate: NavigateFunction = useNavigate();

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div
      onClick={() =>
        navigate("/users/info/detail/plan", { state: { data: user } })
      }
      className={styles.thriftplanCard}
    >
      <div className={styles.tableCell}>
        <div className={styles.checkbox}>
          <div className={styles.checkboxChild} />
        </div>
        {/* <img className={styles.avatarsIcon1} alt="" src="Avatars.png" /> */}

        <div
          className={styles.avatars}
          style={{
            backgroundColor: getRandomColor(),
          }}
        >
          <div className={styles.initial}>
            {" "}
            {generateInitials(user.first_name)}{" "}
            {generateInitials(user.last_name)}{" "}
          </div>
        </div>

        <div className={styles.textAndSupportingText1}>
          <div className={styles.text5}>
            {user.first_name} {user.last_name}
          </div>
          <div className={styles.supportingText1}>{user.email}</div>
        </div>
      </div>
      <div className={styles.tableCell1}>
        <div className={styles.div}>{user.phone_number}</div>
      </div>
      <div className={styles.tableCell2}>
        <div
          className={user.is_active_plan ? styles.bagde : styles.bagdeInactive}
        >
          <div
            className={user.is_active_plan ? styles.completed : styles.pending}
          >
            {user.is_active_plan ? "Active" : "Inactive"}
          </div>
        </div>
      </div>
      <div className={styles.tableCell3}>
        <div className={styles.div}>
          {" "}
          {moment(user.date_joined).format("YYYY-MM-DD")}
        </div>
      </div>
      <div className={styles.tableCell3}>
        <div className={styles.div}>0:0:0</div>
      </div>
      <div className={styles.tableCell5}>
        <div className={styles.div3}>{2}</div>
      </div>
      <div className={styles.tableCell6}>
        <div className={styles.n20000}>
          {getCurrency(Number(user.virtualAccountWallet?.balance) / 100)}
        </div>
      </div>
    </div>
  );
};

export default UserListView;
