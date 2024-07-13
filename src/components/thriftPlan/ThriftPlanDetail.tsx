import React, { useEffect, useState } from "react";
import {
  ActiveThriftPlanData,
  ActiveThriftPlanConvert,
  getThriftPlanActive,
} from "../../services/thriftPlans";
import { useLocation } from "react-router-dom";
import { getInitials, getCurrency } from "../../components/utils/util";
import moment from "moment";
import EmptyContainer from "../utils/EmptyContainer";
import defaultAvatar from "../../assets/Avatar.jpg";
import ThriftPlanSummaryTab from "./ThriftPlanSummaryTab";
import ThriftPlanSummarySide from "./ThriftPlanSummarySide";

// var getInitials = function (string: string) {
//   var names = string.split(" "),
//     initials = names[0].substring(0, 1).toUpperCase();

//   if (names.length > 1) {
//     initials += names[names.length - 1].substring(0, 1).toUpperCase();
//   }
//   return initials;
// };

// var getCurrency = function (amount: number) {
//   return amount.toLocaleString("en-NG", {
//     style: "currency",
//     currency: "NGN",
//   });
// };

const ThriftPlanDetail = () => {
  const { state } = useLocation();
  const { data } = state;
  console.log(data.id);

  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(false);

  const [thriftPlanActive, setthriftPlanActive] = useState<
    ActiveThriftPlanData | undefined
  >(undefined);
  useEffect(() => {
    setLoading(true);
    getThriftPlanActive(data.id).then(
      (data) => {
        const stringJson = JSON.stringify(data, null, 4);
        const responseData =
          ActiveThriftPlanConvert.toActiveThriftPlan(stringJson);
        if (responseData.success) {
          setEmpty(false);
          setthriftPlanActive(responseData.data);

          setProgress(
            (responseData.data.ongoing_contribution /
              responseData.data.expented_contribution) *
              100
          );
          // var status = true if (progress > 100) else false

          setStatus(Boolean(progress == 100));
        } else {
          setEmpty(true);
        }
        setLoading(false);

        // console.log(responseData.results);
        // setthriftPlanList(responseData);
        // setContent(response.data);
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

  // useEffect(() => {});

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div
            className="spinner"
            style={{ margin: "20px 300px 300px 0px" }}
          ></div>
        </div>
      ) : (
        <div>
          <div>
            {/* <div className="pills">
        <div className="frame-2616">
          <div className="pill">
            <div className="button-label">Feburary </div>
          </div>
          <div className="pill2">
            <div className="button-label2">March </div>
          </div>
          <div className="pill2">
            <div className="button-label2">April </div>
          </div>
          <div className="pill2">
            <div className="button-label2">May </div>
          </div>
          <div className="pill2">
            <div className="button-label2">June </div>
          </div>
        </div>
        <div className="rectangle-227"></div>
        <div className="icons-chevron-left">
          <svg className="icons-chevron-left2" width="24" height="24"></svg>
        </div>
      </div> */}
            {empty && <EmptyContainer title={""} body={""} imagePath={""} />}
            {empty ? null : (
              <div className="summary-content-empty">
                <div>
                  <ThriftPlanSummaryTab />
                  <div className="frame-1000002760">
                    <div className="frame-1000002762">
                      <div className="frame-1000002766">
                        <div className="frame-1000002761">
                          <div className="payment-due-date-plan-detail">
                            <div className="frame-1000002750">
                              <div className="frame-1000002690">
                                <div className="icon-plan-detail">
                                  <svg
                                    className="icons-plan-detail"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clip-path="url(#clip0_1135_13403)">
                                      <path
                                        d="M10.5 8C10.5 8.49445 10.3534 8.9778 10.0787 9.38893C9.80397 9.80005 9.41352 10.1205 8.95671 10.3097C8.49989 10.4989 7.99723 10.5484 7.51227 10.452C7.02732 10.3555 6.58186 10.1174 6.23223 9.76777C5.8826 9.41814 5.6445 8.97268 5.54804 8.48773C5.45157 8.00277 5.50108 7.50011 5.6903 7.04329C5.87952 6.58648 6.19995 6.19603 6.61107 5.92133C7.0222 5.64662 7.50555 5.5 8 5.5C8.66304 5.5 9.29893 5.76339 9.76777 6.23223C10.2366 6.70107 10.5 7.33696 10.5 8ZM15.5 4V12C15.5 12.1326 15.4473 12.2598 15.3536 12.3536C15.2598 12.4473 15.1326 12.5 15 12.5H1C0.867392 12.5 0.740215 12.4473 0.646447 12.3536C0.552678 12.2598 0.5 12.1326 0.5 12V4C0.5 3.86739 0.552678 3.74021 0.646447 3.64645C0.740215 3.55268 0.867392 3.5 1 3.5H15C15.1326 3.5 15.2598 3.55268 15.3536 3.64645C15.4473 3.74021 15.5 3.86739 15.5 4ZM14.5 6.89687C13.9323 6.729 13.4155 6.42175 12.9969 6.00311C12.5782 5.58447 12.271 5.06775 12.1031 4.5H3.89687C3.729 5.06775 3.42175 5.58447 3.00311 6.00311C2.58447 6.42175 2.06775 6.729 1.5 6.89687V9.10312C2.06775 9.271 2.58447 9.57825 3.00311 9.99689C3.42175 10.4155 3.729 10.9323 3.89687 11.5H12.1031C12.271 10.9323 12.5782 10.4155 12.9969 9.99689C13.4155 9.57825 13.9323 9.271 14.5 9.10312V6.89687Z"
                                        fill="#444A5B"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_1135_13403">
                                        <rect
                                          width="16"
                                          height="16"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </div>
                              </div>
                              <div className="frame-1000002697">
                                <div className="total-amount-contributed-for-february-plan-detail">
                                  Total Amount Contributed for February{" "}
                                </div>
                              </div>
                            </div>
                            <div className="frame-1000002763">
                              <div className="_10-000-of-50-000-plan-detail">
                                {getCurrency(
                                  Number(thriftPlanActive?.ongoing_contribution)
                                )}{" "}
                                of{" "}
                                {getCurrency(
                                  Number(
                                    thriftPlanActive?.expented_contribution
                                  )
                                )}{" "}
                              </div>
                              <div className="progress-plan-detail">
                                <div className="progress-bar-plan-detail">
                                  <div
                                    className="rectangle-3972-plan-detail"
                                    style={{ width: `${progress}%` }}
                                  ></div>
                                  <div className="rectangle-3973-plan-detail"></div>
                                </div>
                                <div className="_20-plan-detail">
                                  {progress}%{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="frame-1000002765">
                            <div className="payment-due-date2-plan-detail">
                              <div className="frame-1000002750">
                                <div className="frame-1000002690">
                                  <div className="icon2-plan-detail">
                                    <svg
                                      className="icons2-plan-detail"
                                      width="16"
                                      height="17"
                                      viewBox="0 0 16 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clip-path="url(#clip0_1135_12751)">
                                        <path
                                          d="M13 2.5H11.5V2C11.5 1.86739 11.4473 1.74021 11.3536 1.64645C11.2598 1.55268 11.1326 1.5 11 1.5C10.8674 1.5 10.7402 1.55268 10.6464 1.64645C10.5527 1.74021 10.5 1.86739 10.5 2V2.5H5.5V2C5.5 1.86739 5.44732 1.74021 5.35355 1.64645C5.25979 1.55268 5.13261 1.5 5 1.5C4.86739 1.5 4.74021 1.55268 4.64645 1.64645C4.55268 1.74021 4.5 1.86739 4.5 2V2.5H3C2.73478 2.5 2.48043 2.60536 2.29289 2.79289C2.10536 2.98043 2 3.23478 2 3.5V13.5C2 13.7652 2.10536 14.0196 2.29289 14.2071C2.48043 14.3946 2.73478 14.5 3 14.5H13C13.2652 14.5 13.5196 14.3946 13.7071 14.2071C13.8946 14.0196 14 13.7652 14 13.5V3.5C14 3.23478 13.8946 2.98043 13.7071 2.79289C13.5196 2.60536 13.2652 2.5 13 2.5ZM13 5.5H3V3.5H4.5V4C4.5 4.13261 4.55268 4.25979 4.64645 4.35355C4.74021 4.44732 4.86739 4.5 5 4.5C5.13261 4.5 5.25979 4.44732 5.35355 4.35355C5.44732 4.25979 5.5 4.13261 5.5 4V3.5H10.5V4C10.5 4.13261 10.5527 4.25979 10.6464 4.35355C10.7402 4.44732 10.8674 4.5 11 4.5C11.1326 4.5 11.2598 4.44732 11.3536 4.35355C11.4473 4.25979 11.5 4.13261 11.5 4V3.5H13V5.5Z"
                                          fill="#444A5B"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_1135_12751">
                                          <rect
                                            width="16"
                                            height="16"
                                            fill="white"
                                            transform="translate(0 0.5)"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="frame-1000002697">
                                  <div className="payment-due-date3-plan-detail">
                                    Payment Due Date{" "}
                                  </div>
                                  <div className="mar-4-2023-plan-detail">
                                    HD Mar. 4, 2023{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="member-receiving-payment-plan-detail">
                              <div className="frame-10000026972">
                                <div className="member-receiving-payout-plan-detail">
                                  Member Receiving Payout{" "}
                                </div>
                                <div className="frame-1000002740-plan-detail">
                                  <img
                                    className="avatars-plan-detail"
                                    src={defaultAvatar}
                                    alt="SVG logo image"
                                  />
                                  {/* <img
                              className="avatar-header"
                              src={defaultAvatar}
                              alt="SVG logo image"
                            /> */}
                                  <div className="frame-1000002741">
                                    <div className="john-doe-plan-detail">
                                      {
                                        thriftPlanActive?.payout_receiver
                                          .username
                                      }{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="recent-activities-plan-detail">
                          <div className="frame-187">
                            <div className="heading-plan-detail">
                              Members Contribution Status{" "}
                            </div>
                          </div>

                          <div className="frame-2713">
                            {thriftPlanActive?.plan_member.map((result) => (
                              <div className="thrift-member-plan-detail">
                                <div className="frame-10000027402">
                                  <div className="avatars2-plan-detail">
                                    <div className="jd-plan-detail">
                                      {getInitials(result.username)}
                                    </div>
                                  </div>
                                  <div className="frame-10000027412">
                                    <div className="john-doe-plan-detail">
                                      {result.username}{" "}
                                    </div>
                                  </div>
                                </div>
                                {result.contribution ? (
                                  <div className="bagde-plan-detail">
                                    <div className="p-aid-plan-detail">
                                      Paid{" "}
                                    </div>
                                  </div>
                                ) : (
                                  <div className="bagde2-plan-detail">
                                    <div className="pending-plan-detail">
                                      Pending{" "}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}

                            {/* <div className="thrift-member-plan-detail">
                  <div className="frame-10000027402">
                    <img className="avatars-plan-detail" src="avatars.png" />
                    <div className="frame-10000027412">
                      <div className="john-doe-plan-detail">John Doe </div>
                    </div>
                  </div>
                  <div className="bagde-plan-detail">
                    <div className="p-aid-plan-detail">PAid </div>
                  </div>
                </div>
                <div className="thrift-member-plan-detail">
                  <div className="frame-10000027402">
                    <div className="avatars2-plan-detail">
                      <div className="jd-plan-detail">FL </div>
                    </div>
                    <div className="frame-10000027412">
                      <div className="john-doe-plan-detail">Frank Lampard </div>
                    </div>
                  </div>
                  <div className="bagde-plan-detail">
                    <div className="p-aid-plan-detail">PAid </div>
                  </div>
                </div>
                <div className="thrift-member-plan-detail">
                  <div className="frame-10000027402">
                    <div className="avatars3-plan-detail">
                      <div className="jd2-plan-detail">JD </div>
                    </div>
                    <div className="frame-10000027412">
                      <div className="john-doe-plan-detail">Jane Doe </div>
                    </div>
                  </div>
                  <div className="bagde2-plan-detail">
                    <div className="pending-plan-detail">Pending </div>
                  </div>
                </div>
                <div className="thrift-member-plan-detail">
                  <div className="frame-10000027402">
                    <div className="avatars2-plan-detail">
                      <div className="jd3-plan-detail">AM </div>
                    </div>
                    <div className="frame-10000027412">
                      <div className="john-doe-plan-detail">Ahmed Musa </div>
                    </div>
                  </div>
                  <div className="bagde2-plan-detail">
                    <div className="pending-plan-detail">Pending </div>
                  </div>
                </div>
                <div className="thrift-member-plan-detail">
                  <div className="frame-10000027402">
                    <div className="avatars4-plan-detail">
                      <div className="jd2-plan-detail">OJ </div>
                    </div>
                    <div className="frame-10000027412">
                      <div className="john-doe-plan-detail">
                        Olawale Jumoke{" "}
                      </div>
                    </div>
                  </div>
                  <div className="bagde2-plan-detail">
                    <div className="pending-plan-detail">Pending </div>
                  </div>
                </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-1000002764">
                      <div className="frame-1000002745">
                        <div className="transactions-plan-detail">
                          Transactions{" "}
                        </div>
                      </div>
                      <div className="frame-1000002744">
                        <div className="heading2-plan-detail">
                          <div className="member-plan-detail">Member </div>
                          <div className="transaction-type-plan-detail">
                            Transaction type{" "}
                          </div>
                          <div className="date-plan-detail">Date </div>
                          <div className="payment-method-plan-detail">
                            Payment Method{" "}
                          </div>
                          <div className="amount-plan-detail">Amount </div>
                        </div>
                        {thriftPlanActive?.contributions.map((data) => (
                          <div className="thriftplan-card-plan-detail">
                            <div className="john-doe2-plan-detail">
                              {data.user.first_name} {data.user.last_name}{" "}
                            </div>
                            <div className="contribution-plan-detail">
                              Contribution{" "}
                            </div>
                            <div className="mar-3-2023-plan-detail">
                              {moment(data.created_at).format("MMM, Do YYYY")}{" "}
                            </div>
                            <div className="bank-transfer-plan-detail">
                              Bank Transfer{" "}
                            </div>
                            <div className="n-10-000-plan-detail">
                              +{getCurrency(Number(data.amount))}{" "}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <ThriftPlanSummarySide />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ThriftPlanDetail;
