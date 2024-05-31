import React, { createContext, useState, useContext } from "react";

// Create a context for authentication
const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
     
  const [currentTheme,setCurrentTheme] = useState();




  return (
    <AuthContext.Provider
      value={{ user,  setUser,  }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
