import React from "react";
import { Outlet } from "react-router-dom";
import { UserStateProvider } from "./UserStateProvider";
import NextKinKYCModel from "../../components/modal/NextKinKYCModel";

const UserContent = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default UserContent;
