import React from "react";
import styles from "./idverified.module.css";
const IDVerified = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.iconsParent}>
        <img className={styles.icons2} alt="" src="Icons.png" />
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
          <div className={styles.div}>{`National Identity Number `}</div>
        </div>
        <div className={styles.idTypeParent}>
          <div className={styles.idType}>ID Number</div>
          <div className={styles.div}>23349494940</div>
        </div>
      </div>
    </div>
  );
};

export default IDVerified;
