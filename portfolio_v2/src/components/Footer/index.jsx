import React from "react";
import "./index.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'

  
const Footer = () => {
    return (
        <div className="footer">
            
            <div className="line"/>

            <div className="row">
                <p>(c) Copyright Henri Breuer 2023</p>

                <div className="privacy-policy">
                    <p>Impressum</p>

                </div>

                <ul>
                <li>
                        <a target="_blank" href="https://github.com/henri-climber" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} color='#1B85B3'/>
                        </a>

                    </li>
                    <li>
                        <a target="_blank" href="https://linkedin.com/in/henri-breuer" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} color='#1B85B3'/>
                        </a>

                    </li>

                </ul>

            </div>

        </div>

    );

}

export default Footer;