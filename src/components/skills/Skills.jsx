import React from 'react'
import '../skills/skills.scss'
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) => {

  return (
      <motion.div 
      className="skill1"
      whileHover={{scale:1.1, boxShadow: "3px 3px 3px  #9883cf"}}
      initial={{x:0,y:0}}
      whileInView={{x:x,y:y}}
      transition={{duration:1.5}}
      >
          {name} 
      </motion.div>
  )

}

const Skills = () => {
  return (
    <div>
      <div className="skills-container">
      <h1>Skills</h1>
      < div className="radial-skills">
               <Skill name={"Backend"} x="0" y="0"/>
               <Skill name={"Java"} x="-20vw" y="2vw" />
               <Skill name={"SpringBoot"} x="-20vw" y="-13.5vw" />
               <Skill name={"MySQL"} x="0vw" y="-13.5vw" />
               <Skill name={"React JS"} x="-10vw" y="-4.5vw" />
               <Skill name={"Dart"} x="6vw" y="9.5vw" />
               <Skill name={"Python"} x="22vw" y="-13vw" />
               <Skill name={"NodeJS"} x="19vw" y="9.5vw" />
               <Skill name={"Git"} x="13vw" y="-2.5vw" />
               <Skill name={"LLD"} x="-10vw" y="12.5vw" />
            </div>
      </div>
    </div>
  )
}

export default Skills