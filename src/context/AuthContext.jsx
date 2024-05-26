import React, { createContext, useState, useContext } from "react";

// Create a context for authentication
const AuthContext = createContext();

const initialModalState = {
  loginModal: false,
  signupModal: false,
  resetModal: false,
  forgotModal: false,
};
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [openModals, setOpenModals] = useState(initialModalState);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const login = (name) =>
    // setOpenModals((prev)=> ({
    //   ...prev,

    // }
    //   ))
    setUser({ name });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{ user, isSidebarOpen, login, logout, openModals, setOpenModals, setIsSidebarOpen}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
