import React from 'react'
import '../logo/logo.scss'
import logo from '../../assets/logo.png'


const Logo = () => {
  return (
    <div className='logo-container'>
      <img src={logo} alt='logo' />
      <div className='logos'>
        <div className="menu">
          <span>Home</span>
          <span>About</span>
          <span>Projects</span>
          <span>Skills</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
  )
}

export default Logo