import React, { useState, useEffect, useRef } from 'react';
import "./index.scss";
import { Link } from 'react-scroll';


const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState('null');
  const [animateNavItem, setAnimateNavItem] = useState('null');
  const [animationCount, setAnimationCount] = useState(0);

    // Create a ref for the checkbox input element
    const checkboxRef = useRef(null);

  const handleNavItemClick = (id) => {
    setActiveNavItem(id);

    // Uncheck the checkbox when a link is clicked
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }

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
              offset={+150}
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
              offset={+150}
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
              offset={+150}
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
              offset={+150}
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

      <nav className='m-nav'>
      <div className="mobile-navbar">
        <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" ref={checkboxRef}/>
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>  
          <div className="menu-items">
          <ul>
          <li>
            <Link
              to="home"
              offset={0}
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
              offset={0}
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
              offset={0}
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
              offset={0}
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
              offset={0}
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
          </div>
        </div>
      </div>
    </nav>
    
    </div>
  );
};

export default Navbar;
