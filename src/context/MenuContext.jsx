import React, { createContext, useState, useContext } from "react";

// Create a context for authentication
const MenusContext = createContext();

const initialModalState = {
  loginModal: false,
  signupModal: false,
  resetModal: false,
  forgotModal: false,
};
export const MenusProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [openModals, setOpenModals] = useState(initialModalState);
  const login = (name) =>
    // setOpenModals((prev)=> ({
    //   ...prev,

    // }
    //   ))
    setUser({ name });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, openModals, setOpenModals }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useMenus = () => useContext(MenusContext);
