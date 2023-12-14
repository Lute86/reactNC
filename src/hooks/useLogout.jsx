import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../Context/context";

function useLogout() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();
  const { setLoggedUser } = useGlobalState()
  const logout = async () => {
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setLoggedUser(null)
      navigate("/login"); 
    } catch (error) {
      setLoggedUser(null)
      navigate("/login"); 
    }
  };

  return { logout, isLoggingOut };
}

export default useLogout;
