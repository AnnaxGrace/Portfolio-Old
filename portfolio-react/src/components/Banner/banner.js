import React, { useState } from "react";
import "./banner.css"
import Carousel from "../Carousel/Carousel"
import Portfolio from "../pages/Portfolio";
import { Link, useLocation } from "react-router-dom";
import SideNav from "../SideNav/sideNav";


function Banner () {
    const [aboutState, setAboutState] = useState("hide")
    const [resumeState, setResumeState] = useState("hide")

    const location = useLocation();


    function aboutClick () {
        setAboutState("show")
        setResumeState("hide")
    }

    function aboutResume () {
        setAboutState("hide")
        setResumeState("show")
    }

    

    return (

        <div className="row">


            <div className="col-2 justify-content-center side">
                <SideNav 
                    aboutClick={aboutClick}
                    aboutResume={aboutResume}
                    location={location}
                />

            </div>

            <div className="col-10 p-0 mb-3">
                <img src={require("../pages/Images/boatAnna2.png")} alt="Banner" className="banner"></img>
                
                <div className="hero-text">
                    Let me build your story
                    {/* <button type="button" className="btn btn-link"> About Me </button> */}
                </div>
                {/* <button type="button" className="btn btn-link links" onClick={aboutClick}> About Me </button> */}
                <div id = {aboutState} className="about">
                    {/* <img src={require("../pages/Images/AnnaConover0132.jpg")} alt="Anna Conover " class="float-left profilePic"/> */}
                        <div className="about-p">
                            <p>
                                Hello! My name is Anna Conover and I am a full-stack developer. 
                            </p>
                            <p>
                                I am originally from Houston, Texas. I went to the University of Oklahoma, where I received a Bachelor's degree in Drama: Acting Emphasis. I am a person that likes learning new things and being challenged. I learn quickly, and work hard. I might not start out good at something, but I know I will be great.
                            </p>
                            <p>
                                As an actor, I bring a unique understanding of collaboration, creativity, and storytelling into the developer world. My ability and interest in challenges and puzzle-solving always lends itself to my building of a character- and I use the same skills to write code that is clean, mobile-first, and efficient to build your story.
                            </p>
                            <p>
                                In July of 2020, I received a certification from the UCLA coding Bootcamp program, where I learned multiple technical skills (including Javascript, CSS, HTML, mySql, Node, and React) while gaining experience in building projects with teams.
                            </p>
                            {/* <p>
                                I have worked extensively in retail, and in food service. Both of these jobs are mentally and physically demanding - while being customer facing. Through these jobs I've excelled in multi-tasking as well as organizing and formatting. Two of my previous jobs had me designing displays within my first few months. I have won awards for service in multiple jobs, due to my ability to solve problems that surfaced both within the company and with customers.
                            </p> */}
                            <p>
                                You can view my work through the "Portfolio" link. Please do not hesitate to reach out to me through email!
                            </p>
                        </div>
                </div>

                <div id = {resumeState} className="resume">
                    {/* <img src={require("../pages/Images/AnnaConover0132.jpg")} alt="Anna Conover " class="float-left profilePic"/> */}
                    {/* <div class="row"> */}
                        {/* <div class="col-md-12 col-xs-12 col-sm-12"> */}
                            <embed class = "pdf" src={require("../pages/Images/AnnaGraceConoverResume.pdf")}  width="800px" height="700px" />
                        {/* </div> */}
                    {/* </div> */}
                </div>

            </div>
            

        </div>
    )
}

export default Banner;