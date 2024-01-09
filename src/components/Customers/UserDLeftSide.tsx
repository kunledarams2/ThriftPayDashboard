import React from "react";
import styles from "./usedleftside.module.css";
const UserDLeftSide = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.avatarsParent}>
        <img className={styles.avatarsIcon} alt="" src="Avatars.png" />
        <div className={styles.dorcasDaramola}>Dorcas Daramola</div>
        <div className={styles.dorcasDaramola1}>Dorcas Daramola</div>
        <div className={styles.registrationDate15092023Parent}>
          <div className={styles.registrationDate150920231}>
            Registration Date: 15/09/2023, 14:30
          </div>
          <div className={styles.registrationDate150920231}>
            Last Login: 15/09/2023, 14:30
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.personalDetailsParent}>
          <div className={styles.personalDetails}>Personal Details</div>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.firstNameParent}>
                <div className={styles.firstName}>First Name</div>
                <div className={styles.dorcas}>Dorcas</div>
              </div>
              <div className={styles.firstNameParent}>
                <div className={styles.firstName}>Last Name</div>
                <div className={styles.dorcas}>Daramola</div>
              </div>
            </div>
            <div className={styles.lastNameGroup}>
              <div className={styles.firstName}>Last name</div>
              <div className={styles.dorcas}>Daramola</div>
            </div>
            <div className={styles.genderParent}>
              <div className={styles.firstName}>Gender</div>
              <div className={styles.dorcas}>Female</div>
            </div>
            <div className={styles.genderParent}>
              <div className={styles.firstName}>Date of Birth</div>
              <div className={styles.dorcas}>August 25, 1998</div>
            </div>
          </div>
        </div>
        <img className={styles.dividerIcon} alt="" src="Divider.png" />
        <div className={styles.personalDetailsParent}>
          <div className={styles.personalDetails}>Contact Details</div>
          <div className={styles.frameDiv}>
            <div className={styles.emailParent}>
              <div className={styles.firstName}>{`Email `}</div>
              <div className={styles.dorcas}>Dorcasdaramola@example.com</div>
            </div>
            <div className={styles.emailParent}>
              <div className={styles.firstName}>Phone Number</div>
              <div className={styles.dorcas}>080354848484</div>
            </div>
            <div className={styles.genderGroup}>
              <div className={styles.gender1}>Gender</div>
              <div className={styles.female1}>Female</div>
            </div>
            <div className={styles.genderGroup}>
              <div className={styles.gender1}>Date of Birth</div>
              <div className={styles.female1}>August 25, 1998</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDLeftSide;
