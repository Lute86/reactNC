import React, { useState } from 'react';
import './SwitchButton.css'; 
import useLocalStorage from '../../hooks/useLocalStorage';


const SwitchButton = ({ onToggle, identifier }) => {
  const [switchIsOn, setswitchIsOn] = identifier
  ? useLocalStorage(`switch`, false)
  : useState(false);

  const handleClick = () => {
    setswitchIsOn(!switchIsOn);
    onToggle()
  };

  return (
    <div
      className={`switch-button ${switchIsOn ? 'on' : 'off'}`}
      onClick={handleClick}
    >
      <div className="ball" />
    </div>
  );
};

export default SwitchButton;