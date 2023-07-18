import React from "react";
import "./index.scss";
import henriImg from '../../assets/images/henri.png';
import henriClimbImg from '../../assets/images/henri_climbing.png';
import { FiDownload } from 'react-icons/fi';


const AboutMe = () => {
    const handleButtonClick = () => {
        window.open("https://drive.google.com/file/d/1GQbC0PmpiK7lre6yr10wHFHDz30irw_f/view?usp=sharing", '_blank');
      };
    //TODO: make resume english
      
    return (
        <div className="about-me-page" id="aboutme">
            <h2>About me</h2>
            <div className="about-me">
                <p>My name is [Your Name] and I am a [Your profession/industry] with a passion for [specific skills or areas of interest].I have [number] years of experience in the industry, during which I have developed a strong set of skills in [specific skills or areas of expertise]. My background includes [relevant education or certifications].</p>
                <img className="img1" src={henriImg} alt="Henri" />
            </div>
            <div className="about-me">
                <img className="img2" src={henriClimbImg} alt="Henri" />
                <p>Apart from programming and my academic life, i love climbing, especially as a competitive sport. I have been competing at national level for 7 years and at international level two years ago. Competitive sports have taught me many skills that are now of great help to me at school and in my daily life.</p>
            </div>
            <button className="btn" onClick={handleButtonClick}>
                Download resume
                <FiDownload size={32} />
            </button>
        </div>
    );


}

export default AboutMe;