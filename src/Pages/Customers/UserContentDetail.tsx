import React, { useState } from "react";
import UserDLeftSide from "../../components/Customers/UserDLeftSide";
import UserDRightSide from "../../components/Customers/UserDRightSide";
import styles from "./usercontentdetails.module.css";

import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";

const UserContentDetail = () => {
  let navigate: NavigateFunction = useNavigate();
  const [wallet, setWallet] = useState(false);
  const [kyc, setKYC] = useState(false);
  const [plan, setPlan] = useState(true);
  const [transaction, setTransaction] = useState(false);

  const handelWalletView = () => {
    setWallet(true);
    setKYC(false);
    setPlan(false);
    setTransaction(false);
    navigate("/users/detail/wallet");
  };
  const handelKYC = () => {
    setWallet(false);
    setKYC(true);
    setPlan(false);
    setTransaction(false);
    navigate("/users/detail/kyc");
  };

  const handelTransaction = () => {
    setWallet(true);
    setKYC(false);
    setPlan(false);
    setTransaction(false);
    navigate("users/detail/transactions");
  };

  const handelPlanView = () => {
    setWallet(false);
    setKYC(false);
    setPlan(true);
    setTransaction(false);
    navigate("/users/detail/plan");
  };

  return (
    <div className={styles.frameParent}>
      <UserDLeftSide />
      <div className={styles.tabsParent}>
        <div className={styles.tabs}>
          <div
            onClick={handelPlanView}
            className={plan ? styles.tab : styles.tab1}
          >
            <div className={styles.tabLabelWrapper}>
              <div className={plan ? styles.tabLabel : styles.tabLabel1}>
                Thrift Plans
              </div>
            </div>
            <div className={plan ? styles.tabChild : styles.tabItem} />
          </div>
          <div
            onClick={handelWalletView}
            className={wallet ? styles.tab : styles.tab1}
          >
            <div className={styles.tabLabelWrapper}>
              <div className={wallet ? styles.tabLabel : styles.tabLabel1}>
                Wallet
              </div>
            </div>
            <div className={wallet ? styles.tabChild : styles.tabItem} />
          </div>
          <div onClick={handelKYC} className={kyc ? styles.tab : styles.tab1}>
            <div className={styles.tabLabelWrapper}>
              <div className={kyc ? styles.tabLabel : styles.tabLabel1}>
                KYC
              </div>
            </div>
            <div className={kyc ? styles.tabChild : styles.tabItem} />
          </div>
          <div className={styles.tab1}>
            <div className={styles.tabLabelWrapper}>
              <div className={styles.tabLabel1}>Transactions</div>
            </div>
            <div className={styles.tabItem} />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserContentDetail;
