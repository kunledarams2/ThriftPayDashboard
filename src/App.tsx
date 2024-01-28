// // import { useState } from "react";
// // import reactLogo from "./assets/react.svg";
// // import "./App.css";
// // import "./styles.css";
// // import SignuPage from "./components/SignuPage";
// // import Registration from "./components/auth/Registration";
// // import SignUpEmpty from "./components/SignUpEmpty";
// // import Alert from "./components/Alert";
// // import LoginPage from "./components/auth/LoginPage";
// // import ForgottenPasswordPage from "./components/auth/ForgottenPasswordPage";
// // import ResetPassword from "./components/auth/ResetPassword";
// // import { Routes, Route } from "react-router-dom";
// // import DashboardSlider from "./components/dashboard/DashboardSlider";
// // import Dashboard from "./components/dashboard/Dashboard";
// // import MainApp from "./components/MainApp";
// // import BoardUser from "./Pages/Customers/Dashboard";
// // import SideBar from './components/dashboard/SideBar'

// import "react-tooltip/dist/react-tooltip.css";
// import Root from "./Pages/Root/Root";
// import Dashboard from "./Pages/Dashboard/Dashboard";
// import Customers from "./Pages/Customers/Dashboard";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Navigate,
// } from "react-router-dom";
// import ThriftPlan from "./components/thriftPlan/ThriftPlan";
// import ThriftPlanSummary from "./components/thriftPlan/ThriftPlanSummary";

// import ErrorPage from "./Pages/ErrorPage";
// import AuthRoot from "./Pages/AuthRoot/AuthRoot";
// import LoginPage from "./components/oldies/auth/LoginPage";
// import Registration from "./components/oldies/auth/Registration";
// import ForgottenPasswordPage from "./components/oldies/auth/ForgottenPasswordPage";
// import ResetPassword from "./components/oldies/auth/ResetPassword";
// import DashboardRoot from "./Pages/DashRoot/DashBoardRoot";
// import ThriftPlanContent from "./components/thriftPlan/ThriftPlanContent";
// import ThriftPlanInfoContent from "./components/thriftPlan/ThriftPlanInfoContent";
// import ThriftPlanDetail from "./components/thriftPlan/ThriftPlanDetail";
// import UserOverview from "./Pages/Customers/UserOverview";
// import UserContent from "./Pages/Customers/UserContent";
// import UserContentList from "./Pages/Customers/UserContentList";
// import UserContentDetail from "./Pages/Customers/UserContentDetail";
// import UserThriftPlan from "./Pages/Customers/UserThriftPlan";
// import UserWallet from "./Pages/Customers/UserWallet";
// import UserKYC from "./Pages/Customers/UserKYC";
// import { fetchDashboardStat } from "./services/dashboardService";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       // {
//       //   index: true,
//       //   element: <Navigate to="/login" replace />,
//       // },
//       {
//         path: "/",
//         element: <AuthRoot />,
//         children: [
//           {
//             index: true,
//             element: <Navigate to="/login" replace />,
//           },
//           { path: "/login", element: <LoginPage /> },
//           { path: "/register", element: <Registration /> },
//           { path: "/forgot/password", element: <ForgottenPasswordPage /> },
//           { path: "/forgot/password/reset", element: <ResetPassword /> },
//         ]
//       }
//         ],
//     },

//       {
//         // path: "",

//         element: <DashboardRoot />,
//         children: [
//           {
//             loader: () => fetchDashboardStat(),
//             path: "/dashboard",
//             element: <Dashboard />,
//           },
//           {
//             path: "/users",
//             element: <Customers />,
//             children: [
//               {
//                 path: "overview",
//                 element: <UserOverview />,
//               },
//               {
//                 element: <UserContent />,
//                 children: [
//                   {
//                     path: "all",
//                     element: <UserContentList />,
//                   },
//                   {
//                     path: "detail",
//                     element: <UserContentDetail />,
//                     children: [
//                       {
//                         path: "plan",
//                         element: <UserThriftPlan />,
//                       },
//                       {
//                         path: "wallet",
//                         element: <UserWallet />,
//                       },
//                       {
//                         path: "kyc",
//                         element: <UserKYC />,
//                       },
//                     ],
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             element: <ThriftPlanContent />,
//             children: [
//               { path: "/thrift", element: <ThriftPlan /> },
//               {
//                 path: "/thrift/summary",
//                 element: <ThriftPlanInfoContent />,
//                 children: [
//                   {
//                     path: "overview",
//                     element: <ThriftPlanSummary />,
//                   },
//                   {
//                     path: "detail",
//                     element: <ThriftPlanDetail />,
//                   },
//                 ],
//               },
//               { path: "/thrift", element: <ThriftPlan /> },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;




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

import "react-tooltip/dist/react-tooltip.css";
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
import UserOverview from "./Pages/Customers/UserOverview";
import UserContent from "./Pages/Customers/UserContent";
import UserContentList from "./Pages/Customers/UserContentList";
import UserContentDetail from "./Pages/Customers/UserContentDetail";
import UserThriftPlan from "./Pages/Customers/UserThriftPlan";
import UserWallet from "./Pages/Customers/UserWallet";
import UserKYC from "./Pages/Customers/UserKYC";
import { fetchDashboardStat } from "./services/dashboardService";

import Wallet from "./Pages/Wallet/WalletOverview";
import WalletOverview from "./Pages/Wallet/overview/Overview"

<!-- import Wallet from "./components/Wallet"; -->
import { fetchAllUser } from "./services/userServices";


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
        // path: "",

        element: <DashboardRoot />,
        children: [
          {
            loader: () => fetchDashboardStat(),
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            // path: "/users",
            element: <Customers />,
            children: [
              {
                path: "/users",
                element: <UserOverview />,
              },
              {
                path: "/users/info",
                element: <UserContent />,
                children: [
                  {
                    loader: () => fetchAllUser(),
                    path: "all",
                    element: <UserContentList />,
                  },
                  {
                    path: "detail",
                    element: <UserContentDetail />,
                    children: [
                      {
                        path: "plan",
                        element: <UserThriftPlan />,
                        // loader: async ({ params }) => {
                        //   return fetch(
                        //     `https://thriftpay.onrender.com/api/thrift/user/${params.userId}/plans.json`
                        //   );
                        // },
                      },
                      {
                        path: "wallet",
                        element: <UserWallet />,
                      },
                      {
                        path: "kyc",
                        element: <UserKYC />,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            element: <ThriftPlanContent />,
            children: [
              { path: "/thrift", element: <ThriftPlan /> },
              {
                path: "/thrift/summary",
                element: <ThriftPlanInfoContent />,
                children: [
                  {
                    path: "overview",
                    element: <ThriftPlanSummary />,
                  },
                  {
                    path: "detail",
                    element: <ThriftPlanDetail />,
                  },
                ],
              },
              { path: "/thrift", element: <ThriftPlan /> },
            ],
          },
          {

            path: "/wallets",
            element: <Wallet />,
            // errorElement: <ErrorPage/>,
            children: [
              {
              index: true,
              element: <Navigate to="overview" replace/>
            },
            {
              path:"overview",
              element: <WalletOverview/>
            },{
              path:"transactions",
              element: <div>Transactions</div>
            }]

<!--             path: "/wallets",
            element: <Wallet />, -->

          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
