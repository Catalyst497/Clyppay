// ProtectedRoute.js
import React from "react";
import { Route, Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext"; // Assuming you have an authentication context

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { isAuthenticated } = useAuth(); // Get authentication state from context

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
  
  
};

export default ProtectedRoute;
