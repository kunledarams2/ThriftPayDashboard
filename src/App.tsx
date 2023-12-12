import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
// import "./styles.css";
import SignuPage from "./components/SignuPage";
import Registration from "./components/auth/Registration";
import SignUpEmpty from "./components/SignUpEmpty";
import Alert from "./components/Alert";
import LoginPage from "./components/auth/LoginPage";
import ForgottenPasswordPage from "./components/auth/ForgottenPasswordPage";
import ResetPassword from "./components/auth/ResetPassword";
import { Routes, Route } from "react-router-dom";
import DashboardSlider from "./components/dashboard/DashboardSlider";
import Dashboard from "./components/dashboard/Dashboard";
import MainApp from "./components/MainApp";
import BoardUser from "./Pages/Customers/Dashboard";


function App() {
  return (
    <div>
      {/* <LoginPage /> */}

      <Routes>
        <Route path="*" element={<MainApp />} />
        {/* <Route path="/home" element={<LoginPage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/forgot/password" element={<ForgottenPasswordPage />} />
        <Route path="/forgot/password/reset" element={<ResetPassword />} />
        {/* <Route path="/user" element={<BoardUser />} /> */}
        {/* <Route path="/mod" element={<BoardModerator />} /> */}
        {/* <Route path="/admin" element={<BoardAdmin />} /> */}
      </Routes>
    </div>
  );
}

export default App;
