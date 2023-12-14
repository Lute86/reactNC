import React, { useEffect } from "react";
import "./Logout.css";
import useLogout from "../../hooks/useLogout";
import { useGlobalState } from "../../Context/context";
import { useNavigate } from "react-router-dom";

function Logout() {
  const { logout, isLoggingOut } = useLogout(); 
  const { loggedUser } = useGlobalState();
  const navigate = useNavigate();
  
  const handleLogoutClick = () => {
    logout(); 
  };

  useEffect(()=>{
    if(!loggedUser){
      navigate("/login")
    }
  },[loggedUser])
  return (
    <div className="logout-container">
      <div className="logout-content">
        <p className="p-logout">¿Quieres terminar tu sesión?</p>
        <button onClick={handleLogoutClick} disabled={isLoggingOut}>
          {isLoggingOut ? "Saliendo..." : "Salir"}
        </button>
      </div>
    </div>
  );
}

export default Logout;
