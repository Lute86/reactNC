  import React, { createContext, useContext, useEffect, useState } from "react";
  import useLocalStorage from "../hooks/useLocalStorage";

  const AppContext = createContext()

  const AppProvider = ({children}) => {
    const API_URL ='https://nodenc-dev-nskf.3.us-1.fl0.io'
    //const API_URL ='http://localhost:4003'
    const [showLinks, setShowLinks]= useLocalStorage('showLinks', false)
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
    const [loggedUser, setLoggedUser] = useState(localStorage.getItem('user'));

    function handleDarkMode(arg) {
      if(arg=="no")return document.getElementById('root').classList.add(darkMode ? 'dark-mode' : 'light-mode');
      setDarkMode(prevDarkMode => {
        document.getElementById('root').classList.add(!prevDarkMode ? 'dark-mode' : 'light-mode');
        document.getElementById('root').classList.remove(!prevDarkMode ? 'light-mode' : 'dark-mode');
        return !prevDarkMode;
      });
    }

    return <AppContext.Provider value={{
      showLinks,setShowLinks,
      darkMode,setDarkMode,
      handleDarkMode, API_URL,
      loggedUser, setLoggedUser
      }} >
        {children}
    </AppContext.Provider>
  }

  export const useGlobalState = () => {
    return useContext(AppContext);
  }

  export {AppContext, AppProvider}