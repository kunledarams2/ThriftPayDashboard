import React, { useState } from "react";
import styles from "./kycstatus.module.css";
import NextKinKYCModel from "../../modal/NextKinKYCModel";
import {
  KycAddress,
  KycBvn,
  KycID,
  KycNextKins,
  UserKYCData,
} from "../../../services/userServices";
import { useUser } from "../../../Pages/Customers/UserStateProvider";
import KYC from "../../KYC";

interface Props {
  kycType: string | undefined;
  isVerified: boolean | undefined;
  icon: string;
  nkycBVN: KycBvn | undefined;
  kycAddress: KycAddress | undefined;
  kycId: KycID | undefined;
  kycNexkKins: KycNextKins | undefined;
}

const KYCstatus = ({
  kycType,
  isVerified,
  icon,
  nkycBVN,
  kycAddress,
  kycId,
  kycNexkKins,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const closeModalHander = () => {
    setOpen(false);
  };

  const { parentState, setParentState } = useUser();

  return (
    <>
      <div className={styles.iconsParent}>
        <img className={styles.icons2} alt="" src={icon} />
        {/* <img src={icon} width={40} height={40} /> */}
        <div className={styles.bvnVerificationParent}>
          <div className={styles.bvnVerification}>{kycType}</div>
          {isVerified ? (
            <div className={styles.bagde2}>
              <div className={styles.paid}>Submitted</div>
            </div>
          ) : (
            <div className={styles.bagde}>
              <div className={styles.pending}>Awaiting Input</div>
            </div>
          )}
        </div>
        {isVerified ? (
          <div
            className={styles.button}
            onClick={() => {
              setParentState({
                openReview: true,
                kycBVN: nkycBVN,
                kycAddress: kycAddress,
                kycId: kycId,
                kycNexkKins: kycNexkKins,
                kycType: kycType,
                kycInfoLoaded: true,
              });
              // setOpen(parentState.openReview);
            }}
          >
            <div className={styles.button1}>Review</div>
          </div>
        ) : (
          <div></div>
        )}

        <div className={styles.icons3} />
      </div>

      <>
        {/* <NextKinKYCModel
        // open={open}
        // close={closeModalHander}
        // kyc={kycType}
        // kycBVN={nkycBVN}
        // kycAddress={kycAddress}
        // kycId={kycId}
        // kycNexkKins={kycNexkKins}
        /> */}

        {/* {open && (
          <>
           
          </>
        )} */}
        {/* {kycType == "Next of Kin" ? (
          <>
           
          </>
        ) : (
          <div></div>
        )} */}
      </>
    </>
  );
};

export default KYCstatus;
