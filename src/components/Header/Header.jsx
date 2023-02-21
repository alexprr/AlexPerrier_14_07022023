import React from 'react'

// react-router
import { useParams } from 'react-router-dom'
// custom css
import "./header.css"
// assets
import Logo from "../../assets/logo.jpg"

const Header = () => {
  const { employee } = useParams()

  return (
    <header className='header flex'>
        {/* Logo */}
        <div className="header__logo flex">
          <img src={Logo} alt="Logo" />
        </div>
        {/* Title */}
        <a href='/'>
          <h1 className="header__title">HRnet</h1>
        </a>
        
        {employee === "employees-list" 
        ? 
        <div className='header__nav'>
          <a href='/'>
              <i className="fa-solid fa-house nav__icon"></i>
          </a>
        </div>
        : 
        <nav className="header__nav">
          <a href="/employees-list" className='nav__title'>Employees List</a>
        </nav> 
        }
    </header>
  )
}

export default Header