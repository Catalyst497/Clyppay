import React, { createContext, useState, useContext } from "react";

// Create a context for authentication
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [openModals, setOpenModals] = useState({
    loginModal: false,
    signupModal: false,
    resetModal: false,
    forgotModal: false,
  });
  const login = (name) => (
    // setOpenModals((prev)=> ({
    //   ...prev,
      
    // }
    //   ))
    setUser({ name })
    );
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, openModals, setOpenModals }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
