import React, { useEffect, useState } from 'react'
import './Home.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Logo from './Logo/Logo'
import Loader from 'react-loaders'

function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['m', 'i', 'n', 'e']
  const jobArray = [
    'D',
    'a',
    't',
    'a',
    ' ',
    'E',
    'n',
    't',
    'h',
    'u',
    's',
    'i',
    'a',
    's',
    't',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <span
              className={`${letterClass} _12`}
              style={{ marginLeft: '10px' }}
            >
              {' '}
              a{' '}
            </span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={21}
            />
          </h1>

          <h2>Data Analyst / FullStack JS Developer</h2>

          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>

        <Logo />
      </div>

      <Loader type="square-spin" />
    </>
  )
}

export default Home
