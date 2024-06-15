import React from "react";
import styles from "./nextkinkycmodel.module.css";
import {
  KYCUpdateRequest,
  KycAddress,
  KycBvn,
  KycID,
  KycNextKins,
  UserKYCData,
  updateKYCStatus,
} from "../../services/userServices";
import { useUser } from "../../Pages/Customers/UserStateProvider";
import { RequestStatus } from "../utils/constants/constants";

interface Props {
  open?: boolean;
  close?: any;
  kyc?: any;

  // result: any | undefined;
  kycBVN?: KycBvn | undefined;
  kycAddress?: KycAddress | undefined;
  kycId?: KycID | undefined;
  kycNexkKins?: KycNextKins | undefined;
}

const NextKinKYCModel = () =>
  //     {
  //   open,
  //   close,
  //   kyc,
  //   kycBVN,
  //   kycAddress,
  //   kycId,
  //   kycNexkKins,
  //     }: Props
  {
    const { parentState, setParentState } = useUser();

    const handleApprove = (status: string) => {
      const requestBody: KYCUpdateRequest = {
        user_id:
          parentState.kycBVN?.user_id ??
          parentState.kycAddress?.user_id ??
          parentState.kycNexkKins?.user_id ??
          parentState.kycId?.user_id ??
          "",

        kyc_type: parentState.kycType ?? "",
        status: status,
      };

      console.log(requestBody);

      updateKYCStatus(requestBody).then((response) => {
        setParentState({
          openReview: false,
          kycInfoLoaded: false,
        });
        console.log(response);
      });

      console.log(parentState.openReview);
    };

    return (
      <div
        className={styles.overlayModal}
        style={{
          transform: parentState.openReview
            ? "translateY(0vh)"
            : "translateY(-100vh)",
          opacity: parentState.openReview ? 1 : 0,
        }}
      >
        <div className={styles.frameParent}>
          <div className={styles.frameHeader}>
            <div className={styles.headText}>{parentState.kycType}</div>
            <div
              className={styles.buttonClose}
              onClick={() =>
                setParentState({
                  openReview: false,
                })
              }
            >
              <svg
                className="icons-create-thrift"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1565_20080)">
                  <path
                    d="M10.9375 3.0625L3.0625 10.9375"
                    stroke="#444A5B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.9375 10.9375L3.0625 3.0625"
                    stroke="#444A5B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1565_20080">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className={styles.frameDiv}>
            <>
              {parentState.kycNexkKins != null ? (
                <>
                  <div className={styles.firstNameParent}>
                    <div className={styles.firstName}>First Name</div>
                    <div className={styles.john}>
                      {parentState.kycNexkKins.first_name}
                    </div>
                  </div>
                  <div className={styles.firstNameParent}>
                    <div className={styles.firstName}>Last Name</div>
                    <div className={styles.john}>
                      {parentState.kycNexkKins.last_name}
                    </div>
                  </div>
                  <div className={styles.lastNameGroup}>
                    <div className={styles.lastName1}>Last name</div>
                    <div className={styles.daramola}>
                      {parentState.kycNexkKins.last_name}
                    </div>
                  </div>
                  <div className={styles.firstNameParent}>
                    <div className={styles.firstName}>Email Address</div>
                    <div className={styles.john}>
                      {parentState.kycNexkKins.email}
                    </div>
                  </div>
                  <div className={styles.firstNameParent}>
                    <div className={styles.firstName}>Phone Number</div>
                    <div className={styles.john}>{}</div>
                  </div>
                  <div className={styles.firstNameParent}>
                    <div className={styles.firstName}>Relationship</div>
                    <div className={styles.john}>
                      {parentState.kycNexkKins.relationship}
                    </div>
                  </div>
                  <div className={styles.firstNameParent}>
                    <div className={styles.firstName}>Residential Address</div>
                    <div className={styles.john}>
                      {parentState.kycNexkKins.address}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {parentState.kycBVN != null ? (
                    <>
                      <div className={styles.frameDivv}>
                        <div className={styles.avatarsParent}>
                          <img
                            className={styles.avatarsIcon}
                            alt=""
                            src={parentState.kycBVN.image_url}
                          />
                          <div className={styles.verificationPhotoWrapper}>
                            <div className={styles.verificationPhoto}>
                              Verification Photo
                            </div>
                          </div>
                        </div>
                        <div className={styles.bvnParent}>
                          <div className={styles.bvn}>BVN</div>
                          <div className={styles.div}>
                            {parentState.kycBVN.bvn}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {parentState.kycId != null ? (
                        <>
                          <div className={styles.frameGroup}>
                            <div className={styles.idTypeParent}>
                              <div className={styles.idType}>ID Type</div>
                              <div className={styles.div}>
                                {parentState.kycId.id_type}
                              </div>
                            </div>
                            <div className={styles.idTypeParent}>
                              <div className={styles.idType}>ID Number</div>
                              <div className={styles.div}>
                                {parentState.kycId.id_number}
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {parentState.kycAddress != null ? (
                            <>
                              <div className={styles.frameGroup}>
                                <div className={styles.addressParent}>
                                  <div className={styles.address}>Address</div>
                                  <div className={styles.kogi}>
                                    {parentState.kycAddress.address}
                                  </div>
                                </div>
                                <div className={styles.addressParent}>
                                  <div className={styles.address}>Landmark</div>
                                  <div className={styles.kogi}>
                                    {parentState.kycAddress.landmark}
                                  </div>
                                </div>
                                <div className={styles.addressParent}>
                                  <div className={styles.address}>State</div>
                                  <div className={styles.kogi}>
                                    {" "}
                                    {parentState.kycAddress.state}
                                  </div>
                                </div>
                                <div className={styles.addressParent}>
                                  <div className={styles.address}>LGA</div>
                                  <div className={styles.kogi}>
                                    {" "}
                                    {parentState.kycAddress.local_gov}
                                  </div>
                                </div>
                                <div className={styles.utilityBillParent}>
                                  <div className={styles.address}>Doc</div>
                                  <div className={styles.doc}>
                                    <div className={styles.bxsfilePdfParent}>
                                      <img
                                        className={styles.icons3}
                                        alt=""
                                        src={
                                          parentState.kycAddress
                                            .valid_address_doc
                                        }
                                      />
                                      <div
                                        className={styles.johnDoeElectricity1}
                                      ></div>
                                      <div className={styles.icons5} />
                                    </div>
                                    <img
                                      className={
                                        styles.digitalMarketingServicesAgr1
                                      }
                                      alt=""
                                      src={
                                        parentState.kycAddress.valid_address_doc
                                      }
                                    />
                                    <div className={styles.clickToViewWrapper}>
                                      <div className={styles.clickToView1}>
                                        Click to view
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : (
                            <></>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          </div>

          <div className={styles.frameBut}>
            <div
              className={styles.button6Open}
              onClick={() => {
                handleApprove(RequestStatus.Decline);
              }}
            >
              <div className={styles.button7Open}>Decline </div>
            </div>
            <div
              className={styles.button4Open}
              onClick={() => {
                // setParentState({
                //   openReview: false,
                // });
                handleApprove(RequestStatus.Approve);
              }}
            >
              <div className={styles.button5Open}>Approve </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default NextKinKYCModel;
