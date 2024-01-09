import React from "react";
import { Outlet } from "react-router-dom";

const UserContent = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default UserContent;
