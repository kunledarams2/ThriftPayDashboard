import React from "react";
import styles from "./bvnverified.module.css";
import { KycBvn } from "../../../services/userServices";
import EmptyContainer from "../../utils/EmptyContainer";
import KYCstatus from "./KYCstatus";
import bvnIcon from "../../../assets/user/bvn_icon.png";
import { KYCType } from "../../utils/constants/constants";

interface Props {
  result: KycBvn | undefined;
  // openM: any;
}
const BVNVerified = ({ result }: Props) => {
  return (
    <>
      {result == null ? (
        <KYCstatus
          isVerified={false}
          kycType={KYCType.BVN}
          icon={bvnIcon}
          nkycBVN={result}
          kycAddress={undefined}
          kycId={undefined}
          kycNexkKins={undefined}
        />
      ) : (
        <>
          {result?.verified ? (
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.iconsParent}>
                  <img className={styles.icons2} alt="" src={bvnIcon} />
                  <div className={styles.bvnVerificationParent}>
                    <div className={styles.bvnVerification}>
                      BVN Verification
                    </div>
                    <div className={styles.bagde}>
                      <div className={styles.completed}>verified</div>
                    </div>
                  </div>
                </div>
                <div className={styles.icons3} />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.avatarsParent}>
                  <img
                    className={styles.avatarsIcon}
                    alt=""
                    src={result.image_url}
                  />
                  <div className={styles.verificationPhotoWrapper}>
                    <div className={styles.verificationPhoto}>
                      Verification Photo
                    </div>
                  </div>
                </div>
                <div className={styles.bvnParent}>
                  <div className={styles.bvn}>BVN</div>
                  <div className={styles.div}>{result.bvn}</div>
                </div>
              </div>
            </div>
          ) : (
            <KYCstatus
              isVerified={true}
              kycType="BVN Verification"
              icon={bvnIcon}
              nkycBVN={result}
              kycAddress={undefined}
              kycId={undefined}
              kycNexkKins={undefined}
            />
          )}
        </>
      )}
    </>
  );
};

export default BVNVerified;
