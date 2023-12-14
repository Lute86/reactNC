import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalState } from "../../Context/context";

function Nav() {
  const { darkMode, handleDarkMode, loggedUser } = useGlobalState();
  const navigate = useNavigate();
  const menu = [
    { name: "Inicio", enlace: "/home", key: 1 },
    { name: "Tutorial", enlace: "/tutorial", key: 3 },
    { name: "Ingresar", enlace: "/login", key: 4 },
  ];
  const loggedMenu = [
    { name: "Inicio", enlace: "/home", key: 1 },
    { name: "Panel", enlace: "/panel", key: 2 },
    { name: "Tutorial", enlace: "/tutorial", key: 3 },
    { name: "Salir", enlace: "/logout", key: 4 },
  ];

  function navMenu(menu){
    return menu.map((item) => {
      return (
        <li className="nav-menu-item" key={item.key}>
          <Link to={item.enlace}>{item.name}</Link>
        </li>
      );
      })
  }

  useEffect(() => {
    // if (!loggedUser) {
    //   navigate("/home");
    // }
  },[loggedUser])

  return (
    <nav className="nav-menu-container">
      <ul className="nav-menu">
        {loggedUser ? navMenu(loggedMenu) : navMenu(menu) }
      </ul>
      <div className="nav-icons" onClick={handleDarkMode}>
        {/* Dark or light mode */}
        <div className="nav-icons-item">
          {!darkMode ? <FaMoon size={25} /> : <FaSun size={25} />}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
