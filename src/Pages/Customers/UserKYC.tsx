import React from "react";
import KYCstatus from "../../components/Customers/KYC/KYCstatus";
import BVNVerified from "../../components/Customers/KYC/BVNVerified";
import NextOfKinVerified from "../../components/Customers/KYC/NextOfKinVerified";
import IDVerified from "../../components/Customers/KYC/IDVerified";
import AddressVerified from "../../components/Customers/KYC/AddressVerified";

const UserKYC = () => {
  return (
    <>
      <BVNVerified />
      <NextOfKinVerified />
      <IDVerified />
      <AddressVerified />
    </>
  );
};

export default UserKYC;
