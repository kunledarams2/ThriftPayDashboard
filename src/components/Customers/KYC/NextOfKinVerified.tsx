import React from "react";
import styles from "./nextofkin.module.css";
const NextOfKinVerified = () => {
  return (
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
          <div className={styles.john}>{`John `}</div>
        </div>
        <div className={styles.firstNameParent}>
          <div className={styles.firstName}>Last Name</div>
          <div className={styles.john}>Doe</div>
        </div>
        <div className={styles.lastNameGroup}>
          <div className={styles.lastName1}>Last name</div>
          <div className={styles.daramola}>Daramola</div>
        </div>
        <div className={styles.firstNameParent}>
          <div className={styles.firstName}>Email Address</div>
          <div className={styles.john}>Dorcasdaramola@example.com</div>
        </div>
        <div className={styles.firstNameParent}>
          <div className={styles.firstName}>Phone Number</div>
          <div className={styles.john}>08059859595</div>
        </div>
        <div className={styles.firstNameParent}>
          <div className={styles.firstName}>Relationship</div>
          <div className={styles.john}>Spouse</div>
        </div>
        <div className={styles.firstNameParent}>
          <div className={styles.firstName}>Residential Address</div>
          <div className={styles.john}>12, Kolawole street, Ogba, Lagos</div>
        </div>
      </div>
    </div>
  );
};

export default NextOfKinVerified;
