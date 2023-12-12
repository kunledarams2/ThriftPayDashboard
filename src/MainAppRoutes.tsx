import { Routes, Route, Navigate } from "react-router-dom";
import InnerContent from "./components/InnerContent";
import Dashboard from "./components/dashboard/Dashboard";

import Wallet from "./components/Wallet";
import KYC from "./components/KYC";
import Profile from "./components/Profile";
import Customers from "./Pages/Customers/Dashboard";
import ThriftPlan from "./components/thriftPlan/ThriftPlan";
import ThriftPlanSummary from "./components/thriftPlan/ThriftPlanSummary";
import ThriftPlanContent from "./components/thriftPlan/ThriftPlanContent";
import ThriftPlanInfoContent from "./components/thriftPlan/ThriftPlanInfoContent";
import ThriftPlanDetail from "./components/thriftPlan/ThriftPlanDetail";
import { TDashboardContent } from "./components/dashboard/TDashboard";
import WalletOverview from "./components/Wallet/WalletOverview";

const MainAppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<InnerContent />}>
        <Route path="/" element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/thrift" element={<ThriftPlanContent />}>
          <Route path="/thrift" element={<Navigate replace to="plan" />} />
          <Route path="plan" element={<ThriftPlan />} />
          <Route path="/thrift/summary" element={<ThriftPlanInfoContent />}>
            <Route
              path="/thrift/summary"
              element={<Navigate replace to="overview" />}
            />
            <Route path="overview" element={<ThriftPlanSummary />} />
            <Route path="detail" element={<ThriftPlanDetail />} />
          </Route>
        </Route>
        <Route path="wallet" element={<WalletOverview />} />
        <Route path="kyc" element={<KYC />} />
        <Route path="user" element={<Customers />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      {/* <Route path="/home" element={<LoginPage />} /> */}
    </Routes>
  );
};

export default MainAppRoutes;
