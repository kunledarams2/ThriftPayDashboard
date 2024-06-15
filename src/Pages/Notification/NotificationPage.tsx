import React, { useEffect, useState } from "react";

import styles from "../Notification/notificationPage.module.css";
import EmptyContainer from "../../components/utils/EmptyContainer";
import NoContentSVG from "../../assets/no_content_backup.svg";
import defaultAvatar from "../../assets/Avatar.jpg";
import { CreateGroupRequest } from "./createGroupRequest";
import {
  NotificationConvert,
  NotificationDatum,
  ThriftNotification,
  ThriftNotificationDatum,
  fetchNotification,
  notificationQuery,
} from "../../services/thriftPlans";
import { UserStateProvider, useUser } from "../Customers/UserStateProvider";

export const NotificationPage = () => {
  const [loading, setLoading] = useState(true);
  const [all, setAll] = useState(true);
  const [thriftPlan, setThriftPlan] = useState(false);
  const [thriftGroup, setThriftGroup] = useState(false);
  const [KYC, setKYC] = useState(false);
  const [status, setStatus] = useState("All");

  const handelAllView = () => {
    setThriftPlan(false);
    setThriftGroup(false);
    setKYC(false);
    setAll(true);
    setStatus("All");
  };
  const handelThriftPlan = () => {
    setThriftGroup(false);
    setThriftPlan(true);
    setKYC(false);
    setAll(false);
    setStatus("ThriftPlan");
  };

  const handelThriftGroup = () => {
    setKYC(false);
    setThriftPlan(false);
    setThriftGroup(true);
    setAll(false);
    setStatus("ThriftGroup");
  };

  const handelKYC = () => {
    setThriftGroup(false);
    setThriftPlan(false);
    setKYC(true);
    setAll(false);
    setStatus("All");
  };

  const [empty, setEmpty] = useState(false);

  const [open, setOpen] = useState<boolean>(false);
  // const [reload, setReload] = useState<boolean>(true);
  const closeModalHander = () => setOpen(false);

  const loadModalHander = () => setLoading(true);

  const [tnotification, setNotification] =
    useState<ThriftNotificationDatum[]>();
  const [notification, setSeletedNotification] =
    useState<ThriftNotificationDatum>();
  // const { parentState, setParentState } = useUser();
  console.log(tnotification?.length);

  const queryparams: notificationQuery = {
    destination: "",
  };

  useEffect(() => {
    if (loading) {
      fetchNotification(queryparams).then(
        (data) => {
          const stringJson = JSON.stringify(data);

          const responseData = NotificationConvert.toNotification(stringJson);
          if (responseData?.success) {
            console.log(responseData.data.length);
            setNotification(responseData.data);
            setEmpty(false);

            // setReload(false)
          } else {
            setNotification(responseData.data);
            setEmpty(true);
          }
          setLoading(false);
          // setReload(false)
        },
        (error) => {
          setLoading(false);
          const _content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    }
  }, [loading]);

  return (
    <UserStateProvider>
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
            <div className={styles.frameParent}>
              <div className={styles.tabsParent}>
                <div className={styles.pillParent}>
                  <div
                    onClick={handelAllView}
                    className={all ? styles.pill4 : styles.pill5}
                  >
                    <div
                      className={all ? styles.buttonLabel : styles.buttonLabel1}
                    >
                      All
                    </div>
                  </div>
                  <div
                    onClick={handelThriftPlan}
                    className={thriftPlan ? styles.pill4 : styles.pill5}
                  >
                    <div
                      className={
                        thriftPlan ? styles.buttonLabel : styles.buttonLabel1
                      }
                    >
                      Thrift Plan Requests
                    </div>
                  </div>
                  <div
                    onClick={handelThriftGroup}
                    className={thriftGroup ? styles.pill4 : styles.pill5}
                  >
                    <div
                      className={
                        thriftGroup ? styles.buttonLabel : styles.buttonLabel1
                      }
                    >
                      Thrift Group Requests
                    </div>
                  </div>
                  <div
                    onClick={handelKYC}
                    className={KYC ? styles.pill4 : styles.pill5}
                  >
                    <div
                      className={KYC ? styles.buttonLabel : styles.buttonLabel1}
                    >
                      KYC
                    </div>
                  </div>
                </div>
                <></>

                {tnotification?.length != null && tnotification?.length != 0 ? (
                  <>
                    {tnotification?.map((result) => (
                      <div className={styles.thriftJoinRequest}>
                        <img
                          className={styles.avatarstRequest}
                          src={defaultAvatar}
                          alt="SVG logo image"
                        />
                        <div className={styles.frameRequest}>
                          <div className={styles.frameRequest2}>
                            <div>
                              <div className={styles.requestTextHeader}>
                                Request to Create Thrift Group
                                {/* {result.join_thrift.name} */}
                              </div>
                              <div className={styles.requestTextSub}>
                                {result.user.first_name} {result.user.last_name}{" "}
                                has requested to Create a Thrift Group
                              </div>
                            </div>
                          </div>
                          <div className="buttons-thrift-join-request">
                            <div className="button-thrift-join-request">
                              <div
                                className="button2-thrift-join-request"
                                onClick={() => {
                                  setOpen(true);
                                  setSeletedNotification(result);
                                  // openReview
                                  // setParentState({
                                  //   openReview: true,
                                  //   loading: false,
                                  //   response: parentState.response,
                                  //   request: result,
                                  //   closeReview: true,
                                  // });
                                }}
                              >
                                Review{" "}
                              </div>
                            </div>
                            {/* <div className="button3-thrift-join-request">
              <div className="button4-thrift-join-request">Decline </div>
            </div> */}
                          </div>
                        </div>
                        <div className={styles.frameTime}>
                          <div className={styles.circleRe}></div>
                          <div className={styles.requestTime}>
                            {" "}
                            30 Mins ago{" "}
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
              </div>
            </div>
          </>
        )}

        {open && (
          <CreateGroupRequest
            open={open}
            close={closeModalHander}
            notificationData={notification}
            reloading={loadModalHander}
          />
        )}
      </>
    </UserStateProvider>
  );
};
