import React from "react";
import "./index.scss";
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

export const Skills = () => {
  return (
    <div className="skills-page" id="skills">
      <h3>Skills</h3>
      <div className="skills-table">
        <div className="outer-column">
          <div className="column">
            <h5>Languages</h5>
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
          <div className="column">
            <h5>Frameworks</h5>
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
          <div className="outer-column">
            <div className="column">
              <h5>Backend</h5>
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
            <div className="column">
              <h5>Other</h5>
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
    </div>
  );
};



export default Skills;