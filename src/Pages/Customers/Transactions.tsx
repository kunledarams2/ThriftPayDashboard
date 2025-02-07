import { FunctionComponent } from "react";
import styles from "./transactions.module.css";

const Transactions: FunctionComponent = () => {
  return (
    <>
      <div className={styles.pillParent}>
        <div className={styles.pill}>
          <div className={styles.buttonLabel}>Thrift Plans</div>
        </div>
        <div className={styles.pill1}>
          <div className={styles.buttonLabel1}>Wallet</div>
        </div>
      </div>
      <div className={styles.transactionsParent}>
        <div className={styles.transactions}>Transactions</div>

        <div className={styles.searchFieldGroup}>
          <div className={styles.searchField1} />
          <div className={styles.button2}>
            <img className={styles.icons1} alt="" src="Icons.svg" />
            <div className={styles.buttonLabel}>Filters</div>
          </div>
        </div>
        <div className={styles.button4}>
          <img className={styles.icons1} alt="" src="Icons.svg" />
          <div className={styles.buttonLabel}>Export</div>
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

      <div className={styles.showing1190f120ResultsParent}>
        <div
          className={styles.showing1}
        >{`Showing 1 - 19 0f 120 Results `}</div>
        <div className={styles.pagnition}>
          <div className={styles.pagination}>
            <div className={styles.paginationMasterPageLab}>
              <div className={styles.paginationMasterPageLab1}>
                <div className={styles.content}>
                  <img
                    className={styles.arrowLeftIcon}
                    alt=""
                    src="arrow-left.svg"
                  />
                  <div className={styles.pageLabel}>Previous</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.pagination1}>
            <div className={styles.paginationMasterPageNum}>
              <div className={styles.paginationMasterPageNum1}>
                <div className={styles.pageNumber}>1</div>
              </div>
            </div>
          </div>
          <div className={styles.paginationMasterPageNum}>
            <div className={styles.paginationMasterPageNum}>
              <div className={styles.paginationMasterPageNum3}>
                <div className={styles.pageNumber}>2</div>
              </div>
            </div>
          </div>
          <div className={styles.paginationMasterPageNum}>
            <div className={styles.paginationMasterPageNum}>
              <div className={styles.paginationMasterPageNum3}>
                <div className={styles.pageNumber}>3</div>
              </div>
            </div>
          </div>
          <div className={styles.pagination4}>
            <div className={styles.paginationMasterPageNum}>
              <div className={styles.paginationMasterPageNum3}>
                <div className={styles.pageNumber3}>...</div>
              </div>
            </div>
          </div>
          <div className={styles.paginationMasterPageNum}>
            <div className={styles.paginationMasterPageNum}>
              <div className={styles.paginationMasterPageNum3}>
                <div className={styles.pageNumber}>10</div>
              </div>
            </div>
          </div>
          <div className={styles.pagination6}>
            <div className={styles.paginationMasterPageLab}>
              <div className={styles.paginationMasterPageLab1}>
                <div className={styles.content}>
                  <div className={styles.pageLabel}>Next</div>
                  <img
                    className={styles.arrowLeftIcon}
                    alt=""
                    src="arrow-right.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
