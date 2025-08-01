import { useEffect, useState } from 'react'
import {
  faSass,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
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
          <p>Creative React Developer with 5 years of experience developing intuitive, responsive user interfaces and improving user experience in modern web
applications. Proficient in the React ecosystem (React.js, Next.js, Redux,TypeScript) and component-based architecture, with hands-on expertise in
industry-standard tools and workflows. Skilled at turning complex requirements into clean, accessible, and scalable front-end solutions. Wellversed in Facebook’s front-end best practices and certified through Meta’s Front-End Developer Professional Certificate. Authorized to work in the
U.S. without sponsorship</p>
          {/* <p align="LEFT">
            Skilled in React.js, React Hooks, Redux, Javascript, CSS, HTML,
            Typescript, Jest, Scss, Bootstrap, Python, data science
            fundamentals, c programming .
          </p>
          <p>
            Strong programming skills with a Bachelor of Technology - BTech
            focused in Computer Science. 2020 graduate with CGPA of 7.5
          </p> */}
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSass} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
