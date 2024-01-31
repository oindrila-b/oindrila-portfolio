import React from 'react'
import '../projects/projects.scss'
import job from '../../assets/job.jpg'

const Projects = () => {
  return (
    <div>
      <div className="projects-container">
          <h1>Projects</h1>

        <div className="timeline">
        
          <div className="timeline-content">

          <div className="content-pane">
            <div className="circle-left"></div>
          <div className="content left">
            <img src={job} alt="" />
            <div className="text">
              <h2>TITLE</h2>
              <small>Duration</small>
              <p>Firstly I try to find existing solutions, but they work with a solid timeline. In my case, I have a banner in the middle of the timeline. 
                It gives me an idea to create a wrapper component for any part of the timeline, sticks or step circles whatever. </p>
            </div>
          </div>
          </div>
          <div className="content-pane">
          <div className="circle-left"></div>
           <div className="content right">
            <img src={job} alt="" />
            <div className="text">
              <h2>TITLE</h2>
              <small>Duration</small>
              <p>Firstly I try to find existing solutions, but they work with a solid timeline. In my case, I have a banner in the middle of the timeline. 
                It gives me an idea to create a wrapper component for any part of the timeline, sticks or step circles whatever. </p>
            </div>
          </div>
          </div>
          <div className="content-pane">
          <div className="circle-left"></div>
            <div className="content left">
            <img src={job} alt="" />
            <div className="text">
              <h2>TITLE</h2>
              <small>Duration</small>
              <p>Firstly I try to find existing solutions, but they work with a solid timeline. In my case, I have a banner in the middle of the timeline. 
                It gives me an idea to create a wrapper component for any part of the timeline, sticks or step circles whatever. </p>
            </div>
          </div>
          </div>
          <div className="content-pane">
          <div className="circle-left"></div>
          <div className="content right">
            <img src={job} alt="" />
            <div className="text">
              <h2>TITLE</h2>
              <small>Duration</small>
              <p>Firstly I try to find existing solutions, but they work with a solid timeline. In my case, I have a banner in the middle of the timeline. 
                It gives me an idea to create a wrapper component for any part of the timeline, sticks or step circles whatever. </p>
            </div>
          </div>
          </div>
          <div className="content-pane">
          <div className="circle-left"></div>
          <div className="content left">
            <img src={job} alt="" />
            <div className="text">
              <h2>TITLE</h2>
              <small>Duration</small>
              <p>Firstly I try to find existing solutions, but they work with a solid timeline. In my case, I have a banner in the middle of the timeline. 
                It gives me an idea to create a wrapper component for any part of the timeline, sticks or step circles whatever. </p>
            </div>
          </div> 
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