import React, { useEffect, useState } from "react";
import KYCstatus from "../../components/Customers/KYC/KYCstatus";
import BVNVerified from "../../components/Customers/KYC/BVNVerified";
import NextOfKinVerified from "../../components/Customers/KYC/NextOfKinVerified";
import IDVerified from "../../components/Customers/KYC/IDVerified";
import AddressVerified from "../../components/Customers/KYC/AddressVerified";
import styles from "./userkyc.module.css";
import { useLocation } from "react-router-dom";
import {
  ConvertUserKYC,
  UserKYCData,
  fetchKYCInfo,
} from "../../services/userServices";
import { UserStateProvider, useUser } from "./UserStateProvider";
import NextKinKYCModel from "../../components/modal/NextKinKYCModel";

const UserKYC = () => {
  const { state } = useLocation();
  const { data } = state;
  // const { open } = state;
  // console.log(data);

  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [userKYC, setKYC] = useState<UserKYCData | undefined>(undefined);
  // const [openM, setOpen] = useState<boolean>(open);
  const { parentState, setParentState } = useUser();

  const [kycInfoLoaded, setKYCInfoLoaded] = useState(false);

  useEffect(() => {
    if (!parentState.kycInfoLoaded) {
      setLoading(true);
      console.log(data.id);
      fetchKYCInfo(data.id).then(
        (response) => {
          const stringJson = JSON.stringify(response, null, 4);
          console.log(stringJson);
          const responseData = ConvertUserKYC.toUserKYC(stringJson);
          if (responseData.success) {
            setEmpty(false);
            setKYC(responseData.data);
            setKYCInfoLoaded(true);

            setParentState({
              userKYCData: responseData.data,
              kycInfoLoaded: true,
            });
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
        }
      );
    }
    if (!parentState.openReview) {
      // window.location.reload();
    }
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
        <>
          {/* <UserStateProvider> */}
          <>
            <div className={styles.frameParent}>
              <BVNVerified result={userKYC?.kyc_bvn} />
              <NextOfKinVerified result={userKYC?.kyc_next_kins} />
              <IDVerified result={userKYC?.kyc_id} />
              <AddressVerified result={userKYC?.kyc_address} />
            </div>
          </>
          <>
            <NextKinKYCModel />
          </>
          {/* </UserStateProvider> */}
        </>
      )}
    </>
  );
};

export default UserKYC;
