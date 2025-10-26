import React from "react";
import styles from "./adddressverified.module.css";
import { KycAddress } from "../../../services/userServices";
import KYCstatus from "./KYCstatus";
import addressIcon from "../../../assets/user/icon_address.png";
import { KYCType } from "../../utils/constants/constants";
interface Props {
  result: KycAddress | undefined;
}

const AddressVerified = ({ result }: Props) => {
  return (
    <>
      {result == null ? (
        <KYCstatus
          kycType={KYCType.Address}
          isVerified={false}
          icon={addressIcon}
          nkycBVN={undefined}
          kycAddress={result}
          kycId={undefined}
          kycNexkKins={undefined}
        />
      ) : (
        <>
          {result.verified ? (
            <div className={styles.frameParent}>
              <div className={styles.iconsParent}>
                <img className={styles.icons3} alt="" src={addressIcon} />
                <div className={styles.addressVerificationParent}>
                  <div className={styles.addressVerification}>
                    Address Verification
                  </div>
                  <div className={styles.bagde}>
                    <div className={styles.completed}>verified</div>
                  </div>
                </div>
              </div>
              <div className={styles.icons4} />
              <div className={styles.frameGroup}>
                <div className={styles.addressParent}>
                  <div className={styles.address}>Address</div>
                  <div className={styles.kogi}>{result.address}</div>
                </div>
                <div className={styles.addressParent}>
                  <div className={styles.address}>Landmark</div>
                  <div className={styles.kogi}>{result.landmark}</div>
                </div>
                <div className={styles.addressParent}>
                  <div className={styles.address}>State</div>
                  <div className={styles.kogi}>{result.state}</div>
                </div>
                <div className={styles.addressParent}>
                  <div className={styles.address}>LGA</div>
                  <div className={styles.kogi}>{result.local_gov}</div>
                </div>
                <div className={styles.utilityBillParent}>
                  <div className={styles.address}>Doc Type</div>
                  <div className={styles.doc}>
                    <div className={styles.bxsfilePdfParent}>
                      <img
                        className={styles.icons3}
                        alt=""
                        src={result.valid_address_doc}
                      />
                      <div className={styles.johnDoeElectricity1}></div>
                      <div className={styles.icons5} />
                    </div>
                    <img
                      className={styles.digitalMarketingServicesAgr1}
                      alt=""
                      src={result.valid_address_doc}
                    />
                    <div className={styles.clickToViewWrapper}>
                      <div className={styles.clickToView1}>Click to view</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <KYCstatus
              kycType="Address Verification"
              isVerified={true}
              icon={addressIcon}
              nkycBVN={undefined}
              kycAddress={result}
              kycId={undefined}
              kycNexkKins={undefined}
            />
          )}
        </>
      )}
    </>
  );
};

export default AddressVerified;
