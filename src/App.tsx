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
import Root from './Pages/Root/Root'
import Dashboard from './Pages/Dashboard/Dashboard'
import Customers from './Pages/Customers/Dashboard'
import {createBrowserRouter, RouterProvider,Navigate} from 'react-router-dom'
import ThriftPlan from './components/thriftPlan/ThriftPlan'
import ThriftPlanSummary from './components/thriftPlan/ThriftPlanSummary'

import ErrorPage from './Pages/ErrorPage';



const router = createBrowserRouter([{path:'/',element:<Root/>,errorElement:<ErrorPage/>,children:[{
  index: true,
  element: <Navigate to="/dashboard" replace />,
},{
  path:'/dashboard',element:<Dashboard />
},{path:'thrift-plans',element:<div>Yo</div>},{path:'/thrift/summary/overview',element:<div>Hello</div>},{path:'wallets',element:<div>This is the wallet page</div>},{path:'users',element:<Customers/>}]}])

function App() {

  return (

    <RouterProvider router={router}/>
    
    
  );
}

export default App;
