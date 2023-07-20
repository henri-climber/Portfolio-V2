import {React, useEffect, useState } from 'react'
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import AnimatedLetters from '../AnimatedLetters'
import { Link} from 'react-scroll';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ["S", "o", "f", "t", "w", "a", "r", "e"," ", "D", "e", "v", "e", "l", "o", "p", "e", "r"]
  useEffect(() => {
      setTimeout(() => {
       return setLetterClass('text-animate-hover')
     }, 4000)
   }, [])


  return (
    
    <div className="home-page" id="home">
      <div className="home">
      <div className="welcome-here-i-m-wrapper">
        <h3 className="welcome-here-i-m">
          <span className="text-wrapper">Welcome here, I’m </span>
          <span className="span">Henri</span>
        </h3>
      </div>
          <AnimatedLetters className="animated-letters"
              letterClass={letterClass}
              strArray={nameArray}
              idx={5}
            />

      <p>
        I'm a self-taught software developer from Germany who recently graduated
        from high school.
        <br />
        Currently, I'm actively seeking internships to gain real-world experience.
      </p>
      <Link className="button" 
            to='projects' 
            spy={true}
            smooth={true}
            duration={500}
            offset={200}
      >
      See my projects
      <FontAwesomeIcon icon={faArrowDown} className="button-icon" />
    </Link>
    </div>

    </div>
  );
};

export default Home;
