import React from 'react'
import './Header.scss';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__logo'><Link to='/'>LOGO</Link></div>
        <div className='header__profile'><Link to='/profile'>Profile</Link></div>

      </div>
    </div>
  )
}

export default Header
