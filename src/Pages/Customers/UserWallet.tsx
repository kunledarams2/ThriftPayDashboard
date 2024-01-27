import React from "react";
import styles from "./userwallet.module.css";
import { useLocation } from "react-router-dom";
import { useUser } from "../Customers/UserContentDetail";
const UserWallet = () => {
  // const { state } = useLocation();
  // const { data } = state;
  console.log("user", useUser);
  const { state } = useLocation();
  const data = state ? state.data : null;
  return (
    <>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.availableWalletBalanceParent}>
            <div className={styles.availableWalletBalance1}>
              Available Wallet Balance
            </div>
            <div className={styles.icons1} />
          </div>
          <div className={styles.div}>₦200,000.00</div>
        </div>
        <div className={styles.wemaBank37837836383Wrapper}>
          <div className={styles.wemaBank37837836383}>
            WEMA BANK: 37837836383
          </div>
        </div>
      </div>

      <div className={styles.recentTransactionsParent}>
        <div className={styles.recentTransactions}>Recent Transactions</div>

        <div className={styles.button2}>
          <div className={styles.buttonLabel}>See All</div>
        </div>
      </div>

      <div className={styles.heading}>
        <div className={styles.headerCell1}>
          <div className={styles.user}>Transaction ID</div>
        </div>
        <div className={styles.headerCell2}>
          <div className={styles.user}>Transaction type</div>
        </div>
        <div className={styles.headerCell2}>
          <div className={styles.user}>{`Date & Time`}</div>
        </div>
        <div className={styles.headerCell2}>
          <div className={styles.user}>Status</div>
        </div>
        <div className={styles.headerCell5}>
          <div className={styles.user}>Reference Number</div>
        </div>
        <div className={styles.headerCell6}>
          <div className={styles.user}>Amount</div>
        </div>
        <div className={styles.headingChild} />
      </div>

      <div className={styles.thriftplanCard}>
        <div className={styles.tableCell1} />
        <div className={styles.tableCell2}>
          <div className={styles.deposit}>TXN12345</div>
        </div>
        <div className={styles.tableCell3}>
          <div className={styles.deposit}>Deposit</div>
        </div>
        <div className={styles.tableCell3}>
          <div className={styles.deposit}>15/09/2023, 14:30</div>
        </div>
        <div className={styles.tableCell5}>
          <div className={styles.bagde}>
            <div className={styles.completed}>Completed</div>
          </div>
        </div>
        <div className={styles.tableCell6}>
          <div className={styles.deposit}>TXN12345</div>
        </div>
        <div className={styles.tableCell7}>
          <div className={styles.n20000}>N20,000</div>
        </div>
      </div>
    </>
  );
};

export default UserWallet;
