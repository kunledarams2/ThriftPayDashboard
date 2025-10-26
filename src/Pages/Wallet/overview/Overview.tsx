import styles from "./overview.module.css";
import { Link } from "react-router-dom";
import DoughnutOverview from "../../../components/fullDoughnutChart/DoughnutOverview";
import Card from "../../../components/dashboardCard/Card";
import activeUsers from "../../../assets/dashboard/activeUsers.png";
import completed from "../../../assets/wallet/completed.png";
import failed from "../../../assets/wallet/failed.png";
import pending from "../../../assets/wallet/pending.png";
import thrift from "../../../assets/wallet/thrift.png"; //duplicate png

import Status from "../../../components/status/Status";
import Flow from "../../../components/flow/Flow";
import Pnl from "../../../components/profit-n-loss/Pnl";
import inflow from "../../../assets/dashboard/inflow.png";
import outflow from "../../../assets/dashboard/outflow.png";
import LineChart from "../../../components/Charts/LineChart";
import Select from "../../../components/select/Select";
import Transactionlist from "../../../components/transactions/Transactionlist";
import { dummyTnxs } from "../../../utils/dummyData";
import { useEffect } from "react";

import { FunctionComponent } from "react";
// import styles from "./Content.module.css";

const Content: FunctionComponent = () => {
  return (
    <div className={styles.content}>
      <div className={styles.overview}>
        <div className={styles.overviewParent}>
          <div className={styles.overview}>
            <div className={styles.totalThriftPlans}>
              <div className={styles.frameParent}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon}>
                    <img className={styles.icons} alt="" src="Icons.svg" />
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.totalCompletedTransactionsParent}>
                    <div className={styles.totalCompletedTransactions}>
                      Total Completed Transactions
                    </div>
                    <div className={styles.div}>300</div>
                  </div>
                  <div className={styles.change}>
                    <div className={styles.change1}>
                      <img className={styles.icons1} alt="" src="Icons.svg" />
                      <div className={styles.div1}>-2.5%</div>
                    </div>
                    <div className={styles.last7Days}>Last 7 Days</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.activethriftPlans}>
              <div className={styles.frameContainer}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon1}>
                    <img className={styles.icons2} alt="" src="Icons.svg" />
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.totalPendingParent}>
                    <div className={styles.totalCompletedTransactions}>
                      Total Pending
                    </div>
                    <div className={styles.div}>34</div>
                  </div>
                  <div className={styles.change}>
                    <div className={styles.change3}>
                      <img className={styles.icons1} alt="" src="Icons.svg" />
                      <div className={styles.div1}>+2.5%</div>
                    </div>
                    <div className={styles.last7Days}>Last 7 Days</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.totalThriftPlans}>
              <div className={styles.frameParent}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon}>
                    <img className={styles.icons} alt="" src="Icons.svg" />
                  </div>
                </div>
                <div className={styles.totalPendingTransactionsParent}>
                  <div className={styles.totalCompletedTransactions}>
                    Total Pending Transactions
                  </div>
                  <div className={styles.div}>45</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.overview}>
            <div className={styles.totalThriftPlans}>
              <div className={styles.frameParent}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon}>
                    <img className={styles.icons} alt="" src="Icons.svg" />
                  </div>
                </div>
                <div className={styles.totalPendingTransactionsParent}>
                  <div className={styles.totalCompletedTransactions}>
                    Total Failed Transactions
                  </div>
                  <div className={styles.div}>45</div>
                </div>
              </div>
            </div>
            <div className={styles.totalThriftPlans}>
              <div className={styles.frameParent}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon}>
                    <img className={styles.icons} alt="" src="Icons.svg" />
                  </div>
                </div>
                <div className={styles.totalUsersInner}>
                  <div className={styles.totalCompletedTransactionsParent}>
                    <div className={styles.totalCompletedTransactions}>
                      Total Thrift Transactions
                    </div>
                    <div className={styles.div}>300</div>
                  </div>
                  <div className={styles.change}>
                    <div className={styles.change1}>
                      <img className={styles.icons1} alt="" src="Icons.svg" />
                      <div className={styles.div1}>-2.5%</div>
                    </div>
                    <div className={styles.last7Days}>Last 7 Days</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.activethriftPlans}>
              <div className={styles.frameContainer}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon1}>
                    <img className={styles.icons2} alt="" src="Icons.svg" />
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.totalPendingParent}>
                    <div className={styles.totalCompletedTransactions}>
                      Total Pending
                    </div>
                    <div className={styles.div}>34</div>
                  </div>
                  <div className={styles.change}>
                    <div className={styles.change3}>
                      <img className={styles.icons1} alt="" src="Icons.svg" />
                      <div className={styles.div1}>+2.5%</div>
                    </div>
                    <div className={styles.last7Days}>Last 7 Days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.totalUsersParent}>
            <div className={styles.totalUsers}>
              <div className={styles.iconWrapper}>
                <div className={styles.icon6}>
                  <img className={styles.icons} alt="" src="Icons.svg" />
                </div>
              </div>
              <div className={styles.totalUsersInner}>
                <div className={styles.totalCompletedTransactionsGroup}>
                  <div className={styles.totalCompletedTransactions}>
                    Total Completed Transactions
                  </div>
                  <div className={styles.div10}>250</div>
                </div>
              </div>
            </div>
            <div className={styles.totalUsers}>
              <div className={styles.iconWrapper}>
                <div className={styles.icon7}>
                  <img className={styles.icons} alt="" src="Icons.svg" />
                </div>
              </div>
              <div className={styles.totalUsersInner}>
                <div className={styles.totalCompletedTransactionsGroup}>
                  <div className={styles.totalCompletedTransactions}>
                    Total Failed Transactions
                  </div>
                  <div className={styles.div10}>20</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.user}>
          <div className={styles.userInner}>
            <div className={styles.frameParent7}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <div className={styles.frameItem} />
                <div className={styles.frameInner} />
                <div className={styles.titleParent}>
                  <div className={styles.title}>Total Transactions</div>
                  <div className={styles.value}>1234</div>
                </div>
              </div>
              <div className={styles.frameParent8}>
                <div className={styles.frameParent9}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.input}>Deposit</div>
                  </div>
                  <div className={styles.value1}>12%</div>
                </div>
                <div className={styles.frameParent9}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild1} />
                    <div className={styles.input}>Withdrawals</div>
                  </div>
                  <div className={styles.value1}>4%</div>
                </div>
                <div className={styles.frameParent9}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild2} />
                    <div className={styles.input}>Thrift Plans</div>
                  </div>
                  <div className={styles.value1}>4%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.backParent}>
        <div className={styles.back}>
          <img className={styles.icons12} alt="" src="Icons.svg" />
        </div>
        <div className={styles.breadcrumb}>
          <div className={styles.breadcrumbStyleActive}>
            <div className={styles.breadcrumbStyleActive}>
              <div className={styles.breadcrumbMaster}>
                <div className={styles.iconWrapper}>
                  <div className={styles.breadcrumbStyleActive}>
                    <div className={styles.label}>Thrift Plans</div>
                  </div>
                  <div className={styles.seperator}>/</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.breadcrumb2}>
            <div className={styles.breadcrumbStyleActive}>
              <div className={styles.breadcrumbMaster}>
                <div className={styles.iconWrapper}>
                  <div className={styles.breadcrumbStyleActive}>
                    <div className={styles.label}>Basic Thrift Plan I</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.totalWalletBalance}>
        <div className={styles.frameParent12}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent13}>
              <div className={styles.headingParent}>
                <div className={styles.heading}>Total Wallet Balance</div>
                <div className={styles.heading1}>N12,340</div>
              </div>
              <div className={styles.change8}>
                <img className={styles.icons1} alt="" src="Icons.svg" />
                <div className={styles.div1}>+2.5%</div>
              </div>
            </div>
          </div>
          <div className={styles.tipParent}>
            <div className={styles.tip}>
              <div className={styles.tipChild} />
              <div className={styles.inflow}>Inflow</div>
            </div>
            <div className={styles.tip1}>
              <div className={styles.tipItem} />
              <div className={styles.outflow}>Outflow</div>
            </div>
          </div>
          <div className={styles.inputtext}>
            <div className={styles.field}>
              <div className={styles.input}>Past 7 days</div>
              <img className={styles.icons2} alt="" src="Icons.svg" />
            </div>
          </div>
        </div>
        <div className={styles.inflowoutflow}>
          <div className={styles.inflowoutflowInner}>
            <div className={styles.frameParent14}>
              <div className={styles.iconsWrapper}>
                <img className={styles.icons2} alt="" src="Icons.svg" />
              </div>
              <div className={styles.totalInflowParent}>
                <div
                  className={styles.totalCompletedTransactions}
                >{`Total Inflow `}</div>
                <div className={styles.n12340}>N12,340</div>
              </div>
              <div className={styles.change9}>
                <div className={styles.change1}>
                  <img className={styles.icons1} alt="" src="Icons.svg" />
                  <div className={styles.div13}>+2.5%</div>
                </div>
                <div className={styles.last7Days4}>Last 7 Days</div>
              </div>
            </div>
          </div>
          <div className={styles.inflowoutflowInner}>
            <div className={styles.frameParent14}>
              <div className={styles.iconsContainer}>
                <img className={styles.icons17} alt="" src="Icons.svg" />
              </div>
              <div className={styles.totalInflowParent}>
                <div className={styles.totalCompletedTransactions}>
                  Total Outflow
                </div>
                <div className={styles.n12340}>N12,340</div>
              </div>
              <div className={styles.change11}>
                <div className={styles.change1}>
                  <img className={styles.icons1} alt="" src="Icons.svg" />
                  <div className={styles.div13}>+2.5%</div>
                </div>
                <div className={styles.last7Days4}>Last 7 Days</div>
              </div>
            </div>
          </div>
          <div className={styles.inflowoutflowInner}>
            <div className={styles.frameParent14}>
              <div className={styles.iconsContainer}>
                <img className={styles.icons17} alt="" src="Icons.svg" />
              </div>
              <div className={styles.totalInflowParent}>
                <div className={styles.totalCompletedTransactions}>
                  Total Charges
                </div>
                <div className={styles.n12340}>N12,340</div>
              </div>
              <div className={styles.change11}>
                <div className={styles.change1}>
                  <img className={styles.icons1} alt="" src="Icons.svg" />
                  <div className={styles.div13}>+2.5%</div>
                </div>
                <div className={styles.last7Days4}>Last 7 Days</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.graph}>
          <div className={styles.horizontalLines}>
            <div className={styles.vertical}>
              <div className={styles.div16}>400</div>
              <div className={styles.verticalChild} />
            </div>
            <div className={styles.vertical}>
              <div className={styles.div16}>350</div>
              <div className={styles.verticalChild} />
            </div>
            <div className={styles.vertical2}>
              <div className={styles.label}>700k</div>
              <div className={styles.verticalChild} />
            </div>
            <div className={styles.vertical2}>
              <div className={styles.label}>600k</div>
              <div className={styles.verticalChild} />
            </div>
            <div className={styles.vertical2}>
              <div className={styles.label}>500k</div>
              <div className={styles.verticalChild} />
            </div>
            <div className={styles.vertical5}>
              <div className={styles.label}>400k</div>
              <div className={styles.verticalChild} />
            </div>
            <div className={styles.vertical5}>
              <div className={styles.label}>300k</div>
              <div className={styles.verticalChild} />
            </div>
            <div className={styles.vertical5}>
              <div className={styles.label}>200k</div>
              <div className={styles.verticalChild} />
            </div>
            <div className={styles.vertical5}>
              <div className={styles.div18}> 0</div>
              <div className={styles.verticalChild} />
            </div>
            <div className={styles.vertical9}>
              <div className={styles.am}>2 am</div>
              <div className={styles.verticalChild} />
            </div>
          </div>
          <div className={styles.verticalLines}>
            <div className={styles.verticalLinesInner}>
              <div className={styles.frameChild3} />
            </div>
            <div className={styles.verticalLinesInner}>
              <div className={styles.frameChild3} />
            </div>
            <div className={styles.verticalLinesInner}>
              <div className={styles.frameChild3} />
            </div>
            <div className={styles.verticalLinesInner}>
              <div className={styles.frameChild3} />
            </div>
            <div className={styles.verticalLinesInner}>
              <div className={styles.frameChild3} />
            </div>
            <div className={styles.verticalLinesInner}>
              <div className={styles.frameChild3} />
            </div>
            <div className={styles.verticalLinesInner}>
              <div className={styles.frameChild3} />
            </div>
            <div className={styles.verticalLinesInner}>
              <div className={styles.frameChild3} />
            </div>
            <div className={styles.verticalLinesInner}>
              <div className={styles.frameChild3} />
            </div>
            <div className={styles.verticalLinesInner}>
              <div className={styles.frameChild3} />
            </div>
            <div className={styles.verticalLinesInner}>
              <div className={styles.frameChild3} />
            </div>
            <div className={styles.verticalLinesInner}>
              <div className={styles.frameChild3} />
            </div>
          </div>
          <img className={styles.lineGraphIcon} alt="" src="Line Graph.png" />
          <div className={styles.monParent}>
            <div className={styles.label}>Mon</div>
            <div className={styles.label}>Tue</div>
            <div className={styles.label}>Wed</div>
            <div className={styles.label}>Thu</div>
            <div className={styles.label}>Fri</div>
            <div className={styles.label}>Sat</div>
            <div className={styles.label}>Sun</div>
            <div className={styles.aug}>Aug</div>
            <div className={styles.aug}>Sep</div>
            <div className={styles.aug}>Oct</div>
            <div className={styles.aug}>Nov</div>
            <div className={styles.aug}>Dec</div>
          </div>
        </div>
        <div className={styles.inflowoutflow1}>
          <div className={styles.tipGroup}>
            <div className={styles.tip2}>
              <div className={styles.tipInner} />
              <div className={styles.inflow}>Inflow</div>
            </div>
            <div className={styles.n123403}>N12,340</div>
            <div className={styles.change15}>
              <div className={styles.change1}>
                <img className={styles.icons1} alt="" src="Icons.svg" />
                <div className={styles.div13}>+2.5%</div>
              </div>
              <div className={styles.last7Days4}>Last 7 Days</div>
            </div>
          </div>
          <div className={styles.tipGroup}>
            <div className={styles.tip3}>
              <div className={styles.tipChild1} />
              <div className={styles.outflow}>Outflow</div>
            </div>
            <div className={styles.n123403}>N12,340</div>
            <div className={styles.change11}>
              <div className={styles.change1}>
                <img className={styles.icons1} alt="" src="Icons.svg" />
                <div className={styles.div13}>+2.5%</div>
              </div>
              <div className={styles.last7Days4}>Last 7 Days</div>
            </div>
          </div>
          <div className={styles.button} />
        </div>
      </div>
      <div className={styles.planSummaryParent}>
        <div className={styles.planSummary}>Plan Summary</div>
        <div className={styles.overview3}>
          <div className={styles.totalThriftPlansParent}>
            <div className={styles.totalThriftPlans5}>
              <div className={styles.frameParent}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon8}>
                    <img className={styles.icons2} alt="" src="Icons.svg" />
                  </div>
                </div>
                <div className={styles.totalUsersInner}>
                  <div className={styles.totalPendingParent}>
                    <div className={styles.totalCompletedTransactions}>
                      Total Wallet Balance
                    </div>
                    <div className={styles.div}>₦260,000</div>
                  </div>
                  <div className={styles.change}>
                    <div className={styles.change1}>
                      <img className={styles.icons1} alt="" src="Icons.svg" />
                      <div className={styles.div1}>-2.5%</div>
                    </div>
                    <div className={styles.last7Days}>Last 7 Days</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.activethriftPlans2}>
              <div className={styles.frameParent19}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon9}>
                    <img className={styles.icons2} alt="" src="Icons.svg" />
                  </div>
                </div>
                <div className={styles.totalUsersInner}>
                  <div className={styles.totalPendingParent}>
                    <div className={styles.totalCompletedTransactions}>
                      Total Inflow
                    </div>
                    <div className={styles.div}>₦200,000</div>
                  </div>
                  <div className={styles.change}>
                    <div className={styles.change3}>
                      <img className={styles.icons1} alt="" src="Icons.svg" />
                      <div className={styles.div1}>+2.5%</div>
                    </div>
                    <div className={styles.last7Days}>Last 7 Days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.totalThriftPlansParent}>
            <div className={styles.totalThriftPlans5}>
              <div className={styles.frameParent}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon10}>
                    <img className={styles.icons2} alt="" src="Icons.svg" />
                  </div>
                </div>
                <div className={styles.totalOutflowGroup}>
                  <div className={styles.totalCompletedTransactions}>
                    Total Outflow
                  </div>
                  <div className={styles.div}>₦0</div>
                </div>
              </div>
            </div>
            <div className={styles.totalThriftPlans5}>
              <div className={styles.frameParent}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon1}>
                    <img className={styles.icons2} alt="" src="Icons.svg" />
                  </div>
                </div>
                <div className={styles.totalUsersInner}>
                  <div className={styles.totalPendingParent}>
                    <div className={styles.totalCompletedTransactions}>
                      Months Completed
                    </div>
                    <div className={styles.div}>3 of 5</div>
                  </div>
                  <div className={styles.change}>
                    <div className={styles.change1}>
                      <img className={styles.icons1} alt="" src="Icons.svg" />
                      <div className={styles.div1}>-2.5%</div>
                    </div>
                    <div className={styles.last7Days}>Last 7 Days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent24}>
        <div className={styles.recentTransactionsParent}>
          <div className={styles.recentTransactions}>Recent Transactions</div>
          <div className={styles.pillsParent}>
            <div className={styles.pills}>
              <div className={styles.pillParent}>
                <div className={styles.pill}>
                  <div className={styles.buttonLabel}>All</div>
                </div>
                <div className={styles.pill1}>
                  <div className={styles.buttonLabel1}>February</div>
                </div>
                <div className={styles.pill1}>
                  <div className={styles.buttonLabel1}>March</div>
                </div>
                <div className={styles.pill1}>
                  <div className={styles.buttonLabel1}>April</div>
                </div>
                <div className={styles.pill4} />
                <div className={styles.pill4} />
                <div className={styles.pill4} />
                <div className={styles.pill4} />
              </div>
              <div className={styles.pillsChild} />
              <img
                className={styles.iconschevronLeft}
                alt=""
                src="Icons/chevron-left.svg"
              />
              <div className={styles.arrow}>
                <div className={styles.arrowChild} />
                <img
                  className={styles.iconschevronRight}
                  alt=""
                  src="Icons/chevron-right.svg"
                />
              </div>
            </div>
            <div className={styles.searchFieldParent}>
              <div className={styles.searchField} />
              <div className={styles.button1}>
                <img className={styles.icons30} alt="" src="Icons.svg" />
                <div className={styles.transactionId}>Filters</div>
              </div>
            </div>
          </div>
          <div className={styles.button3}>
            <div className={styles.buttonLabel}>See All</div>
          </div>
        </div>
        <div className={styles.headingGroup}>
          <div className={styles.heading2}>
            <div className={styles.headerCell}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxChild} />
              </div>
              <div className={styles.transactionId}>User</div>
            </div>
            <div className={styles.headerCell1}>
              <div className={styles.transactionId}>Transaction ID</div>
            </div>
            <div className={styles.headerCell2}>
              <div className={styles.transactionId}>Transaction type</div>
            </div>
            <div className={styles.headerCell2}>
              <div className={styles.transactionId}>{`Date & Time`}</div>
            </div>
            <div className={styles.headerCell2}>
              <div className={styles.transactionId}>Status</div>
            </div>
            <div className={styles.headerCell1}>
              <div className={styles.transactionId}>Reference Number</div>
            </div>
            <div className={styles.headerCell6}>
              <div className={styles.transactionId}>Amount</div>
            </div>
            <div className={styles.headingChild} />
          </div>
          <div className={styles.thriftplanCard}>
            <div className={styles.tableCell}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxChild} />
              </div>
              <div className={styles.textAndSupportingText}>
                <div className={styles.text}>Orlando Diggs</div>
                <div className={styles.supportingText}>orlando@Example.com</div>
              </div>
            </div>
            <div className={styles.tableCell1}>
              <div className={styles.label}>TXN12345</div>
            </div>
            <div className={styles.tableCell2}>
              <div className={styles.label}>Deposit</div>
            </div>
            <div className={styles.tableCell2}>
              <div className={styles.label}>15/09/2023, 14:30</div>
            </div>
            <div className={styles.tableCell4}>
              <div className={styles.bagde}>
                <div className={styles.completed}>Completed</div>
              </div>
            </div>
            <div className={styles.tableCell1}>
              <div className={styles.label}>TXN12345</div>
            </div>
            <div className={styles.tableCell6}>
              <div className={styles.transactionId}>N20,000</div>
            </div>
          </div>
          <div className={styles.thriftplanCard}>
            <div className={styles.tableCell}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxChild} />
              </div>
              <div className={styles.textAndSupportingText}>
                <div className={styles.text}>Orlando Diggs</div>
                <div className={styles.supportingText}>orlando@Example.com</div>
              </div>
            </div>
            <div className={styles.tableCell1}>
              <div className={styles.label}>TXN12345</div>
            </div>
            <div className={styles.tableCell2}>
              <div className={styles.label}>Withdrawal</div>
            </div>
            <div className={styles.tableCell2}>
              <div className={styles.label}>15/09/2023, 14:30</div>
            </div>
            <div className={styles.tableCell11}>
              <div className={styles.bagde1}>
                <div className={styles.completed}>Pending</div>
              </div>
            </div>
            <div className={styles.tableCell1}>
              <div className={styles.label}>TXN12345</div>
            </div>
            <div className={styles.tableCell6}>
              <div className={styles.transactionId}>N20,000</div>
            </div>
          </div>
          <div className={styles.thriftplanCard}>
            <div className={styles.tableCell}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxChild} />
              </div>
              <div className={styles.textAndSupportingText}>
                <div className={styles.text}>Orlando Diggs</div>
                <div className={styles.supportingText}>orlando@Example.com</div>
              </div>
            </div>
            <div className={styles.tableCell1}>
              <div className={styles.label}>TXN12345</div>
            </div>
            <div className={styles.tableCell2}>
              <div className={styles.label}>Thrift</div>
            </div>
            <div className={styles.tableCell2}>
              <div className={styles.label}>15/09/2023, 14:30</div>
            </div>
            <div className={styles.tableCell18}>
              <div className={styles.bagde2}>
                <div className={styles.completed}>fAILED</div>
              </div>
            </div>
            <div className={styles.tableCell1}>
              <div className={styles.label}>TXN12345</div>
            </div>
            <div className={styles.tableCell6}>
              <div className={styles.transactionId}>N20,000</div>
            </div>
          </div>
          <div className={styles.thriftplanCard}>
            <div className={styles.tableCell}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxChild} />
              </div>
              <div className={styles.textAndSupportingText}>
                <div className={styles.text}>Orlando Diggs</div>
                <div className={styles.supportingText}>orlando@Example.com</div>
              </div>
            </div>
            <div className={styles.tableCell1}>
              <div className={styles.label}>TXN12345</div>
            </div>
            <div className={styles.tableCell2}>
              <div className={styles.label}>Deposit</div>
            </div>
            <div className={styles.tableCell2}>
              <div className={styles.label}>15/09/2023, 14:30</div>
            </div>
            <div className={styles.tableCell4}>
              <div className={styles.bagde}>
                <div className={styles.completed}>Completed</div>
              </div>
            </div>
            <div className={styles.tableCell1}>
              <div className={styles.label}>TXN12345</div>
            </div>
            <div className={styles.tableCell6}>
              <div className={styles.transactionId}>N20,000</div>
            </div>
          </div>
          <div className={styles.thriftplanCard}>
            <div className={styles.tableCell}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxChild} />
              </div>
              <div className={styles.textAndSupportingText}>
                <div className={styles.text}>Orlando Diggs</div>
                <div className={styles.supportingText}>orlando@Example.com</div>
              </div>
            </div>
            <div className={styles.tableCell1}>
              <div className={styles.label}>TXN12345</div>
            </div>
            <div className={styles.tableCell2}>
              <div className={styles.label}>Withdrawal</div>
            </div>
            <div className={styles.tableCell2}>
              <div className={styles.label}>15/09/2023, 14:30</div>
            </div>
            <div className={styles.tableCell4}>
              <div className={styles.bagde}>
                <div className={styles.completed}>Completed</div>
              </div>
            </div>
            <div className={styles.tableCell1}>
              <div className={styles.label}>TXN12345</div>
            </div>
            <div className={styles.tableCell6}>
              <div className={styles.transactionId}>N20,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

