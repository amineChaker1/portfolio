import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import SphereCanvas from '../SphereCanvas'
import './Skill.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['Skills', ' ', '&', ' ', 'Experience']}
              idx={15}
            />
          </h1>
          <p>
            Hands-on experience in both technical and administrative domains, I
            bring a unique blend of problem-solving, communication, and
            analytical skills to any team I join. In the realm of data , im
            experienced in <span class="tech-tag">SQL</span>,{' '}
            <span class="tech-tag">SAS</span>,{' '}
            <span class="tech-tag">Excel</span>,{' '}
            <span class="tech-tag">Power BI</span> and{' '}
            <span class="tech-tag">Python</span> and it’s libraries
            <span class="tech-tag">(numpy,pandas,matplotlib,seaborn)</span>. I
            excel at transforming raw data into actionable insights and
            presenting findings in a clear and compelling way to support
            decision-making processes.
          </p>
          <p>
            Expert in front-end web development including technologies like
            <span class="tech-tag">HTML5</span>,
            <span class="tech-tag">CSS3</span>,
            <span class="tech-tag">JavaScript</span>,
            <span class="tech-tag">React</span>,<br />
            <span class="tech-tag">Tailwind</span>,
            <span class="tech-tag">Animation</span>,
            <span class="tech-tag">Git</span>, etc.
          </p>
          <p>
            And some experience working with the Backend like
            <span class="tech-tag">NodeJs</span>,
            <span class="tech-tag">ExpressJs</span>,
            <span class="tech-tag">RestfulApi</span>,
            <span class="tech-tag">MongoDB</span>,<br />
            <span class="tech-tag">NextJs</span>, and hoisting platforms
          </p>
        </div>

        <div className="skills-charts">
          <SphereCanvas />
        </div>
      </div>

      <Loader type="square-spin" />
    </>
  )
}

export default Skills
