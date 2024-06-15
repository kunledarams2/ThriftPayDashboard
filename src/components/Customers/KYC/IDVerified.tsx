import React from "react";
import styles from "./idverified.module.css";
import { KycID } from "../../../services/userServices";
import KYCstatus from "./KYCstatus";
import idIcon from "../../../assets/user/icon_id.png";
import { KYCType } from "../../utils/constants/constants";

interface Props {
  result: KycID | undefined;
}
const IDVerified = ({ result }: Props) => {
  return (
    <>
      {result == null ? (
        <KYCstatus
          kycType={KYCType.ID}
          isVerified={false}
          icon={idIcon}
          nkycBVN={undefined}
          kycAddress={undefined}
          kycId={result}
          kycNexkKins={undefined}
        />
      ) : (
        <>
          {result.verified ? (
            <div className={styles.frameParent}>
              <div className={styles.iconsParent}>
                <img className={styles.icons2} alt="" src={idIcon} />
                <div className={styles.idVerificationParent}>
                  <div className={styles.idVerification}>ID Verification</div>
                  <div className={styles.bagde}>
                    <div className={styles.completed}>verified</div>
                  </div>
                </div>
              </div>
              <div className={styles.icons3} />
              <div className={styles.frameGroup}>
                <div className={styles.idTypeParent}>
                  <div className={styles.idType}>ID Type</div>
                  <div className={styles.div}>{result.id_type}</div>
                </div>
                <div className={styles.idTypeParent}>
                  <div className={styles.idType}>ID Number</div>
                  <div className={styles.div}>{result.id_number}</div>
                </div>
              </div>
            </div>
          ) : (
            <KYCstatus
              kycType="ID Verification"
              isVerified={true}
              icon={idIcon}
              nkycBVN={undefined}
              kycAddress={undefined}
              kycId={result}
              kycNexkKins={undefined}
            />
          )}
        </>
      )}
    </>
  );
};

export default IDVerified;
