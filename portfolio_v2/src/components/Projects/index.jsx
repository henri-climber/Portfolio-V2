import React from "react";
import "./index.scss";
import easyCompImg from '../../assets/images/easycom1p.png';
import nitrateImg from '../../assets/images/nitrate.png';
import WebsiteButton from '../common_components/icon_button';
import globeIcon from '../../assets/icons/globe-1.png';
import githubIcon from '../../assets/skills/github-mark-white.png';

const Projects = () => {
    return (
        <div className="projects-page" id="projects">
            <h2>Projects</h2>
            <div className="projects">
                <div class="box">
                    <div className="imgBox">
                        <img src={easyCompImg} alt="EasyComp" />
                    </div>
                    <div className="textBox">
                        <h5>EasyComp</h5>
                        <p className="projectDescription">Together with a friend I founded a startup to facilitate the organization of climbing competitions in Germany (which is why the language is german as well). I developed a fullstack website that is responsible for the registration and automatic results calculation  for some of the biggest climbing competitions in Germany. I used various cloud solutions like Firebase Functions, Firestore, Realtime DB.</p>
                        <WebsiteButton websiteUrl="https://easy-comp.net" icon={globeIcon} />
                        <h6>Technologies used:</h6>
                        <p>Flutter, Firebase, TypeScript</p>
                    </div>
                </div>

                <div class="box">
                    <div className="textBox">
                        <h5>Nitrate concentration in soil in Kenia</h5>
                        <p className="underline">Research project at Justus-Liebig Universität</p>
                        <p className="projectDescription">I designed state-of-the-art LSTM neural networks, by utilizing four years of meticulously collected time series data from Kenia, including 40 diverse weather features,to predict key measurements that are traditionally difficult and costly to obtain.</p>
                        <div className="button-wrapper">
                        <WebsiteButton websiteUrl="https://github.com/henri-climber" icon={githubIcon} />
                        </div>
                        <h6>Technologies used:</h6>
                        <p>Python, Tensorflow, scikit-learn, Pandas</p>
                    </div>
                    <div className="imgBox">
                        <img className="nitrateImg" src={nitrateImg} alt="Graph showing model predictions for nitrate values" />
                    </div>
                </div>

            </div>
        </div>
    );

}

export default Projects;