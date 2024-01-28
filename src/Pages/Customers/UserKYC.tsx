import React from "react";
import KYCstatus from "../../components/Customers/KYC/KYCstatus";
import BVNVerified from "../../components/Customers/KYC/BVNVerified";
import NextOfKinVerified from "../../components/Customers/KYC/NextOfKinVerified";
import IDVerified from "../../components/Customers/KYC/IDVerified";
import AddressVerified from "../../components/Customers/KYC/AddressVerified";
import styles from "./userkyc.module.css";
import { useLocation } from "react-router-dom";

const UserKYC = () => {
  const { state } = useLocation();
  const { data } = state;
  console.log(data);
  return (
    <>
      <div className={styles.frameParent}>
        <BVNVerified />
        <NextOfKinVerified />
        <IDVerified />
        <AddressVerified />
      </div>
    </>
  );
};

export default UserKYC;
