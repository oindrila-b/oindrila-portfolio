import React from 'react'
import '../logo/logo.scss'
import logo from '../../assets/logo.png'
import home from '../../assets/home.png'
import about from '../../assets/user.png'
import projects from '../../assets/projects.png'
import skills from '../../assets/skills.png'
import contact from '../../assets/contact.png'


const Logo = () => {





  return (
    <div className='logo-nav'>
      <div className='logo-container'>
      <img src={logo} alt='logo' />
      </div>
      <div className="navigation">
        <ul>
          <li className='list'>
            <a href='#' className='icon'>
              <img src={home} alt=''/>
              <span>Home</span>
            </a>
          </li>
          <li className='list'>
            <a href='#about' className='icon'>
            <img src={about} alt=''/>
            <span>About</span>
            </a>
          </li>
          <li className='list'>
            <a href='#projects' className='icon'>
            <img src={projects} alt=''/>
            <span>Projects</span>
            </a>
          </li>
          <li className='list'>
            <a href='#skills' className='icon'>
            <img src={skills} alt=''/>
            <span>Skills</span>
            </a>

          </li>
          <li className='list' style={{marginRight:"5em"}}>
            <a href='#contact' className='icon'>
            <img src={contact} alt=''/>
            <span>Contact</span>
            </a>
          </li>
          {/* <div className="indicator"></div> */}
        </ul>
      </div>
    </div>
    
  )
}

export default Logo