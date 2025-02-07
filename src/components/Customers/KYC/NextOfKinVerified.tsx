import React from "react";
import styles from "./nextofkin.module.css";
import { KycNextKins } from "../../../services/userServices";
import { Result } from "postcss";
import KYCstatus from "./KYCstatus";
import nextOfKinsIcon from "../../../assets/user/icon_next_kins.png";
import { KYCType } from "../../utils/constants/constants";

interface Props {
  result: KycNextKins | undefined;
}

const NextOfKinVerified = ({ result }: Props) => {
  return (
    <>
      {result == null ? (
        <KYCstatus
          kycType={KYCType.NextKin}
          isVerified={false}
          icon={nextOfKinsIcon}
          nkycBVN={undefined}
          kycAddress={undefined}
          kycId={undefined}
          kycNexkKins={result}
        />
      ) : (
        <>
          {result.verified ? (
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.iconsParent}>
                  <img className={styles.icons2} alt="" src="Icons.png" />
                  <div className={styles.nextOfKinParent}>
                    <div className={styles.nextOfKin1}>Next of Kin</div>
                    <div className={styles.bagde}>
                      <div className={styles.completed}>verified</div>
                    </div>
                  </div>
                </div>
                <div className={styles.button1} />
                <div className={styles.icons3} />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.firstNameParent}>
                  <div className={styles.firstName}>First Name</div>
                  <div className={styles.john}>{result.first_name}</div>
                </div>
                <div className={styles.firstNameParent}>
                  <div className={styles.firstName}>Last Name</div>
                  <div className={styles.john}>{result.last_name} </div>
                </div>
                <div className={styles.lastNameGroup}>
                  <div className={styles.lastName1}>Last name</div>
                  <div className={styles.daramola}>Daramola</div>
                </div>
                <div className={styles.firstNameParent}>
                  <div className={styles.firstName}>Email Address</div>
                  <div className={styles.john}>{result.email} </div>
                </div>
                <div className={styles.firstNameParent}>
                  <div className={styles.firstName}>Phone Number</div>
                  <div className={styles.john}>{} </div>
                </div>
                <div className={styles.firstNameParent}>
                  <div className={styles.firstName}>Relationship</div>
                  <div className={styles.john}>{result.relationship}</div>
                </div>
                <div className={styles.firstNameParent}>
                  <div className={styles.firstName}>Residential Address</div>
                  <div className={styles.john}>{result.address}</div>
                </div>
              </div>
            </div>
          ) : (
            <KYCstatus
              kycType="Next of Kin"
              isVerified={true}
              icon={nextOfKinsIcon}
              nkycBVN={undefined}
              kycAddress={undefined}
              kycId={undefined}
              kycNexkKins={result}
            />
          )}
        </>
      )}
    </>
  );
};

export default NextOfKinVerified;
