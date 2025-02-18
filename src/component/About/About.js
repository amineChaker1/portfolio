/*import {
  faAngular,
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'*/
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './About.scss'
import protech from '../../assets/images/protech.png'
import campus from '../../assets/images/campus.png'
import upec from '../../assets/images/upec.png'
import powerbi from '../../assets/images/Power-BI.png'
import python from '../../assets/images/Python.png'
import sql from '../../assets/images/sql.png'
function About() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            My story starts with a passion for technology and a drive to make a
            difference. In 2023, I took on the challenge of leading{' '}
            <span class="tech-tag">Protech as its President.</span> It was an
            incredible experience where I got to build something from the ground
            up and inspire others to join the world of programming. I organized
            events, workshops, and conferences, connecting people and sharing
            knowledge.
          </p>
          <p>
            At the same time, I was also exploring my technical side. I worked
            as a{' '}
            <span class="tech-tag">
              Full Stack Developer at a Marketing Agency
            </span>
            , building websites for all sorts of organizations, from businesses
            to charities. It was like being an architect, designing and
            constructing digital buildings that people could use and benefit
            from. You can even see some of my creations in my portfolio!
          </p>
          <p>
            Currently, I'm working as an{' '}
            <span class="tech-tag">
              Administrative Employee at Campus France
            </span>
            , where I'm honing my organizational and communication skills,
            solving problems and helping people find the information they need.
            I use tools like Excel to search through databases and help visitors
            navigate the system. All while I'm also working towards my degree,
            learning cool stuff like SAS, R, and Python. It's like having a
            superpower toolkit for analyzing data and finding hidden insights.
            I'm even working on my own projects using tools like Power BI, SQL,
            and Python to analyze real-world data. My journey is just beginning,
            and I'm excited to see where it takes me next. I'm always learning
            and growing, and I'm eager to contribute my skills and passion to
            new and exciting projects.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={protech} alt="" />
            </div>
            <div className="face2">
              <img src={campus} alt="" />
            </div>
            <div className="face3">
              <img src={upec} alt="" />
            </div>
            <div className="face4">
              <img src={powerbi} alt="" />
            </div>
            <div className="face5">
              <img src={python} alt="" />
            </div>
            <div className="face6">
              <img src={sql} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="square-spin" />
    </>
  )
}

export default About