// const Overview = () => {
//   useEffect(() => {
//     console.log("here");
//   }, []);

//   return (
//     <div className={classes.frameparent}>
//       <section className={classes.overview}>
//         <div>
//           <Card
//             icon={completed}
//             title="Total Completed Transactions"
//             amount={20}
//           />
//           <Card icon={pending} title="Total Pending Transactions" amount={20} />
//           <Card icon={failed} title="Total Failed Transactions" amount={20} />
//           <Card icon={thrift} title="Total Thrift Transactions" amount={20} />
//         </div>
//         <div className={classes.chart}>
//           <DoughnutOverview
//             options={[
//               { dataTitle: "Deposit", dataColor: "#111217", data: 12 },
//               { dataTitle: "Thrift Plans", dataColor: "#FFE999", data: 4 },
//               { dataTitle: "Withdrawals", dataColor: "#C6C7F8", data: 4 },
//             ]}
//             title="Total transactions"
//           ></DoughnutOverview>
//         </div>
//       </section>
//       <section className={classes.walletActivities}>
//         <aside className={classes.wallet}>
//           <div className={classes.walletHeader}>
//             <div>
//               <p>
//                 <span className={classes.balText}>Total Wallet Balance</span>
//                 <span className={classes.balance}>N{"12,340"}</span>
//               </p>
//               <Pnl badge={true} trend="up" pnl="+2.5" />
//             </div>
//             <div className={classes.statuses}>
//               <Status type="sm" boxColor="#111217">
//                 Inflow
//               </Status>
//               <Status type="sm" boxColor="#CC3366">
//                 Outflow
//               </Status>
//             </div>
//             <Select />
//           </div>
//           <div className={classes.flowContainer}>
//             <Flow
//               icon={inflow}
//               amount={"12"}
//               pnl={{ trend: "up", pnl: "+2.5" }}
//             >
//               Total Inflow
//             </Flow>
//             <Flow
//               icon={outflow}
//               amount={"12"}
//               pnl={{ trend: "down", pnl: "-2.5" }}
//             >
//               Total Outflow
//             </Flow>
//           </div>
//           <LineChart />
//         </aside>
//       </section>
//       <section className={classes.transactions}>
//         <div className={classes.transactionsHeader}>
//           <p>Recent Transactions</p>
//           <p>
//             {" "}
//             <Link to={"../transactions"}> See All </Link>
//           </p>
//         </div>
//         <Transactionlist transactions={dummyTnxs} />
//       </section>
//     </div>
//   );
// };

// export default Overview;
