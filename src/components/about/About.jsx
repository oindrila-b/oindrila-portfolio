import React from 'react'
import '../about/about.scss'
import me from '../../assets/me.jpeg'

const About = () => {
  return (
    <div>
      <div className="container">
        <h1>About</h1>
        <div className="info-ima">
        <div className="image-container">
          <img src={me} alt='' />
        </div>
        <div className="info">
          <p>
            Hey! 👋
            <br />
            <br />
            Thank You for viewing my portfolio, here's a small introduction from my end.
            <br />
         
            My name is Oindrila Banerjee, and I am a Software Developer,    <br />I work mainly in the Backend Development area 🚀 ,
            but I'm currently also exploring the Front-end tools and technologies 🛸, on my way to becoming a FullStack Developer 🎉.
            <br />   <br />
            Feel free to look at My Resume here ⬇️ 

            <a href="https://shorturl.at/noLX4" target='_blank'>
              <div className="resume">
                <span>RESUME</span>
              </div>
            </a>

          </p>
        </div></div>
      </div>
    </div>
  )
}

export default About