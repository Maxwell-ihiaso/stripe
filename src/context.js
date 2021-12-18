import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [isShowSubmenu, setIsShowSubmenu] = useState(false);
  const [location, setLocation] = useState({
    page: "developers",
    position: { top: "4rem", left: "50%" },
  });

  const toggleSidebar = () => {
    setIsShowSidebar(!isShowSidebar);
  };

  const closeSubmenu = () => {
    setIsShowSubmenu(false);
  };

  const openSubmenu = () => {
    setIsShowSubmenu(true);
  };
  return (
    <AppContext.Provider
      value={{
        isShowSidebar,
        isShowSubmenu,
        location,
        toggleSidebar,
        closeSubmenu,
        openSubmenu,
        sublinks,
        setLocation,
        setIsShowSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
