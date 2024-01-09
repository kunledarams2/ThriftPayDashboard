import React from "react";
import styles from "./adddressverified.module.css";
const AddressVerified = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.iconsParent}>
        <img className={styles.icons3} alt="" src="Icons.png" />
        <div className={styles.addressVerificationParent}>
          <div className={styles.addressVerification}>Address Verification</div>
          <div className={styles.bagde}>
            <div className={styles.completed}>verified</div>
          </div>
        </div>
      </div>
      <div className={styles.icons4} />
      <div className={styles.frameGroup}>
        <div className={styles.addressParent}>
          <div className={styles.address}>Address</div>
          <div className={styles.kogi}>23, Olaoluwa street, Lokoja</div>
        </div>
        <div className={styles.addressParent}>
          <div className={styles.address}>Landmark</div>
          <div className={styles.kogi}>Mobile Filling Station</div>
        </div>
        <div className={styles.addressParent}>
          <div className={styles.address}>State</div>
          <div className={styles.kogi}>Kogi</div>
        </div>
        <div className={styles.addressParent}>
          <div className={styles.address}>LGA</div>
          <div className={styles.kogi}>Ibaji LGA</div>
        </div>
        <div className={styles.utilityBillParent}>
          <div className={styles.address}>Utility Bill</div>
          <div className={styles.doc}>
            <div className={styles.bxsfilePdfParent}>
              <img className={styles.icons3} alt="" src="bxs:file-pdf.png" />
              <div className={styles.johnDoeElectricity1}>
                John Doe Electricity Bill. PDF
              </div>
              <div className={styles.icons5} />
            </div>
            <img
              className={styles.digitalMarketingServicesAgr1}
              alt=""
              src="Digital Marketing Services Agreement Example.pdf - Page 1 of 11.png"
            />
            <div className={styles.clickToViewWrapper}>
              <div className={styles.clickToView1}>Click to view</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressVerified;
