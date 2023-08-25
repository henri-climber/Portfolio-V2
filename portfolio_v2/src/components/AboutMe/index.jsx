import React from "react";
import "./index.scss";
import henriImg from '../../assets/images/henri.png';
import henriClimbImg from '../../assets/images/henri_climbing.png';
import { FiDownload } from 'react-icons/fi';

const AboutMe = () => {
  const handleButtonClick = () => {
    window.open("https://drive.google.com/file/d/1663ZZ1WL9zDzPkoQHgO4xTXs9giQ1Ypa/view?usp=sharing", '_blank');
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
          Hey there, I'm Henri, a tech enthusiast from Germany. Over the past 3.5 years, I've gone from creating 2D games to tackling data science projects and launching my own startup. My expertise lies in Flutter, Firebase, and Python, and I love embracing new technologies. Recently, I graduated high school with a perfect grade average of 1.0. 
          </p>
          <img className="img11" src={henriImg} alt="Henri" />
        </div>
        <div className="about-me">
          <img className="img2" src={henriClimbImg} alt="Henri" />
          <p>
            Aside from programming and my academic life, I love climbing, especially as
            a competitive sport. I have been competing at national level for 7 years and
            at international level two years ago. Through competitive sports, I have
            learned many skills that are now a great help to me in school and everyday
            life.
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
