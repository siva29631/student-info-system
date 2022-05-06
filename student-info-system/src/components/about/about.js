import React from "react";
import ReactDOM from "react-dom";
import "./style_about.css"
function About() {
    return (
    <div className="About">
        <header id="body-header">
                    <h1 class="heading-1">Mini Project Website</h1>
                    <h2 class="heading-2">Powered by Technology</h2>
                    <p class="description-text">
                        Our project provides tools to ease student data manipulation.
                    </p>
        </header>
        <main>
                <div id="about-card-container">
                    <div id="col-1">
                        <div id="about-card-1" class="about-card">
                        <h2 class="heading-2">Guide</h2>
                        <p class="description-text">Administration to reach a destination. <br /><br />Tmt. P Tharani</p>
                        <img src="https://www.dropbox.com/s/8du2nx9afplvh8i/icon-supervisor.svg?raw=1" alt="supervisor icon" />
                        </div>
                    </div>
                    <div id="col-2">
                        <div id="about-card-2" class="about-card">
                        <h2 class="heading-2">Motto</h2>
                        <p class="description-text">Offer better communication, faster attendance management and streamlined
                            activities to the respective classrooms.</p>
                        <img src="https://www.dropbox.com/s/t3110vdlwn9btzj/icon-team-builder.svg?raw=1" alt="team builder icon" />
                        </div>
                    </div>
                    <div id="about-card-3" class="about-card">
                        <h2 class="heading-2">Team</h2>
                        <p class="description-text">S Siva Subramanian <br />K Shahul Hameed
                            Mansoor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br /> S Gowtham
                        </p>
                        <img src="https://www.dropbox.com/s/y0lhucvdi8q6pnj/icon-karma.svg?raw=1" alt="altar icon" />
                    </div>
        
                    <div id="col-3">
                        <div id="about-card-4" class="about-card">
                        <h2 class="heading-2">Calculator</h2>
                        <p class="description-text">Uses data from past projects to provide better delivery estimates</p>
                        <img src="https://www.dropbox.com/s/oieegpnnmynmrbm/icon-calculator.svg?raw=1" alt="calculator icon" />
                        </div>
                    </div>
                    </div>
        </main>
        <footer>
                <p class="description-text">
                Centralized <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Database System</a>.
                To Manage <a href="#">Student Information</a>.
                </p>
        </footer>
        <div class="wrapper">
            <a href="https://google.com">
            <div class="icon facebook">
                <div class="tooltip">
                Facebook
                </div>
                <span><i class="fab fa-facebook-f"></i></span>
            </div>
            </a>

            <a href="https://google.com">
            <div class="icon twitter">
                <div class="tooltip">
                Twitter
                </div>
                <span><i class="fab fa-twitter"></i></span>
            </div>
            </a>

            <a href="https://google.com">
            <div class="icon instagram">
                <div class="tooltip">
                Instagram
                </div>
                <span><i class="fab fa-instagram"></i></span>
            </div>
            </a>
            <a href="https://google.com">
            <div class="icon github">
                <div class="tooltip">
                Github
                </div>
                <span><i class="fab fa-github"></i></span>
            </div>
            </a>
            <a href="https://google.com">
            <div class="icon youtube">
                <div class="tooltip">
                YouTube
                </div>
                <span><i class="fab fa-youtube"></i></span>
            </div>
            </a>
        </div >
    </div>
        
    )
}

export default About;