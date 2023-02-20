import React from 'react'
import "./header.css"

import Logo from "../../assets/logo.jpg"

const Header = () => {
  return (
    <header className='header flex'>
        <img src={Logo} alt="Logo" />
        <h1 className="header__title">HRnet</h1>
    </header>
  )
}

export default Header