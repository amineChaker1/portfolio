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
            Expert in front-end development including technologies like
            <span class="tech-tag">HTML5</span>,
            <span class="tech-tag">CSS3</span>,
            <span class="tech-tag">JavaScript</span>,
            <span class="tech-tag">jQuery</span>,
            <span class="tech-tag">React</span>,<br />
            <span class="tech-tag">SASS</span>,
            <span class="tech-tag">Tailwind</span>,
            <span class="tech-tag">Bootstrap</span>,
            <span class="tech-tag">Animation</span>,
            <span class="tech-tag">Git</span>, etc.
          </p>
          <p>
            And some experience working with the Backend like
            <span class="tech-tag">NodeJs</span>,
            <span class="tech-tag">Webpack</span>,
            <span class="tech-tag">ExpressJs</span>,
            <span class="tech-tag">RestfulApi</span>,
            <span class="tech-tag">MongoDB</span>,<br />
            <span class="tech-tag">NextJs</span>,
            <span class="tech-tag">Firebase</span>, and hoisting platforms
          </p>
          <p>
            I’m not a designer but I have a good sense of aesthetics, and
            experience in responsive, mobile-first web design. I put special
            effort into optimizing my code and providing the best user
            experience.
          </p>

          <p>
            Visit my
            <a target="_blank" href="https://www.linkedin.com/in/chmourad/">
              {' '}
              LinkedIn{' '}
            </a>
            profile for more details. Also you can checkout my cv on this
            <a
              target="_blank"
              href="https://bobangajicsm.github.io/portfolio/assets/slobodan-gajic-cv.pdf"
            >
              {' '}
              Link{' '}
            </a>
            , or feel free to give a peek on some of our association
            <a
              target="_blank"
              href="https://www.toptal.com/css/smacss-scalable-modular-architecture-css"
            >
              {' '}
              blog posts
            </a>
            .
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
