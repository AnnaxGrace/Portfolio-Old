import React, { useState } from "react";
import "../Banner/banner.css";
import "./landingstyle.css"
import SideNav from "../SideNav/sideNavcopy";


function Landing() {

    //define our necessary states to display the corresponding divs
    const [aboutState, setAboutState] = useState("hide")
    const [resumeState, setResumeState] = useState("hide")
    const [skillsState, setSkillsState] = useState("hide")
    const [certState, setCertState] = useState({terraform: "hide", aws: "hide"})


    //shows the about information
    function aboutClick() {
        setAboutState("show")
        setResumeState("hide")
        setSkillsState("hide")
    }

    //shows the resume information
    function aboutResume() {
        setAboutState("hide")
        setResumeState("show")
        setSkillsState("hide")
    }

    function skillsClick() {
        setAboutState("hide")
        setResumeState("hide")
        setSkillsState("show")
    }

    //hides the about and resume information
    function closeButton() {
        setAboutState("hide")
        setResumeState("hide")
        setSkillsState("hide")
    }

    function showSkill(skill){
        
    }

    function showCert(cert){
        setCertState({...certState, [cert]: "show"})
    }



    return (

        <div class="container-fluid">

            {/* <p class="pt-5 top-name">ANNA GRACE PENNINGTON</p> */}

            <div class="row">
                <div className="col-lg-5 col-md-12 col-sm-12 p-0 mb-3">
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

                    <SideNav
                        aboutClick={aboutClick}
                        aboutResume={aboutResume}
                        skillsClick={skillsClick}
                    />
                </div>

                <div id={aboutState} className="mt-5 col-lg-7 col-md-12 col-sm-12 justify-content-center">
                    <button type="button" class="btn mt-4 close-btn" onClick={closeButton}>x</button>

                    <div class="mt-4">
                        <p class="brand-statement">
                            I'm a DevOps Engineer with a drive for creating code and processes that make the world a better place – focusing on modern and transformative work that consistently enriches the workplace and the community. I have a Bachelor’s Degree in Fine Arts, and as an actor I bring a unique understanding of collaboration, creativity, and storytelling into the industry. My ability and interest in challenges and puzzle-solving always lends itself to my building of a character for a play - and I use the same skills to write code and create infrastructure that is clean and efficient to build your story
                        </p>
                    </div>
                </div>

                {/* skills div */}
                <div id={skillsState} className="mt-3 col-lg-7 col-md-12 col-sm-12 justify-content-center">
                    <button type="button" class="btn skills-close-btn" onClick={closeButton}>x</button>
                    <div class="row mb-3 skills-list">

                        <ul class="col-md-4 list-group list-group-flush">
                            <li class="list-group-item clickable-skills" onClick={() => showSkill('automation')}>Automation and Orchestration</li>
                            <li class="list-group-item clickable-skills">HTML</li>
                            <li class="list-group-item clickable-skills">IaC</li>
                            <li class="list-group-item clickable-skills">Java</li>
                            <li class="list-group-item clickable-skills">JavaScript, React</li>
                            <li class="list-group-item clickable-skills">Node.js</li>
                            <li class="list-group-item clickable-skills">PowerShell</li>
                            <li class="list-group-item clickable-skills">SQL</li>
                        </ul>

                        <p id={certState.terraform} class="col-md-8 cert-paragraph">
                            The Terraform Associate certification is for Cloud Engineers specializing in operations, IT, or development who know the basic concepts and skills associated with open source HashiCorp Terraform.
                        </p>

                    </div>

                    <div class="row justify-content-center certs mb-5">
                        <img class="clickable-skills-certs" onClick={() => showCert('aws')} src={require("../pages/Images/aws-certified-solutions-architect-associate.png")} alt="AWS SAA Certification icon" ></img>
                        <img class="clickable-skills-certs" onClick={() => showCert('SAFe')} src={require("../pages/Images/cert_mark_SP_small_150px.png")} alt="Safe Certification icon" ></img>
                        <img class="clickable-skills-certs" onClick={() => showCert('terraform')} src={require("../pages/Images/hashicorp-certified-terraform-associate.png")} alt="Terraform associate Icon" ></img>
                        <img class="clickable-skills-certs" onClick={() => showCert('gcp')} src={require("../pages/Images/gcp_ace_badge.png")} alt="GCP associate Icon" ></img>
                    </div>

                </div>

                <div class="modal fade" id="resumeModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                <button type="button" class="close close-btn-resume" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <p class="mobile-download">Hey! Looks like you're looking at this screen on mobile. Download the PDF <a id="mobile-download-here" target="_blank" href="https://drive.google.com/file/d/1OGL_IKpI9Lo0efmMWescbduoHlTOfIGt/view?usp=sharing">here</a>, or check out this page in a desktop!</p>
                                <embed class="pdf" src={require("../pages/Images//Anna Grace Conover Portfolio Resume.pdf")} width="100%" height="700px" />
                            </div>
                            <div class="modal-footer">
                            </div>
                        </div>
                    </div>
                </div>

                {/* This div appears when the resume link is clicked */}
                {/* <div id={resumeState} className="col-lg-7 col-md-12 col-sm-12 justify-content-center resume-cloud-container">
                    <button type="button" class="btn close-btn-resume" onClick={closeButton}>x</button>
                    <p class="mobile-download">Hey! Looks like you're looking at this screen on mobile. Download the PDF <a id="mobile-download-here" target="_blank" href="https://drive.google.com/file/d/1OGL_IKpI9Lo0efmMWescbduoHlTOfIGt/view?usp=sharing">here</a>, or check out this page in a desktop!</p>
                    <embed class="pdf resume-cloud" src={require("../pages/Images//Anna Grace Conover Portfolio Resume.pdf")} width="800px" height="600px" />
                </div> */}

            </div>

            <footer className="row justify-content-center icon-small">
                <div className="col">
                    <div className="row justify-content-center">
                        <p class="top-name justify-content-center">ANNA GRACE PENNINGTON</p>
                    </div>
                    <div className="row justify-content-center">
                        <a href="https://github.com/AnnaxGrace" target="_blank" className="fab fa-github icon fa-3x d-flex " rel="noopener noreferrer"></a>
                        <a href="https://linkedin.com/in/anna-grace-conover" target="_blank" className="fab fa-linkedin icon fa-3x d-flex" rel="noopener noreferrer"></a>
                        <div class="git-link">
                            <a href="mailto:annaxgrace2022@gmail.com" className="fas fa-envelope icon fa-3x d-flex" rel="noopener noreferrer"></a>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        test
                    </div>
                </div>
            </footer>

            {/* <div>Icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</div> */}

        </div>
    )
}

export default Landing;