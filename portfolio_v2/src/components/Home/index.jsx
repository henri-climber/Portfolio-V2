import {React, useEffect, useState } from 'react'
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import AnimatedLetters from '../AnimatedLetters'
import { Link} from 'react-scroll';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')


// create the arrays for "Physics Student"
const nameArray = ["P", "h", "y", "s", "i", "c", "s", " ", "S", "t", "u", "d", "e", "n", "t", " ","&"]
const nameArray2 = ["S", "e", "l", "f", "-", "t", "a", "u", "g", "h", "t", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r"] 
const nameArray3 = ["S", "e", "l", "f", "-", "t", "a", "u", "g", "h", "t"," ", "D", "e", "v", "e", "l", "o", "p", "e", "r"]
const nameArray4 = ["D", "e", "v", "e", "l", "o", "p", "e", "r"]
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
        <div className="animated-letters">
        <AnimatedLetters 
              letterClass={letterClass}
              strArray={nameArray}
              idx={5}
            />
          <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray2}
              idx={5}
            />
        </div>

        <div className="animated-letters2">
        <AnimatedLetters 
              letterClass={letterClass}
              strArray={nameArray}
              idx={5}
            />
          <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray3}
              idx={5}
            />

        </div>

      <p>
      I'm a passionate Physics student and self taught developer at TUM in Munich.
        <br />
        I'am always eager to take on diverse technical projects and learn new skills.
        <br />
        Feel free to explore my projects and reach out!
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
