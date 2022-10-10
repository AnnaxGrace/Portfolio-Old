import React, { useState } from "react";
import "../Banner/banner.css";
import "./landingstyle.css"
import SideNav from "../SideNav/sideNav";


function Landing() {

    //define our necessary states to display the corresponding divs
    const [aboutState, setAboutState] = useState("hide")
    const [resumeState, setResumeState] = useState("hide")


    //shows the about information
    function aboutClick() {
        setAboutState("show")
        setResumeState("hide")
    }

    //shows the resume information
    function aboutResume() {
        setAboutState("hide")
        setResumeState("show")
    }

    //hides the about and resume information
    function closeButton() {
        setAboutState("hide")
        setResumeState("hide")
    }



    return (

        <div class="container-fluid">
            <div class="row">
                <div className="col-md-4 col-sm-12 justify-content-center side">
                    <SideNav
                        aboutClick={aboutClick}
                        aboutResume={aboutResume}
                    />
                </div>

                <div className="col-md-8 col-sm-12 p-0 mb-3">
                    <div class='cloud'>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xmlSpace="preserve">
                            <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                            <g><g><path
                                class="cloudDrawn"
                                d="M808.5,772.2h-617c-79.9,0-145.2-65.3-145.2-145.2c0-69,47.2-127,112.5-141.6c-3.6-14.5-3.6-25.4-3.6-39.9c0-119.8,98-217.8,217.8-217.8c94.4,0,174.2,61.7,206.9,145.2c29-21.8,65.3-36.3,101.6-36.3c87.1,0,156.1,65.3,163.3,148.8C906.5,500,953.7,558.1,953.7,627C953.7,706.9,888.4,772.2,808.5,772.2z" />
                            </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g>
                        </svg>

                        <div class="bouncing-text">
                            <div class="h">H</div>
                            <div class="e">e</div>
                            <div class="a">a</div>
                            <div class="d">d</div>
                            <div class="i">I</div>
                            <div class="n">n</div>
                            <div class="t">T</div>
                            <div class="hh2">h</div>
                            <div class="e2">e</div>
                            <div class="c">C</div>
                            <div class="l">l</div>
                            <div class="o">o</div>
                            <div class="u">u</div>
                            <div class="d2">d</div>
                            <div class="s">s</div>

                        </div>


                    </div>

                    {/* This div appears when the about link is clicked */}
                    <div id={aboutState} className="about">
                        <button type="button" class="btn btn-light btn-close" onClick={closeButton}>x</button>
                        <div className="about-p">
                            <p>
                                Hello! My name is Anna Conover and I am a full-stack developer.
                            </p>
                            <p>
                                I am originally from Houston, Texas. I went to the University of Oklahoma, where I received a Bachelor's degree in Drama: Acting Emphasis. I am a person that likes learning new things and being challenged. I learn quickly, and work hard.
                            </p>
                            <p>
                                As an actor, I bring a unique understanding of collaboration, creativity, and storytelling into the developer world. My ability and interest in challenges and puzzle-solving always lends itself to my building of a character- and I use the same skills to write code that is clean, mobile-first, and efficient to build your story.
                            </p>
                            <p>
                                In July of 2020, I received a certification from the UCLA coding Bootcamp program, where I learned multiple technical skills (including Javascript, CSS, HTML, mySql, Node, and React) while gaining experience in building projects with teams.
                            </p>

                            <p>
                                You can view my work through the "Portfolio" link. Please do not hesitate to reach out to me through email!
                            </p>
                        </div>
                    </div>

                    {/* This div appears when the resume link is clicked */}
                    <div id={resumeState} className="resume">
                        <button type="button" class="btn btn-light btn-close-resume" onClick={closeButton}>x</button>
                        <p class="mobile-download">Hey! Looks like you're looking at this screen on mobile. Download the PDF <a id="mobile-download-here" target="_blank" href="https://drive.google.com/file/d/1OGL_IKpI9Lo0efmMWescbduoHlTOfIGt/view?usp=sharing">here</a>, or check out this page in a desktop!</p>
                        <embed class="pdf resume-no-show" src={require("../pages/Images//Anna Grace Conover Portfolio Resume.pdf")} width="800px" height="700px" />

                    </div>
                </div>

            </div>

            <div class="container">
                <nav class="navbar navbar-expand-lg bottom-nav">
                    <a class="navbar-brand bottom-nav" href="#">Navbar</a>
                    <a>Credits             <div>Icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</div>
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default Landing;