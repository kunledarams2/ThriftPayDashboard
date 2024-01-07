// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import "./App.css";
// import "./styles.css";
// import SignuPage from "./components/SignuPage";
// import Registration from "./components/auth/Registration";
// import SignUpEmpty from "./components/SignUpEmpty";
// import Alert from "./components/Alert";
// import LoginPage from "./components/auth/LoginPage";
// import ForgottenPasswordPage from "./components/auth/ForgottenPasswordPage";
// import ResetPassword from "./components/auth/ResetPassword";
// import { Routes, Route } from "react-router-dom";
// import DashboardSlider from "./components/dashboard/DashboardSlider";
// import Dashboard from "./components/dashboard/Dashboard";
// import MainApp from "./components/MainApp";
// import BoardUser from "./Pages/Customers/Dashboard";
// import SideBar from './components/dashboard/SideBar'
import Root from "./Pages/Root/Root";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Customers from "./Pages/Customers/Dashboard";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ThriftPlan from "./components/thriftPlan/ThriftPlan";
import ThriftPlanSummary from "./components/thriftPlan/ThriftPlanSummary";

import ErrorPage from "./Pages/ErrorPage";
import AuthRoot from "./Pages/AuthRoot/AuthRoot";
import LoginPage from "./components/oldies/auth/LoginPage";
import Registration from "./components/oldies/auth/Registration";
import ForgottenPasswordPage from "./components/oldies/auth/ForgottenPasswordPage";
import ResetPassword from "./components/oldies/auth/ResetPassword";
import DashboardRoot from "./Pages/DashRoot/DashBoardRoot";
import ThriftPlanContent from "./components/thriftPlan/ThriftPlanContent";
import ThriftPlanInfoContent from "./components/thriftPlan/ThriftPlanInfoContent";
import ThriftPlanDetail from "./components/thriftPlan/ThriftPlanDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   index: true,
      //   element: <Navigate to="/login" replace />,
      // },
      {
        path: "/",
        element: <AuthRoot />,
        children: [
          {
            index: true,
            element: <Navigate to="/login" replace />,
          },
          { path: "/login", element: <LoginPage /> },
          { path: "/register", element: <Registration /> },
          { path: "/forgot/password", element: <ForgottenPasswordPage /> },
          { path: "/forgot/password/reset", element: <ResetPassword /> },
        ],
      },

      {
        element: <DashboardRoot />,
        children: [
          // {
          //   index: true,
          //   element: <Navigate to="/login" replace />,
          // },
          { path: "/dashboard", element: <Dashboard /> },
          { path: "users", element: <Customers /> },
          {
            element: <ThriftPlanContent />,
            children: [
              { path: "/thrift", element: <ThriftPlan /> },
              {
                element: <ThriftPlanInfoContent />,
                children: [
                  {
                    path: "/thrift/summary/overview",
                    element: <ThriftPlanSummary />,
                  },
                  {
                    path: "thrift/summary/detail",
                    element: <ThriftPlanDetail />,
                  },
                ],
              },
              { path: "/thrift", element: <ThriftPlan /> },
            ],
          },

          { path: "wallets", element: <div>This is the wallet page</div> },
          // { path: "users", element: <Customers /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
