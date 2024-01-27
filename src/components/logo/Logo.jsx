import React from 'react'
import '../logo/logo.scss'
import logo from '../../assets/logo.png'
import down from '../../assets/down.png'


const Logo = () => {
  return (
    <div className='logo-container'>
      <img src={logo} alt='logo'/> 
      <div className='down'>
        <img src={down} alt=''/> 
      </div>
    </div>
  )
}

export default Logo