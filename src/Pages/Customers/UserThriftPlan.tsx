import React, { useEffect, useState } from "react";
import styles from "../Customers/userthriftplan.module.css";
import { useLocation } from "react-router-dom";
import {
  ConvertUserThriftPlan,
  UserThriftPlanData,
  fetchUserTPlan,
} from "../../services/userServices";
import EmptyContainer from "../../components/utils/EmptyContainer";
import NoContentSVG from "../../assets/no_content_backup.svg";
import moment from "moment";

const UserThriftPlan = () => {
  const { state } = useLocation();
  const { data } = state;
  console.log(data.id);

  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [progress, setProgress] = useState(0);
  // const [status, setStatus] = useState(false);

  const [status, setStatus] = useState("All");
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [pending, setPending] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handelActiveView = () => {
    setActive(true);
    setPending(false);
    setCompleted(false);
    setAll(false);
    setStatus("Active");
  };
  const handelPending = () => {
    setActive(false);
    setPending(true);
    setCompleted(false);
    setAll(false);
    setStatus("Inactive");
  };

  const handelCompleted = () => {
    setActive(false);
    setPending(false);
    setCompleted(true);
    setAll(false);
    setStatus("Completed");
  };

  const handelAllPlans = () => {
    setActive(false);
    setPending(false);
    setCompleted(false);
    setAll(true);
    setStatus("All");
  };

  const [userTPlan, setUserTPlan] = useState<UserThriftPlanData | undefined>(
    undefined
  );

  useEffect(() => {
    setLoading(true);
    fetchUserTPlan(data.id).then(
      (data) => {
        const stringJson = JSON.stringify(data, null, 4);
        const responseData = ConvertUserThriftPlan.toUserThriftPlan(stringJson);
        if (responseData.success) {
          setEmpty(false);
          setUserTPlan(responseData.data);

          // setProgress(
          //   (responseData.data.ongoing_contribution /
          //     responseData.data.expented_contribution) *
          //     100
          // );
          // var status = true if (progress > 100) else false

          // setStatus(Boolean(progress == 100));
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

  // const [filterStatus, setFilterStatus] = useState("All");

  const filteredUserPlans = userTPlan?.user_plans.filter((result) => {
    return status === "All" || result.ongoing_contribution_status === status;
  });

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
        <div className={styles.frameParent}>
          <div className={styles.pillParent}>
            <div
              onClick={handelAllPlans}
              className={all ? styles.pill4 : styles.pill5}
            >
              <div className={all ? styles.buttonLabel : styles.buttonLabel1}>
                All
              </div>
            </div>
            <div
              onClick={handelActiveView}
              className={active ? styles.pill4 : styles.pill5}
            >
              <div
                className={active ? styles.buttonLabel : styles.buttonLabel1}
              >
                Active
              </div>
            </div>
            <div
              onClick={handelPending}
              className={pending ? styles.pill4 : styles.pill5}
            >
              <div
                className={pending ? styles.buttonLabel : styles.buttonLabel1}
              >
                Pending
              </div>
            </div>
            <div
              onClick={handelCompleted}
              className={completed ? styles.pill4 : styles.pill5}
            >
              <div
                className={completed ? styles.buttonLabel : styles.buttonLabel1}
              >
                Completed
              </div>
            </div>
            <div className={styles.pill8} />
            <div className={styles.pill8} />
            <div className={styles.pill8} />
            <div className={styles.pill8} />
          </div>
          {filteredUserPlans?.length != 0 ? (
            <div className={styles.gridWrapper}>
              {filteredUserPlans?.map((result) => (
                <div className={styles.frameParentCard}>
                  <div className={styles.thriftplanCardParent}>
                    <div className={styles.thriftplanCard}>
                      <div className={styles.thriftplan}>
                        <div className={styles.frameParentCard}>
                          <div className={styles.basicThriftPlanParent}>
                            <div className={styles.basicThriftPlan1}>
                              {result.thrift.name}
                            </div>
                            <img
                              className={styles.icons1}
                              alt=""
                              src="Icons.png"
                            />
                          </div>
                          <div className={styles.createdParent}>
                            <div className={styles.created}>Created:</div>
                            <div className={styles.july1420232}>
                              {moment(result.thrift.start_date).format(
                                "MMMM DD, yyyy"
                              )}
                            </div>
                          </div>
                        </div>
                        <div className={styles.info2Parent}>
                          <div className={styles.info2}>
                            <div className={styles.div}>
                              {(
                                result.thrift.contribution_amount / 100
                              ).toLocaleString("en-NG", {
                                style: "currency",
                                currency: "NGN",
                              })}
                            </div>
                            <div className={styles.targetRemitmonthly}>
                              Amount Per Member
                            </div>
                          </div>
                          <div className={styles.info2}>
                            <div className={styles.div}>
                              {result.thrift.total_slot}
                            </div>
                            <div className={styles.targetRemitmonthly}>
                              No of Slots
                            </div>
                          </div>
                        </div>
                        <div className={styles.info2Parent}>
                          <div className={styles.info2}>
                            <div className={styles.div}>
                              {" "}
                              {(
                                (result.thrift.total_slot *
                                  result.thrift.contribution_amount) /
                                100
                              ).toLocaleString("en-NG", {
                                style: "currency",
                                currency: "NGN",
                              })}{" "}
                            </div>
                            <div className={styles.targetRemitmonthly}>
                              Target Remit/Monthly
                            </div>
                          </div>
                          <div className={styles.info2}>
                            <div className={styles.div}>
                              {result.thrift.locked_slot}/
                              {result.thrift.total_slot}
                            </div>
                            <div className={styles.targetRemitmonthly}>
                              Filled Slots
                            </div>
                          </div>
                        </div>
                        <div className={styles.progress}>
                          <div className={styles.progressBar}>
                            <div
                              className={styles.progressBarChild}
                              style={{
                                width: `${
                                  (result.ongoing_contribution /
                                    result.expented_contribution) *
                                  100
                                }%`,
                              }}
                            />
                          </div>
                          <div className={styles.div4}>
                            {(result.ongoing_contribution /
                              result.expented_contribution) *
                              100}
                            %
                          </div>
                        </div>
                      </div>
                      <div className={styles.bottom}>
                        <div className={styles.startDateParent}>
                          <div className={styles.startDate}>Start Date:</div>
                          <div className={styles.july1420233}>
                            {moment(result.thrift.start_date).format(
                              "MMMM DD, yyyy"
                            )}
                          </div>
                        </div>
                        <div className={styles.bagde}>
                          <div className={styles.completed}>
                            {result.ongoing_contribution_status}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyContainer
              title={"No Data Yet"}
              body={""}
              imagePath={NoContentSVG}
            />
          )}
        </div>
      )}
    </>
  );
};

export default UserThriftPlan;
