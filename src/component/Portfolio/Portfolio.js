import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Portfolio.scss'
import portfolioData from '../../data/portfolio.json'
import gmail from '../../assets/images/gmail.png'
function Portfolio() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio?.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.cover}
                className="portfolio-image"
                alt="portfolio"
              />

              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
                <button
                  style={{ marginLeft: '10px' }}
                  className="btn"
                  onClick={() => window.open(port.url2)}
                >
                  Socials
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'y', ' ', 'W', 'o', 'r', 'k']}
            idx={15}
          />
        </h1>

        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>

      <Loader type="square-spin" />
    </>
  )
}

export default Portfolio
