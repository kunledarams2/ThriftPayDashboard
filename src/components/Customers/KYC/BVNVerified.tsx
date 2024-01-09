import React from "react";
import styles from "./bvnverified.module.css";
const BVNVerified = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.iconsParent}>
          <img className={styles.icons2} alt="" src="Icons.png" />
          <div className={styles.bvnVerificationParent}>
            <div className={styles.bvnVerification}>BVN Verification</div>
            <div className={styles.bagde}>
              <div className={styles.completed}>verified</div>
            </div>
          </div>
        </div>
        <div className={styles.icons3} />
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.avatarsParent}>
          <img className={styles.avatarsIcon} alt="" src="Avatars.png" />
          <div className={styles.verificationPhotoWrapper}>
            <div className={styles.verificationPhoto}>Verification Photo</div>
          </div>
        </div>
        <div className={styles.bvnParent}>
          <div className={styles.bvn}>BVN</div>
          <div className={styles.div}>{`2323457687878 `}</div>
        </div>
      </div>
    </div>
  );
};

export default BVNVerified;
