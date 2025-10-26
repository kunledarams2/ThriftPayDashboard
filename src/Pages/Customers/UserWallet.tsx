import React, { useContext, useEffect, useState } from "react";
import styles from "./userwallet.module.css";
import { useLocation } from "react-router-dom";
// import { UserContext, useUser } from "../Customers/UserContentDetail";
import {
  ConvertUserWallet,
  UserWalletData,
  fetchWalletInfo,
} from "../../services/userServices";
import EmptyContainer from "../../components/utils/EmptyContainer";
import NoContentSVG from "../../assets/no_content_backup.svg";
import moment from "moment";

const UserWallet: React.FC = () => {
  // const { state } = useLocation();
  // const { data } = state;
  // console.log("user", useUser);
  const { state } = useLocation();
  const data = state ? state.data : null;

  // const { data } = useContext<ContextType>(useUser());
  // const { data } = useContext<ContextType>(UserContext);

  // const { result } = useUser();
  // console.log(result?.first_name);

  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [userWallet, setWallet] = useState<UserWalletData | undefined>(
    undefined
  );

  useEffect(() => {
    setLoading(true);
    fetchWalletInfo(data.id).then(
      (data) => {
        const stringJson = JSON.stringify(data, null, 4);
        const responseData = ConvertUserWallet.toUserWallet(stringJson);
        if (responseData.success) {
          setEmpty(false);
          setWallet(responseData.data);
        } else {
          setEmpty(true);
        }
        setLoading(false);
      },
      (error) => {
        setLoading(false);
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        // setContent(_content);
      }
    );
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div
            className="spinner"
            style={{ margin: "300px 500px 500px 500px" }}
          ></div>
        </div>
      ) : (
        <>
          {empty ? (
            <EmptyContainer
              title={"No Data Yet"}
              body={""}
              imagePath={NoContentSVG}
            />
          ) : (
            <>
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <div className={styles.availableWalletBalanceParent}>
                    <div className={styles.availableWalletBalance1}>
                      Available Wallet Balance
                    </div>
                    <div className={styles.icons1} />
                  </div>
                  <div className={styles.div}>
                    {" "}
                    {userWallet?.wallet != null
                      ? (userWallet?.wallet.balance / 100).toLocaleString(
                          "en-NG",
                          {
                            style: "currency",
                            currency: userWallet?.wallet.currency,
                          }
                        )
                      : 0}
                  </div>
                </div>
                <div className={styles.wemaBank37837836383Wrapper}>
                  <div className={styles.wemaBank37837836383}>
                    {userWallet?.wallet.bank_name}:{" "}
                    {userWallet?.wallet.account_number}
                  </div>
                </div>
              </div>

              <div className={styles.recentTransactionsParent}>
                <div className={styles.recentTransactions}>
                  Recent Transactions
                </div>

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
              {userWallet?.wallet_transaction != null ? (
                <>
                  {userWallet?.wallet_transaction.slice(0, 5).map((result) => (
                    <div className={styles.thriftplanCard}>
                      {/* <div className={styles.tableCell1} /> */}
                      <div className={styles.tableCell2}>
                        <div className={styles.deposit}>{result.source}</div>
                      </div>
                      <div className={styles.tableCell3}>
                        <div className={styles.deposit}>
                          {result.transaction_type == "payin"
                            ? "Payin"
                            : "Payout"}
                        </div>
                      </div>
                      <div className={styles.tableCell3}>
                        <div className={styles.deposit}>
                          {" "}
                          {moment(result.created_at).format("YYYY-MM-DD")},
                          14:30
                        </div>
                      </div>
                      <div className={styles.tableCell5}>
                        <div className={styles.bagde}>
                          <div className={styles.completed}>
                            {result.status == "successful"
                              ? "Completed"
                              : result.status}
                            {/* {result.status} */}
                          </div>
                        </div>
                      </div>
                      <div className={styles.tableCell6}>
                        <div className={styles.deposit}>{result.reference}</div>
                      </div>
                      <div className={styles.tableCell7}>
                        <div className={styles.n20000}>
                          {(result.amount / 100).toLocaleString("en-NG", {
                            style: "currency",
                            currency: userWallet?.wallet.currency,
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <EmptyContainer
                  title={"No Data Yet"}
                  body={""}
                  imagePath={NoContentSVG}
                />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default UserWallet;
