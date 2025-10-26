import { FunctionComponent, useState } from "react";
import styles from "./PlanSummary.module.css";
import editIcon from "../../assets/thrift/Icons.svg";
import moreIcon from "../../assets/thrift/moreIcon.svg";
import downwardIcon from "../../assets/thrift/downwardIcon.svg";
import upwardIcon from "../../assets/thrift/upwardIcon.svg";
import penaltyIcon from "../../assets/thrift/penaltyIcon.svg";
import calenderIcon from "../../assets/thrift/calenderIcon.svg";
import { useStateContext } from "./state_provider/OverviewStateContext";
import EmptyContainer from "../utils/EmptyContainer";
import NoContentSVG from "../../assets/no_content_backup.svg";
import moment from "moment";
import { getCurrency } from "../utils/util";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import ThriftPlanDetail from "./ThriftPlanDetail";

const PlanSummary = () => {
  const { parentState, setParentState } = useStateContext();
  const totalContribution = parentState.response?.data.total_contribution!;
  const totalPenalty = parentState.response?.data.contributions.reduce(
    (sum, item) => sum + item.penalty,
    0
  );
  const { state } = useLocation();
  const { data } = state;

  let navigate: NavigateFunction = useNavigate();
  const [details, setDetails] = useState(false);
  const [overview, setOverview] = useState(true);
  const handelViewPlanDetail = () => {
    setDetails(true);
    setOverview(false);
    // navigate("/thrift/summary/detail", { state: { data: data } });
  };
  const handelViewPlanOverview = () => {
    setDetails(false);
    setOverview(true);
    // navigate("/thrift/summary/overview", { state: { data: data } });
  };
  return (
    <>
      {" "}
      {parentState.loading ? (
        <div className="loader-container">
          <div
            className="spinner"
            style={{ margin: "20px 300px 300px 0px" }}
          ></div>
        </div>
      ) : (
        <>
          <div className={styles.content}>
            <div className={styles.tabsParent}>
              <div className={styles.tabs}>
                <div onClick={handelViewPlanOverview} className={styles.tab}>
                  <div className={styles.tabLabelWrapper}>
                    <div className={styles.tabLabel}>Overview</div>
                  </div>
                  <div className={styles.tabChild} />
                </div>
                <div onClick={handelViewPlanDetail} className={styles.tab1}>
                  <div className={styles.tabLabelWrapper}>
                    <div className={styles.startDate}>Plan Details</div>
                  </div>
                  <div className={styles.tabItem} />
                </div>
                <div className={styles.backParent}>
                  <div className={styles.back}>
                    <img className={styles.icons} alt="" src="Icons.svg" />
                  </div>
                  <div className={styles.button}>
                    <img className={styles.icons1} alt="" src={editIcon} />
                    <div className={styles.tabLabel}>Edit Plan</div>
                  </div>
                  <div className={styles.button2}>
                    <img className={styles.icons1} alt="" src={moreIcon} />
                  </div>
                </div>
              </div>
              {overview ? (
                <>
                  <div className={styles.content1}>
                    <div className={styles.backGroup}>
                      <div className={styles.back}>
                        <img className={styles.icons} alt="" src={editIcon} />
                      </div>
                      <div className={styles.breadcrumb}>
                        <div className={styles.tabLabelWrapper}>
                          <div className={styles.tabLabelWrapper}>
                            <div className={styles.breadcrumbMaster}>
                              <div className={styles.container}>
                                <div className={styles.tabLabelWrapper}>
                                  <div className={styles.label}>
                                    Thrift Plans
                                  </div>
                                </div>
                                <div className={styles.seperator}>/</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.breadcrumb2}>
                          <div className={styles.tabLabelWrapper}>
                            <div className={styles.breadcrumbMaster}>
                              <div className={styles.container}>
                                <div className={styles.tabLabelWrapper}>
                                  <div className={styles.label}>
                                    {data.name}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.planSummaryParent}>
                      <div className={styles.planSummary}>Plan Summary</div>
                      <div className={styles.overview}>
                        <div className={styles.totalThriftPlans}>
                          <div className={styles.frameParent}>
                            <div className={styles.container}>
                              <div className={styles.icon}>
                                <img
                                  className={styles.icons4}
                                  alt=""
                                  src={downwardIcon}
                                />
                              </div>
                            </div>
                            <div className={styles.frameGroup}>
                              <div className={styles.totalContributionParent}>
                                <div className={styles.totalContribution}>
                                  Total Contribution
                                </div>
                                <div className={styles.div}>
                                  {" "}
                                  {getCurrency(Number(totalContribution) / 100)}
                                </div>
                              </div>
                              {/* <div className={styles.change}>
                      <div className={styles.change1}>
                        <img
                          className={styles.icons5}
                          alt=""
                          src={downwardIcon}
                        />
                        <div className={styles.div1}>-2.5%</div>
                      </div>
                      <div className={styles.last7Days}>Last 7 Days</div>
                    </div> */}
                            </div>
                          </div>
                        </div>
                        <div className={styles.activethriftPlans}>
                          <div className={styles.frameContainer}>
                            <div className={styles.container}>
                              <div className={styles.icon}>
                                <img
                                  className={styles.icons4}
                                  alt=""
                                  src={upwardIcon}
                                />
                              </div>
                            </div>
                            <div className={styles.frameGroup}>
                              <div className={styles.totalContributionParent}>
                                <div className={styles.totalContribution}>
                                  Total Payout
                                </div>
                                <div className={styles.div}>
                                  {" "}
                                  {getCurrency(
                                    Number(
                                      parentState.response?.data?.total_payout
                                    ) / 100
                                  )}
                                </div>
                              </div>
                              {/* <div className={styles.change}>
                      <div className={styles.change3}>
                        <img className={styles.icons5} alt="" src="Icons.svg" />
                        <div className={styles.div1}>+2.5%</div>
                      </div>
                      <div className={styles.last7Days}>Last 7 Days</div>
                    </div> */}
                            </div>
                          </div>
                        </div>
                        <div className={styles.totalThriftPlans}>
                          <div className={styles.frameParent}>
                            <div className={styles.container}>
                              <div className={styles.icon2}>
                                <img
                                  className={styles.icons4}
                                  alt=""
                                  src={penaltyIcon}
                                />
                              </div>
                            </div>
                            <div className={styles.totalContributionParent}>
                              <div className={styles.totalContribution}>
                                Total Penalties
                              </div>
                              <div className={styles.div}>
                                {" "}
                                {getCurrency(Number(totalPenalty) / 100)}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.totalThriftPlans}>
                          <div className={styles.frameParent}>
                            <div className={styles.container}>
                              <div className={styles.icon}>
                                <img
                                  className={styles.icons4}
                                  alt=""
                                  src={calenderIcon}
                                />
                              </div>
                            </div>
                            <div className={styles.frameGroup}>
                              <div className={styles.totalContributionParent}>
                                <div className={styles.totalContribution}>
                                  Months Completed
                                </div>
                                <div className={styles.div}>
                                  {" "}
                                  {
                                    parentState.response?.data?.complete_month
                                  }{" "}
                                  of {data.total_slot}{" "}
                                </div>
                              </div>
                              <div className={styles.change}>
                                <div className={styles.change1}>
                                  <img
                                    className={styles.icons5}
                                    alt=""
                                    src="Icons.svg"
                                  />
                                  <div className={styles.div1}>-2.5%</div>
                                </div>
                                <div className={styles.last7Days}>
                                  Last 7 Days
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.frameParent}>
                        <div className={styles.recentTransactions}>
                          Recent Transactions
                        </div>
                        <div className={styles.pillsParent}>
                          <div className={styles.pills}>
                            <div className={styles.pillParent}>
                              <div className={styles.pill}>
                                <div className={styles.tabLabel}>All</div>
                              </div>
                              <div className={styles.pill1}>
                                <div className={styles.startDate}>February</div>
                              </div>
                              <div className={styles.pill1}>
                                <div className={styles.startDate}>March</div>
                              </div>
                              <div className={styles.pill1}>
                                <div className={styles.startDate}>April</div>
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
                            <div className={styles.button3}>
                              <img
                                className={styles.icons11}
                                alt=""
                                src="Icons.svg"
                              />
                              <div className={styles.button4}>Filters</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.button5}>
                          <div className={styles.button4}>See All</div>
                        </div>
                      </div>
                      <div className={styles.headingParent}>
                        <div className={styles.heading}>
                          <div className={styles.member}>Member</div>
                          <div className={styles.transactionType}>
                            Transaction type
                          </div>
                          <div className={styles.member}>Date</div>
                          <div className={styles.paymentMethod}>
                            Payment Method
                          </div>
                          <div className={styles.headingChild} />
                          <div className={styles.amount}>Amount</div>
                        </div>

                        {parentState.response?.data?.contributions.length ==
                          0 && (
                          <EmptyContainer
                            title={"No Data Yet"}
                            body={
                              "More details about the thrift will be displayed here once the plan starts."
                            }
                            imagePath={NoContentSVG}
                          />
                        )}
                        {parentState.response?.data?.contributions
                          .slice(
                            0,
                            parentState.response?.data?.member.length - 2
                          )
                          .map((contribution) => (
                            <div className={styles.thriftplanCard}>
                              <div className={styles.frankLampard}>
                                {contribution.user.first_name}{" "}
                                {contribution.user.last_name}
                              </div>
                              <div className={styles.februaryContribution}>
                                {moment(contribution.created_at).format("MMMM")}
                              </div>
                              <div className={styles.mar32023}>
                                {" "}
                                {moment(contribution.created_at).format(
                                  "MMM, Do YYYY"
                                )}{" "}
                              </div>
                              <div className={styles.wallet}>Wallet</div>
                              <div className={styles.n10000}>
                                + {getCurrency(contribution.amount / 100)}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <ThriftPlanDetail />
                </>
              )}
            </div>
            <div className={styles.content4}>
              <div className={styles.bottomWrapper}>
                <div className={styles.bottom}>
                  <div className={styles.startDateParent}>
                    <div className={styles.startDate}>Start Date:</div>
                    <div className={styles.july142023}>
                      {" "}
                      {moment(data.start_date).format("MMMM, D YYYY")}{" "}
                    </div>
                  </div>
                  <div className={styles.bagde}>
                    <div className={styles.active}>
                      {data.is_active
                        ? "Active"
                        : !data.is_active && !data.is_open
                        ? "Completed"
                        : "Inactive"}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.thriftplanCardWrapper}>
                <div className={styles.thriftplanCard7}>
                  <div className={styles.basicThriftPlan}>{data.name}</div>
                  <div className={styles.info2Parent}>
                    <div className={styles.info2}>
                      <div className={styles.tabLabel}>
                        {" "}
                        {getCurrency(Number(data.contribution_amount) / 100)}
                      </div>
                      <div className={styles.amountPerMember}>
                        Amount Per Member
                      </div>
                    </div>
                    <div className={styles.info2}>
                      <div className={styles.tabLabel}>{data.total_slot}</div>
                      <div className={styles.amountPerMember}>No of Slots</div>
                    </div>
                  </div>
                  <div className={styles.info3Parent}>
                    <div className={styles.info2}>
                      <div className={styles.tabLabel}>
                        {" "}
                        {getCurrency(
                          Number(data.contribution_amount * data.total_slot) /
                            100
                        )}
                      </div>
                      <div className={styles.targetRemitmonthly}>
                        Target Remit/Slot
                      </div>
                    </div>
                    <div className={styles.info2}>
                      <div className={styles.tabLabel}>
                        {" "}
                        {parentState.response?.data?.complete_month} /{" "}
                        {data.total_slot}{" "}
                      </div>
                      <div className={styles.targetRemitmonthly}>
                        Filled Slots
                      </div>
                    </div>
                  </div>
                  <div className={styles.progress}>
                    <div className={styles.progressBar}>
                      <div className={styles.progressBarChild} />
                      <div className={styles.progressBarItem} />
                    </div>
                    <div className={styles.button4}>
                      {(Number(parentState.response?.data?.total_contribution) *
                        10) /
                        (data.total_slot * data.contribution_amount)}
                      %
                    </div>
                  </div>
                  <div className={styles.divider} />
                  <div className={styles.frameParent5}>
                    <div className={styles.febNov2023Parent}>
                      <div className={styles.tabLabel}>
                        {" "}
                        {moment(data.start_date).format("MMM")} -{" "}
                        {moment(data.start_date)
                          .add(data.total_slot, "months")
                          .format("MMM")}{" "}
                        {moment(data.start_date).format("YYYY")}
                      </div>
                      <div className={styles.duration}>Duration</div>
                    </div>
                    <div className={styles.febNov2023Parent}>
                      <div className={styles.tabLabel}>
                        {" "}
                        {moment(data.start_date)
                          .add(
                            parentState.response?.data?.complete_month,
                            "months"
                          )
                          .format("MMMM")}{" "}
                      </div>
                      <div className={styles.duration}>Current Month</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.thriftDetailMember}>
                <div className={styles.tabParent}>
                  <div className={styles.tab}>
                    <div className={styles.tabLabelWrapper}>
                      <div className={styles.tabLabel}>Thrift Members</div>
                    </div>
                    <div className={styles.tabChild} />
                  </div>
                  <div className={styles.tab1}>
                    <div className={styles.tabLabelWrapper}>
                      <div className={styles.startDate}>Requests</div>
                    </div>
                    <div className={styles.rectangleDiv} />
                  </div>
                  <div className={styles.tab1}>
                    <div className={styles.tabLabelWrapper}>
                      <div className={styles.startDate}>Activities</div>
                    </div>
                    <div className={styles.rectangleDiv} />
                  </div>
                </div>
                <div className={styles.thriftMemberParent}>
                  <>
                    {parentState.response?.data.member.length === 0 && (
                      <EmptyContainer
                        title={"No Thrift Members"}
                        body={""}
                        imagePath={NoContentSVG}
                      />
                    )}

                    {parentState.response?.data.member.map((result) => (
                      <div className={styles.thriftMember1}>
                        <div className={styles.avatarsParent}>
                          <div className={styles.avatars}>
                            <div className={styles.jd}>FL</div>
                          </div>
                          <div className={styles.johnDoeGroup}>
                            <div className={styles.button4}>
                              {result.full_name}
                            </div>
                            <div className={styles.johndoeexamplecom}>
                              {result.phone_number}
                            </div>
                          </div>
                        </div>
                        <div className={styles.info33}>
                          <div className={styles.slot}>Slot</div>
                          <div className={styles.div11}>{result.slot}</div>
                        </div>
                      </div>
                    ))}
                  </>
                </div>
              </div>
            </div>
          </div>
        </>

        //   {overview ?()}
      )}
    </>
  );
};

export default PlanSummary;
