import React, { createContext, useState, useContext } from "react";
import { initialModalState } from "@/lib/Constants";
const ModalContext = createContext();



export const ModalProvider = ({ children }) => {
  
  const [openModals, setOpenModals] = useState(initialModalState);
  const [isSidebarOpen, setIsSidebarOpen]
   = useState(false);

 
  


  return (
    <ModalContext.Provider
      value={{ isSidebarOpen, openModals, setOpenModals, setIsSidebarOpen}}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
