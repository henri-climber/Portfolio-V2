import React from "react";
import "./index.scss";
import easyCompImg from '../../assets/images/easycom1p.png';
import nitrateImg from '../../assets/images/nitrate.png';
import WebsiteButton from '../common_components/icon_button';
import globeIcon from '../../assets/icons/globe-1.png';
import githubIcon from '../../assets/skills/github-mark-white.png';
import nuclideGIF from '../../assets/videos/nuclide_table_demo.gif';

const Projects = () => {

    
    return (
        <div className="projects-page" id="projects">
            <h3>Projects</h3>
            <div className="projects">
                <div class="box">
                    <div className="imgBox">
                        <img className="easycomp-img" src={easyCompImg} alt="EasyComp" />
                    </div>
                    <div className="textBox">
                        <h5>EasyComp</h5>
                        <p className="projectDescription">Together with a friend I founded a <b>startup</b> to facilitate the organization of climbing competitions in Germany (which is why the language is german as well). I developed a <b>fullstack website</b> that is responsible for the registration and automatic results calculation  for some of the biggest climbing competitions in Germany. Since the website is online for commercial use i can not share source code.</p>
                        <WebsiteButton websiteUrl="https://easy-comp.net" icon={globeIcon} />
                        <h6>Technologies used:</h6>
                        <p>Flutter, Firebase, TypeScript</p>
                    </div>
                </div>

                <div class="box">
                    <div className="textBox">
                        <h5>Nitrate concentration in soil in Kenia</h5>
                        <p className="underline">Research project at Justus-Liebig Universität</p>
                        <p className="projectDescription">I designed state-of-the-art LSTM neural networks, by utilizing four years of meticulously collected time series data from Kenia, including 40 diverse weather features, to predict key measurements that are traditionally difficult and costly to obtain.</p>
                        <div className="button-wrapper">
                        <WebsiteButton websiteUrl="https://github.com/henri-climber/LSTM-time-series-prediction-Kenya" icon={githubIcon} />
                        </div>
                        <h6>Technologies used:</h6>
                        <p>Python, Tensorflow, scikit-learn, Pandas</p>
                    </div>
                    <div className="imgBox">
                        <img className="nitrateImg" src={nitrateImg} alt="Graph showing model predictions for nitrate values" />
                    </div>
                </div>

                <div class="box">
                    <div className="imgBox">
                        <img className="nuclide-box" src={nuclideGIF} alt="Demo of interactive nuclide table" />
                    </div>
                    <div className="textBox">
                        <h5>Interactive table of nuclides</h5>
                        <p className="projectDescription">Welcome to my interactive nuclide table project, which uses the CustomPainter in Flutter for optimal performance. This tool allows users to explore and learn about nuclides by hovering over them, making it easier to comprehend the formation of elements with higher mass. The project was developed as a supplement for my physics course presentation.</p>
                        <div className="row">
                            <WebsiteButton websiteUrl="https://neuklidkarte.web.app/#/" icon={globeIcon} />
                            <WebsiteButton websiteUrl="https://github.com/henri-climber/Interactive-table-of-nuclides" icon={githubIcon} />
                        </div>
                        <h6>Technologies used:</h6>
                        <p>Flutter, Firebase Hosting</p>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default Projects;