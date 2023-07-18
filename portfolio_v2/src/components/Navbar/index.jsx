import React, { useState, useEffect } from 'react';
import "./index.scss";
import { Link, Events, scrollSpy } from 'react-scroll';


const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState('home');




  const handleNavItemClick = (id) => {
    setActiveNavItem(id);
    console.log(activeNavItem);
  };
  

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
              className='dot'
              onClick={() => handleNavItemClick('home')}
            >
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              offset={-150}
              spy={true}
              smooth={true}
              duration={500}
              className='dot'
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
              className='dot'
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
              className='dot'
              onClick={() => handleNavItemClick('aboutme')}
            >
              <span>About me</span>
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              offset={-200}
              spy={true}
              smooth={true}
              duration={500}
              className='dot'
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
