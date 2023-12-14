import React, { useEffect } from 'react'
import './Header.css'
import {FaGooglePlay, FaApple} from 'react-icons/fa'
import Nav from './Nav'
import SwitchButton from '../Buttons/SwitchButton'
import { useGlobalState } from '../../Context/context'
import { Link } from 'react-router-dom'

function Header() {
  const {darkMode, setDarkMode, showLinks, setShowLinks } = useGlobalState();

  function handleClick(){
    setShowLinks(!showLinks)
  }
  
  return (
    <header>
      <div className='header-title'>
        <h1 className='header-title-h1'><Link to={'/home'}>FinanzApp <span className='header-title-span'>Educa</span></Link></h1>
        <div className='header-buttons'>
          <SwitchButton onToggle={handleClick}/>
          <ul className='header-icons'>
            <li><Link to={'#'}><FaGooglePlay size={20}/></Link></li>
            <li><Link to={'#'}><FaApple size={25}/></Link></li>
          </ul>
        </div>
      </div>
      {showLinks&& <Nav/>}
    </header>
  )
}

export default Header