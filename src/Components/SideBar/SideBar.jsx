import React, { useEffect, useState } from 'react';
import { FiUser, FiBriefcase, FiDollarSign } from 'react-icons/fi';
import { MdOpenInFull, MdOutlineClose  } from "react-icons/md";
import './Sidebar.css';

const Sidebar = ({choice}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      {isOpen ? (
        <>
           <button className="side-btn close-btn" onClick={toggleSidebar}>
            <MdOutlineClose size={30}/>
          </button>
          <nav className="sidebar-nav">
            <ul>
              <li>
                <a onClick={()=>choice('profile')}>
                  <FiUser className="icon" />
                  Profile
                </a>
              </li>
              <li>
                <a onClick={()=>choice('accounts')}>
                  <FiBriefcase className="icon" />
                  Accounts
                </a>
              </li>
              <li>
                <a onClick={()=>choice('transactions')}>
                  <FiDollarSign className="icon" />
                  Transactions
                </a>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <>
          <button className="side-btn open-btn" onClick={toggleSidebar}>
            <MdOpenInFull size={30}/>
          </button>
          <nav className="sidebar-nav sidebar-nav-closed">
            <ul>
              <li>
                <a onClick={()=>choice('profile')}>
                  <FiUser className="icon" />
                </a>
              </li>
              <li>
                <a onClick={()=>choice('accounts')}>
                  <FiBriefcase className="icon" />
                </a>
              </li>
              <li>
                <a onClick={()=>choice('transactions')}>
                  <FiDollarSign className="icon" />
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </aside>
  );
};

export default Sidebar;