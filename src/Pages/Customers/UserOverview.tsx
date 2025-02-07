import React, { useEffect, useState } from "react";
import CustomerOverview from "../../components/Customers/customerOverview";
import CustomerChart from "../../components/Customers/CustomerChart";
import UserDistribution from "../../components/Customers/UserDistribution";
// import "../Customers/customer.css";
import styles from "./useroverview.module.css";
import { Convert, DashboardStatsData } from "../../services/dashboardService";
import { number } from "zod";

const UserOverview = () => {
  const [inActiveUser, setInActiveUser] = useState(0);
  const [dashboardStat, setDashboardStat] = useState<
    DashboardStatsData | undefined
  >(undefined);

  useEffect(() => {
    const items = localStorage.getItem("dashStats");
    const responseData = Convert.toDashboardstats(items!);
    if (responseData.success) {
      setDashboardStat(responseData.data);
      const inActiveUser =
        responseData.data.total_users - responseData.data.total_active_users;
      setInActiveUser(inActiveUser);
    }

    // if (responseData) {
    //   setDashStat(responseData);
    // }
  }, []);
  return (
    <>
      <div className={styles.content}>
        <div className={styles.overview}>
          <div className={styles.totalThriftPlansParent}>
            <div className={styles.totalThriftPlans}>
              <div className={styles.frameParent}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon}>
                    <img className={styles.icons} alt="" src="Icons.svg" />
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.totalUsersParent}>
                    <div className={styles.totalUsers}>Total Users</div>
                    <div className={styles.div}>
                      {dashboardStat?.total_users}
                    </div>
                  </div>
                  <div className={styles.change}>
                    <div className={styles.change1}>
                      <img className={styles.icons1} alt="" src="Icons.svg" />
                      <div className={styles.div1}>-2.5%</div>
                    </div>
                    <div className={styles.last7Days}>Last 7 Days</div>
                  </div>
                  <div className={styles.change2}>
                    <div className={styles.change3}>
                      <img className={styles.icons1} alt="" src="Icons.svg" />
                      <div className={styles.div1}>+2.5%</div>
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
                    <img className={styles.closeIcon} alt="" src="Icons.svg" />
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.totalPendingParent}>
                    <div className={styles.totalUsers}>Total Pending</div>
                    <div className={styles.div}>34</div>
                  </div>
                  <div className={styles.change4}>
                    <div className={styles.change5}>
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
                  <div className={styles.icon2}>
                    <img className={styles.icons} alt="" src="Icons.svg" />
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.totalUsersParent}>
                    <div className={styles.totalUsers}>Active Users</div>
                    <div className={styles.div}>
                      {dashboardStat?.total_active_users}
                    </div>
                  </div>
                  <div className={styles.change}>
                    <div className={styles.change1}>
                      <img className={styles.icons1} alt="" src="Icons.svg" />
                      <div className={styles.div1}>-2.5%</div>
                    </div>
                    <div className={styles.last7Days}>Last 7 Days</div>
                  </div>
                  <div className={styles.change2}>
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
                  <div className={styles.icon3}>
                    <img className={styles.icons} alt="" src="Icons.svg" />
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.totalUsersParent}>
                    <div className={styles.totalUsers}>Inactive Users</div>
                    <div className={styles.div}>{inActiveUser}</div>
                  </div>
                  <div className={styles.change}>
                    <div className={styles.change1}>
                      <img className={styles.icons1} alt="" src="Icons.svg" />
                      <div className={styles.div1}>-2.5%</div>
                    </div>
                    <div className={styles.last7Days}>Last 7 Days</div>
                  </div>
                  <div className={styles.change2}>
                    <div className={styles.change3}>
                      <img className={styles.icons1} alt="" src="Icons.svg" />
                      <div className={styles.div1}>+2.5%</div>
                    </div>
                    <div className={styles.last7Days}>Last 7 Days</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.totalThriftPlans3}>
              <div className={styles.frameParent}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon}>
                    <img className={styles.icons} alt="" src="Icons.svg" />
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.totalPendingParent}>
                    <div className={styles.totalUsers}>
                      Total Thrift Transactions
                    </div>
                    <div className={styles.div}>300</div>
                  </div>
                  <div className={styles.change4}>
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
                    <img className={styles.closeIcon} alt="" src="Icons.svg" />
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.totalPendingParent}>
                    <div className={styles.totalUsers}>Total Pending</div>
                    <div className={styles.div}>34</div>
                  </div>
                  <div className={styles.change4}>
                    <div className={styles.change5}>
                      <img className={styles.icons1} alt="" src="Icons.svg" />
                      <div className={styles.div1}>+2.5%</div>
                    </div>
                    <div className={styles.last7Days}>Last 7 Days</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.totalUsersGroup}>
              <div className={styles.totalUsers1}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon6}>
                    <img className={styles.icons} alt="" src="Icons.svg" />
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.totalCompletedTransactionsParent}>
                    <div className={styles.totalUsers}>
                      Total Completed Transactions
                    </div>
                    <div className={styles.div15}>250</div>
                  </div>
                </div>
              </div>
              <div className={styles.totalUsers1}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon7}>
                    <img className={styles.icons} alt="" src="Icons.svg" />
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.totalCompletedTransactionsParent}>
                    <div className={styles.totalUsers}>
                      Total Failed Transactions
                    </div>
                    <div className={styles.div15}>20</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.backParent}>
          <div className={styles.back}>
            <img className={styles.icons17} alt="" src="Icons.svg" />
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
        <div className={styles.totalWalletBalanceParent}>
          <CustomerChart />
          <UserDistribution />
          {/* <div className={styles.totalWalletBalance}>
            <div className={styles.frameParent9}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent10}>
                  <div className={styles.headingParent}>
                    <div className={styles.heading}>Total Wallet Balance</div>
                    <div className={styles.div}>New Users</div>
                  </div>
                  <div className={styles.change18}>
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
                  <img className={styles.closeIcon} alt="" src="Icons.svg" />
                </div>
              </div>
            </div>
            <div className={styles.graph}>
              <div className={styles.horizontalLines}>
                <div className={styles.vertical}>
                  <div className={styles.div18}>400</div>
                  <div className={styles.verticalChild} />
                </div>
                <div className={styles.vertical}>
                  <div className={styles.div18}>350</div>
                  <div className={styles.verticalChild} />
                </div>
                <div className={styles.vertical2}>
                  <div className={styles.div20}>500</div>
                  <div className={styles.verticalChild} />
                </div>
                <div className={styles.vertical2}>
                  <div className={styles.div20}>400</div>
                  <div className={styles.verticalChild} />
                </div>
                <div className={styles.vertical2}>
                  <div className={styles.div20}>300</div>
                  <div className={styles.verticalChild} />
                </div>
                <div className={styles.vertical5}>
                  <div className={styles.div23}>200</div>
                  <div className={styles.verticalChild} />
                </div>
                <div className={styles.vertical5}>
                  <div className={styles.div23}>100</div>
                  <div className={styles.verticalChild} />
                </div>
                <div className={styles.vertical5}>
                  <div className={styles.div23}>50</div>
                  <div className={styles.verticalChild} />
                </div>
                <div className={styles.vertical5}>
                  <div className={styles.div26}> 0</div>
                  <div className={styles.verticalChild} />
                </div>
                <div className={styles.vertical}>
                  <div className={styles.am}>2 am</div>
                  <div className={styles.verticalChild} />
                </div>
              </div>
              <div className={styles.verticalLines}>
                <div className={styles.verticalLinesInner}>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.verticalLinesInner}>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.verticalLinesInner}>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.verticalLinesInner}>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.verticalLinesInner}>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.verticalLinesInner}>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.verticalLinesInner}>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.verticalLinesInner}>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.verticalLinesInner}>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.verticalLinesInner}>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.verticalLinesInner}>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.verticalLinesInner}>
                  <div className={styles.frameChild} />
                </div>
              </div>
              <div className={styles.lineGraph}>
                <img
                  className={styles.maskGroupIcon}
                  alt=""
                  src="Mask group.svg"
                />
                <div className={styles.tooltipParent}>
                  <div className={styles.tooltip}>
                    <div className={styles.tooltipStyleBottomPoint}>
                      <div className={styles.tooltipMaster}>
                        <div className={styles.container2}>
                          <div className={styles.content3}>
                            <div className={styles.text}>
                              <div className={styles.header}>
                                <div className={styles.title}>3400</div>
                                <img
                                  className={styles.closeIcon}
                                  alt=""
                                  src="Close Icon.svg"
                                />
                              </div>
                              <div className={styles.subtext}>
                                Wed, 10: 25PM
                              </div>
                            </div>
                          </div>
                          <div className={styles.overview}>
                            <div className={styles.pointer} />
                            <img
                              className={styles.pointerIcon}
                              alt=""
                              src="Pointer.png"
                            />
                            <div className={styles.pointer} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.ellipseDiv} />
                </div>
              </div>
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
            <div className={styles.inflowoutflow}>
              <div className={styles.tipGroup}>
                <div className={styles.tip2}>
                  <div className={styles.tipChild} />
                  <div className={styles.inflow}>Inflow</div>
                </div>
                <div className={styles.n12340}>N12,340</div>
                <div className={styles.change19}>
                  <div className={styles.change1}>
                    <img className={styles.icons1} alt="" src="Icons.svg" />
                    <div className={styles.div27}>+2.5%</div>
                  </div>
                  <div className={styles.last7Days9}>Last 7 Days</div>
                </div>
              </div>
              <div className={styles.tipGroup}>
                <div className={styles.tip3}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.outflow}>Outflow</div>
                </div>
                <div className={styles.n12340}>N12,340</div>
                <div className={styles.change21}>
                  <div className={styles.change1}>
                    <img className={styles.icons1} alt="" src="Icons.svg" />
                    <div className={styles.div27}>+2.5%</div>
                  </div>
                  <div className={styles.last7Days9}>Last 7 Days</div>
                </div>
              </div>
              <div className={styles.button} />
            </div>
          </div>
          <div className={styles.usersDistribution}>
            <div className={styles.text}>
              <div className={styles.heading2}>Users Distribution</div>
              <div className={styles.heading3}>3200 Users in 20 States</div>
            </div>
            <div className={styles.usersDistributionInner}>
              <div className={styles.nigeria1Parent}>
                <div className={styles.nigeria1}>
                  <img
                    className={styles.nigeria1Child}
                    alt=""
                    src="Group 48097072.svg"
                  />
                  <div className={styles.tooltipGroup}>
                    <div className={styles.tooltip1}>
                      <div className={styles.tooltipStyleBottomPoint}>
                        <div className={styles.tooltipMaster}>
                          <div className={styles.container2}>
                            <div className={styles.content4}>
                              <div className={styles.text}>
                                <div className={styles.header1}>
                                  <div className={styles.title}>FCT</div>
                                </div>
                                <div className={styles.subtext1}>500 Users</div>
                              </div>
                            </div>
                            <div className={styles.overview}>
                              <div className={styles.pointer2} />
                              <img
                                className={styles.pointerIcon}
                                alt=""
                                src="Pointer.png"
                              />
                              <div className={styles.pointer2} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameChild10} />
                  </div>
                </div>
                <div className={styles.topStatesParent}>
                  <div className={styles.topStates}>Top States</div>
                  <div className={styles.frameParent11}>
                    <div className={styles.lagosParent}>
                      <div className={styles.lagos}>Lagos</div>
                      <div className={styles.k}>{`2.1k `}</div>
                    </div>
                    <div className={styles.lagosParent}>
                      <div className={styles.lagos}>Rivers</div>
                      <div className={styles.k}>{`1.2k `}</div>
                    </div>
                    <div className={styles.lagosParent}>
                      <div className={styles.lagos}>FCT</div>
                      <div className={styles.k}>500</div>
                    </div>
                    <div className={styles.lagosParent}>
                      <div className={styles.lagos}>Oyo</div>
                      <div className={styles.k}>154</div>
                    </div>
                    <div className={styles.lagosParent}>
                      <div className={styles.lagos}>Ogun</div>
                      <div className={styles.k}>89</div>
                    </div>
                    <div className={styles.lagosParent}>
                      <div className={styles.lagos}>Imo</div>
                      <div className={styles.k}>55</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="info">
        <CustomerOverview />
      </div>

      <section className="user">
        <div className="userchart">
          <CustomerChart />
        </div>

        <div className="userdistribution">
          <UserDistribution />
        </div>
      </section> */}
    </>
  );
};

export default UserOverview;
