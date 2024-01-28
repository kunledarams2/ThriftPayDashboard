import React, { useEffect, useState } from "react";
import UserSubTab from "../../components/Customers/Usertab";
import UserListView from "../../components/Customers/UserListView";
import UserListHeader from "../../components/Customers/UserListHeader";
import styles from "./usercontent.module.css";
import { useLoaderData } from "react-router-dom";
import { Convert, UserData } from "../../services/userServices";

const UserContentList = () => {
  const loaderData = useLoaderData();

  const [users, setUsers] = useState<UserData | undefined>(undefined);
  useEffect(() => {
    const stringJson = JSON.stringify(loaderData, null, 4);
    const responseData = Convert.toUserResponse(stringJson);
    if (responseData.success) {
      setUsers(responseData.data);

      // setStatus(Boolean(progress == 100));
    } else {
      // setEmpty(true);
    }
  }, []);

  return (
    <div className={styles.content}>
      <UserSubTab />
      <UserListHeader />
      <div className={styles.contentList}>
        {users?.user.map((results) => (
          <UserListView user={results} />
        ))}
      </div>
    </div>
  );
};

export default UserContentList;
