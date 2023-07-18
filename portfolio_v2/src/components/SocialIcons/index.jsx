import React from "react";
import "./index.scss";

import profilePic from'../../assets/images/4.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'

const SocialIcons = () => {
    return (
<div className="social-box">
<ul>
<li>
                        <img className='portait-img' src={profilePic} alt="Portrait" />
                    </li>
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
    );


}

export default SocialIcons;