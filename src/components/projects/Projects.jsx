import React from 'react'
import '../projects/projects.scss'
import job from '../../assets/job.jpg'
import mc from '../../assets/mc.jpg'
import portfolio from '../../assets/portfolio.jpeg'
import techTerms from '../../assets/tech-terms.jpg'
import garage from '../../assets/garage.jpg'

const Projects = () => {
  return (
    <div>
      <div className="projects-container">
        <h1>Projects</h1>

        <div className="timeline">

          <div className="timeline-content">

            <div className="content-pane">
              <div className="circle-left"></div>
              <a href="https://github.com/oindrila-b/MachineCodingPractices" target='_blank'>
              <div className="content left">
                <img src={mc} alt="" />
                <div className="text">
                  <h2>Machine Coding</h2>
                  <small>On-Going</small>
                  <p>This project contains all the Low Level Designs that I have practiced so far. I am using Java as the primary language to solve these problems.
                    It uses SOLID, OOPs and Design Patterns to come up with a solution.
                  </p>
                </div>
              </div>
              </a>
            </div>
            <div className="content-pane">
              <div className="circle-left"></div>
              <a href="https://github.com/oindrila-b/portfolio_oindrila" target='_blank'>
              <div className="content right">
                <img src={portfolio} alt="" />
                <div className="text">
                  <h2>Portfolio</h2>
                  <small>Completed</small>
                  <p>This is a react based portfolio that I created to showcase my skills and experience. It uses libraries like,
                    framer-motion and lottie-react for animation, Saas,Parallax effect, Radial Gradient and Emailjs.</p>
                </div>
              </div>
              </a>
            </div>
            <div className="content-pane">
              <div className="circle-left"></div>
             <a href="https://github.com/oindrila-b/job_portal_system" target='_blank'>
             <div className="content left">
                <img src={job} alt="" />
                <div className="text">
                  <h2>Job Portal System</h2>
                  <small>Completed</small>
                  <p>A Full Stack Application built using React-JS,Java,Spring Boot and MySQL. It lists down job opening in the portal and allows users to apply to the jobs. 
                    New job addition are limited to admins using the backend.
                  </p>
                </div>
              </div>
             </a>
            </div>
            <div className="content-pane">
              <div className="circle-left"></div>
                <a href="https://github.com/oindrila-b/TechTerms" target='_blank'>
                <div className="content right">
                <img src={techTerms} alt="" />
                <div className="text">
                  <h2>Tech Terms</h2>
                  <small>OnGoing</small>
                  <p>Tech terms is an open source project that lists down different teminologies used in the corporate world. 
                    It also lists down technical terminologies, along with their definitions and articles related to it. </p>
                </div>
              </div>
                </a>
            </div>
            <div className="content-pane">
              <div className="circle-left"></div>
              <a href="https://github.com/oindrila-b/garage-rental" target='_blank'>
              <div className="content left">
                <img src={garage} alt="" />
                <div className="text">
                  <h2>Garage Rental</h2>
                  <small>OnGoing</small>
                  <p>This is the backend of a fullstack project, using Java,SpringBoot & MySQL that is still ongoing, it's idea is to help users book garages to keep their cars, theu can book it monthly or yearly </p>
                </div>
              </div>
              </a>
            </div>
          </div>
          <div className="more-projects">
            <a href="https://github.com/oindrila-b" target="_blank">
              <span>See more projects</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects