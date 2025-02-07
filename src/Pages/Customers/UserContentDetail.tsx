import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
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
import NextKinKYCModel from "../../components/modal/NextKinKYCModel";
import { UserStateProvider } from "./UserStateProvider";
// import { UserStateProvider } from "./UserContentList";

// export type ContextType = { data: User | null };

// Define a custom hook to use the context

const UserContentDetail = () => {
  let navigate: NavigateFunction = useNavigate();

  const { state } = useLocation();
  const result = state ? state.data : null;

  console.log(result);

  const [wallet, setWallet] = useState(false);
  const [kyc, setKYC] = useState(false);
  const [plan, setPlan] = useState(true);
  const [transaction, setTransaction] = useState(false);

  const [open, setOpen] = useState(false);

  const closeModalHander = () => {
    setOpen(false);
  };
  const openModalHander = () => {
    setOpen(true);
  };

  // type ContextType = { user: User | null };

  //Define a context to pass data to components within the Outlet
  // const OutletDataContext = React.createContext(null);

  // Use OutletDataContext.Provider to wrap the components within Outlet
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
    navigate("/users/info/detail/wallet", { state: { data: result } });
  };
  const handelKYC = () => {
    setWallet(false);
    setKYC(true);
    setPlan(false);
    setTransaction(false);
    navigate("/users/info/detail/kyc", { state: { data: result } });
  };

  const handelTransaction = () => {
    setWallet(false);
    setKYC(false);
    setPlan(false);
    setTransaction(true);
    navigate("/users/info/detail/transactions", { state: { data: result } });
  };

  const handelPlanView = () => {
    setWallet(false);
    setKYC(false);
    setPlan(true);
    setTransaction(false);
    navigate("/users/info/detail/plan", { state: { data: result } });
  };

  return (
    <UserStateProvider>
      <>
        <div className={styles.frameParent}>
          <UserDLeftSide user={result} />
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
              <div
                onClick={handelKYC}
                className={kyc ? styles.tab : styles.tab1}
              >
                <div className={styles.tabLabelWrapper}>
                  <div className={kyc ? styles.tabLabel : styles.tabLabel1}>
                    KYC
                  </div>
                </div>
                <div className={kyc ? styles.tabChild : styles.tabItem} />
              </div>
              <div
                className={transaction ? styles.tab : styles.tab1}
                onClick={handelTransaction}
              >
                <div className={styles.tabLabelWrapper}>
                  <div
                    className={transaction ? styles.tabLabel : styles.tabLabel1}
                  >
                    Transactions
                  </div>
                </div>
                <div
                  className={transaction ? styles.tabChild : styles.tabItem}
                />
              </div>
            </div>
            {/* <UserStateProvider> */}
            {/* <Outlet context={{ data } as ContextType} /> */}

            <Outlet />

            {/* <NextKinKYCModel /> */}
            {/* </UserStateProvider> */}

            {/* <Outlet context={{ data } satisfies ContextType} /> */}
          </div>

          {/* {open && (
        <>
          <NextKinKYCModel
            open={open}
            close={closeModalHander}
            kyc=""
            result={result}
          />
        </>
      )} */}
        </div>
      </>
    </UserStateProvider>
  );
};

export default UserContentDetail;

// export function useUser() {
//   return useOutletContext<ContextType>();
// }
// export type ContextType = { data: User | null };
