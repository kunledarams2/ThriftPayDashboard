import React from "react";

import styles from "../Customers/UserListView.module.css";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { User } from "../../services/userServices";
import moment from "moment";

interface Props {
  user: User;
}

const UserListView = ({ user }: Props) => {
  let navigate: NavigateFunction = useNavigate();

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
        <img className={styles.avatarsIcon1} alt="" src="Avatars.png" />
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
          {moment(user.date_joined).format("YYYY-MM-DD")}, 14:30
        </div>
      </div>
      <div className={styles.tableCell3}>
        <div className={styles.div}>-</div>
      </div>
      <div className={styles.tableCell5}>
        <div className={styles.div3}>{}</div>
      </div>
      <div className={styles.tableCell6}>
        <div className={styles.n20000}>{}</div>
      </div>
    </div>
  );
};

export default UserListView;
