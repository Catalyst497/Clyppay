import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "@/pages/Dashboard/DashboardPage";
import Onboarding from "@/pages/Onboarding/Onboarding";
import Login from "@/pages/login/Login";
import Signup from "@/pages/Signup/Signup";
import ForgotPage from "@/pages/Forgot/ForgotPage";
// import ResetPage from "@/pages/Reset/ResetPage";
import ProtectedRoute from "@/components/shared/custom/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/onboarding" />} />
          <Route path="onboarding" element={<Onboarding />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          {/* <Route element = {<ProtectedRoute /> }>
          <Route path="reset" element={<ResetPage />} />
          </Route> */}
          <Route path="forgot" element={<ForgotPage />} />
          <Route element = {<ProtectedRoute /> }>
          <Route path="dashboard/*" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
