// ProtectedRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext"; // Assuming you have an authentication context

const ProtectedRoute = ({ children}) => {
  const { isAuthenticated } = useAuth(); // Get authentication state from context

  return isAuthenticated ? (
    {children}
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
