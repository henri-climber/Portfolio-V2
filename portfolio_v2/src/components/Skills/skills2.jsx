import "./skills2.scss";
import React, { useState, useEffect, useRef } from 'react';
import pythonLogo from '../../assets/skills/python.png';
import dartLogo from '../../assets/skills/logo_dart_1080px_clr.png';
import javaLogo from '../../assets/skills/java.png';
import figmaLogo from '../../assets/skills/figma.png';
import firebaseLogo from '../../assets/skills/firebase.png';
import flutterLogo from '../../assets/skills/flutter.png';
import githubLogo from '../../assets/skills/github-mark-white.png';
import scikitlearnLogo from '../../assets/skills/scikitlearn.png';
import sqlLogo from '../../assets/skills/sql.png';
import startupLogo from '../../assets/skills/startup.png'; //Icon by <a href="https://freeicons.io/profile/5790">ColourCreatype</a> on <a href="https://freeicons.io">freeicons.io</a>
import tensorflowLogo from '../../assets/skills/tensorflow.png';

import backendBGImg from '../../assets/skills/bg_images/backend_bg.webp';

const Carousel = () => {
  const carouselRef = useRef();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const cellCount = 4;
  let theta;
  let radius;

  const calculateCellSize = () => {
    const cellWidth = carouselRef.current.offsetWidth;
    return cellWidth;
  };

  const rotateCarousel = () => {
    const angle = theta * selectedIndex * -1;
    carouselRef.current.style.transform = `translateZ(${-radius}px) rotateY(${angle}deg)`;
  };


  const handleUserAction = () => {
    if (autoRotate) setAutoRotate(false);
  
    // Set autoRotate to true after 3 seconds
    setTimeout(() => {
      setAutoRotate(true);
    }, 3000);
  };

  const updateCarousel = () => {
    theta = 360 / cellCount;
    const cellSize = calculateCellSize();
    radius = Math.round((cellSize / 2) / Math.tan(Math.PI / cellCount));
    const cells = carouselRef.current.children;
    for (let i = 0; i < cells.length; i++) {
      let cellAngle = theta * i;
      cells[i].style.transform = `rotateY(${cellAngle}deg) translateZ(${radius}px)`;
      cells[i].style.opacity = i < cellCount ? 1 : 0;
    }
    rotateCarousel();
  };

  // useEffect to handle carousel setup and updates
  useEffect(updateCarousel, [selectedIndex]);

  const handlePrevious = () => {
    setSelectedIndex((prevSelectedIndex) => prevSelectedIndex - 1);
    handleUserAction();
  };

  const handleNext = () => {
    setSelectedIndex((prevSelectedIndex) => prevSelectedIndex + 1);
    handleUserAction();
  };


  // rotate carousel by swiping
  let initialPos = 0;
  let swipeStarted = false;

  const handleSwipeStart = (e) => {
    swipeStarted = true;
    initialPos = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    handleUserAction();
  };

  const handleSwipeMove = (e) => {
    if (!swipeStarted) return;
    const currentPos = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const diff = initialPos - currentPos;
    if (Math.abs(diff) > 50) { // adjust threshold as needed
      setSelectedIndex((prevSelectedIndex) => prevSelectedIndex + (diff > 0 ? 1 : -1));
      swipeStarted = false;
    }
    handleUserAction();
  };

  const handleSwipeEnd = () => {
    swipeStarted = false;
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;
    carouselElement.addEventListener('touchstart', handleSwipeStart);
    carouselElement.addEventListener('touchmove', handleSwipeMove);
    carouselElement.addEventListener('touchend', handleSwipeEnd);
    carouselElement.addEventListener('mousedown', handleSwipeStart);
    carouselElement.addEventListener('mousemove', handleSwipeMove);
    carouselElement.addEventListener('mouseup', handleSwipeEnd);
    return () => {
      carouselElement.removeEventListener('touchstart', handleSwipeStart);
      carouselElement.removeEventListener('touchmove', handleSwipeMove);
      carouselElement.removeEventListener('touchend', handleSwipeEnd);
      carouselElement.removeEventListener('mousedown', handleSwipeStart);
      carouselElement.removeEventListener('mousemove', handleSwipeMove);
      carouselElement.removeEventListener('mouseup', handleSwipeEnd);
    };
  }, []);



  // Render the carousel JSX
  return (
    <div className="skills-page" id="skills">
      <h3>Skills</h3>
      <div className="scene">
        <button onClick={handlePrevious} className="carousel-button previous-button">&lt;</button>


        <div className={`carousel ${autoRotate ? "rotate" : ""}`} ref={carouselRef}>

          <div className="carousel__cell" key={0}>
          <div className="column">
            <h6>Languages</h6>
            <ul>
              <li>
                <div className="logo-wrapper">
                  <img src={pythonLogo} alt="Python Logo" width="48" height="48" />
                  <span>Python</span>
                </div>
              </li>
              <li>
                <div className="logo-wrapper">
                  <img src={dartLogo} alt="Dart Logo" width="48" height="48" />
                  <span>Dart</span>
                </div>
              </li>
              <li>
                <div className="logo-wrapper">
                  <img src={javaLogo} alt="Java Logo" width="48" height="48" />
                  <span>Java</span>
                </div>
              </li>
            </ul>
            
          </div>
          </div>

          <div className="carousel__cell" key={1}>
          <div className="column">
            <h6>Frameworks</h6>
            <ul>
              <li>
                <div className="logo-wrapper">
                  <img src={flutterLogo} alt="Flutter Logo" height="48" />
                  <span>Flutter</span>
                </div>
              </li>
              <li>
                <div className="logo-wrapper">
                  <img src={tensorflowLogo} alt="Tensorflow Logo" height="48" />
                  <span>Tensorflow</span>
                </div>
              </li>
              <li>
                <div className="logo-wrapper">
                  <img src={scikitlearnLogo} alt="Scikit-learn Logo" height="48" />
                  <span>scikit-learn</span>
                </div>
              </li>
            </ul>
          </div>
          </div>

          <div className="carousel__cell" key={2}>
          <div className="column">
              <h6>Backend</h6>
              <ul>
                <li>
                  <div className="logo-wrapper">
                    <img src={firebaseLogo} alt="Firebase Logo" height="48" />
                    <span>Firebase</span>
                  </div>
                </li>
                <li>
                  <div className="logo-wrapper">
                    <img src={sqlLogo} alt="SQL Logo" height="48" />
                    <span>SQL</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="carousel__cell" key={3}>
          <div className="column">
              <h6>Other</h6>
              <ul>
                <li>
                  <div className="logo-wrapper">
                    <img src={githubLogo} alt="GitHub Logo" height="48" />
                    <span>Git/GitHub</span>
                  </div>
                </li>
                <li>
                  <div className="logo-wrapper">
                    <img src={figmaLogo} alt="Figma Logo" height="48" />
                    <span>Figma</span>
                  </div>
                </li>
                <li>
                  <div className="logo-wrapper">
                    <img src={startupLogo} alt="Startup Logo" height="48" />
                    <span>Startups</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

   


        </div>
        <button onClick={handleNext} className="carousel-button next-button">&gt;</button>
      </div>

      <div className="hint">
        Hint: Swipe or click buttons to rotate manually
      </div>

    </div>

  );
};

export default Carousel;
