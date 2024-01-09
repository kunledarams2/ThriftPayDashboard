import React from "react";
import styles from "./kycstatus.module.css";
const KYCstatus = () => {
  return (
    <div className={styles.iconsParent}>
      <img className={styles.icons2} alt="" src="Icons.png" />
      <div className={styles.bvnVerificationParent}>
        <div className={styles.bvnVerification}>BVN Verification</div>
        <div className={styles.bagde}>
          <div className={styles.pending}>Awaiting Input</div>
        </div>
        {/* <div className={styles.bagde}>
          <div className={styles.paid}>Submitted</div>
        </div> */}
      </div>
      {/* <div className={styles.button}>
        <div className={styles.button1}>Review</div>
      </div> */}
      <div className={styles.icons3} />
    </div>
  );
};

export default KYCstatus;
