import React from "react";
import UserSubTab from "../../components/Customers/Usertab";
import UserListView from "../../components/Customers/UserListView";
import UserListHeader from "../../components/Customers/UserListHeader";
import styles from "./usercontent.module.css";

const UserContentList = () => {
  return (
    <div className={styles.content}>
      <UserSubTab />
      <UserListHeader />
      <UserListView />
    </div>
  );
};

export default UserContentList;
