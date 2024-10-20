import React from "react";
import "./index.scss";
import henriImg from '../../assets/images/henri.png';
import henriClimbImg from '../../assets/images/henri_climbing.png';
import { FiDownload } from 'react-icons/fi';

const AboutMe = () => {
  const handleButtonClick = () => {
    window.open("https://drive.google.com/file/d/1sD9yl1oM3wSSY5IhbbNPqThP8UnCDdPB/view?usp=sharing", '_blank');
  };

  return (
    <div className="about-me-wrapper"> {/* Add this wrapper div */}
      <div className="about-me-page" id="aboutme">
        <h3>About me</h3>
        <div className="about-me">
          {/* Add the media query here */}
          <div className="img1-wrapper">
            <img className="img1" src={henriImg} alt="Henri" />
          </div>
          <p>
          Hey there, I'm Henri, a tech enthusiast from  Germany. I've been coding for four years and just started studying Physics at TUM in Munich. 
          I started by creating little 2D games with Pygame and am now working on data science projects and my startup. 
          Last year, I participated in two big Hackathons, Junctions and START Hack,  which were both fantastic. 
          I can't wait to compete at more Hackathons in the future.</p>
          <img className="img11" src={henriImg} alt="Henri" />
        </div>
        <div className="about-me">
          <img className="img2" src={henriClimbImg} alt="Henri" />
          <p>
          Beyond programming and academics, I'm passionate about climbing, especially as a competitive sport. I've competed at the 
          national level for nine years and internationally. Competitive climbing has taught me resilience, strategy, and 
          focus—skills that have been helpful both in my studies and my everyday life.
          </p>
        </div>
        <button className="btn" onClick={handleButtonClick}>
          Download resume
          <FiDownload className="icon" size={32} />
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
