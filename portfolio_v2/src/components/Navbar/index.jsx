import React, { useState, useEffect } from 'react';
import "./index.scss";
import { Link, Events, scrollSpy } from 'react-scroll';


const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState('null');
  const [animateNavItem, setAnimateNavItem] = useState('null');
  const [animationCount, setAnimationCount] = useState(0);


  const handleNavItemClick = (id) => {
    setActiveNavItem(id);
    console.log(activeNavItem);
  };
  

  // animate the navbar
  useEffect(() => {
    // Start the animation after 3 seconds
    const timer = setTimeout(() => {
      setAnimateNavItem('home');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (animateNavItem === 'home') {
        if (animationCount === 1) {
          // break out of the animation
          setAnimateNavItem('null');
          return;
        }
        setAnimateNavItem('skills');
      } else if (animateNavItem === 'skills') {
        if (animationCount === 1) {
          setAnimateNavItem('home');
        }else{
          setAnimateNavItem('projects');
        }
      } else if (animateNavItem === 'projects') {
        if (animationCount === 1) {
          setAnimateNavItem('skills');
        }else{
          setAnimateNavItem('aboutme');
        }
      } else if (animateNavItem === 'aboutme') {
        console.log(animationCount)
        if (animationCount === 1) {
          setAnimateNavItem('projects');
        }else{
          setAnimateNavItem('contact');
        }
        
      } else if (animateNavItem === 'contact') {
        setAnimationCount(1);
        console.log(animationCount)
        setAnimateNavItem('aboutme');
      }
    }, 120);
    return () => clearInterval(interval);
  }, [animateNavItem]);

  return (
    <div className="box">
      <div className='vertical-line'></div>
      <nav className="navbar">
        <ul>
          <li>
            <Link
              to="home"
              offset={-150}
              spy={true}
              smooth={true}
              duration={500}
              className={`dot ${animateNavItem === 'home' ? 'active' : ''}`}
              onClick={() => handleNavItemClick('home')}
            >
              <span>Home</span>
            </Link>
          </li>
          <li >
            <Link
              to="skills"
              offset={-150}
              spy={true}
              smooth={true}
              duration={500}
              className={`dot ${animateNavItem === 'skills' ? 'active' : ''}`}
              onClick={() => handleNavItemClick('skills')}
            >
              <span>Skills</span>
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              offset={-150}
              spy={true}
              smooth={true}
              duration={500}
              className={`dot ${animateNavItem === 'projects' ? 'active' : ''}`}
              onClick={() => handleNavItemClick('projects')}
            >
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link
              to="aboutme"
              offset={-150}
              spy={true}
              smooth={true}
              duration={500}
              className={`dot ${animateNavItem === 'aboutme' ? 'active' : ''}`}
              onClick={() => handleNavItemClick('aboutme')}
            >
              <span>About me</span>
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              offset={-145}
              spy={true}
              smooth={true}
              duration={500}
              className={`dot ${animateNavItem === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavItemClick('contact')}
            >
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
