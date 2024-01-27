import React, { ReactNode, useEffect, useState } from "react";
import UserDLeftSide from "../../components/Customers/UserDLeftSide";
import UserDRightSide from "../../components/Customers/UserDRightSide";
import styles from "./usercontentdetails.module.css";

import {
  NavigateFunction,
  Outlet,
  useLocation,
  useNavigate,
  useOutlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { any, string } from "zod";
import { User } from "../../services/userServices";

type ContextType = { data: User | null };

const UserContentDetail = () => {
  let navigate: NavigateFunction = useNavigate();

  const { state } = useLocation();
  const data = state ? state.data : null;
  // console.log(data);
  const [wallet, setWallet] = useState(false);
  const [kyc, setKYC] = useState(false);
  const [plan, setPlan] = useState(true);
  const [transaction, setTransaction] = useState(false);
  // type ContextType = { user: User | null };

  // Define a context to pass data to components within the Outlet
  // const OutletDataContext = React.createContext(null);

  // // Use OutletDataContext.Provider to wrap the components within Outlet
  // const OutletWithProps = ({ children }) => {
  //   const outlet = useOutlet();
  //   return (
  //     <OutletDataContext.Provider value={{ data }}>
  //       {outlet}
  //       {children}
  //     </OutletDataContext.Provider>
  //   );
  // };

  const handelWalletView = () => {
    setWallet(true);
    setKYC(false);
    setPlan(false);
    setTransaction(false);
    navigate("/users/info/detail/wallet");
  };
  const handelKYC = () => {
    setWallet(false);
    setKYC(true);
    setPlan(false);
    setTransaction(false);
    navigate("/users/info/detail/kyc");
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
    navigate("/users/info/detail/plan");
  };

  return (
    <div className={styles.frameParent}>
      <UserDLeftSide user={data} />
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

        <Outlet context={{ data } satisfies ContextType} />
      </div>
    </div>
  );
};

export default UserContentDetail;

export function useUser() {
  return useOutletContext<ContextType>();
}
