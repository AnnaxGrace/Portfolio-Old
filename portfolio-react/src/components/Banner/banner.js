import React, { useState } from "react";
import "./banner.css"
import Carousel from "../Carousel/Carousel"
import Portfolio from "../pages/Portfolio";
import { Link, useLocation } from "react-router-dom";
import SideNav from "../SideNav/sideNav";


function Banner () {
    const [aboutState, setAboutState] = useState("hide")

    const location = useLocation();
    console.log(location)


    function aboutClick () {
        setAboutState("show")
    }

    function aboutResume () {
        setAboutState("show")
    }

    function aboutPortfolio () {
        setAboutState("show")
    }

    return (

        <div className="row">

            {/* <div className="col-1 hero-text">
                <p>
                Anna
                </p>
                <p>
                Grace  
                </p>
                <p>
                Conover    
                </p>
            </div>    */}

            <div className="col-2 justify-content-center side">
                <SideNav 
                    aboutClick={aboutClick}
                    aboutResume={aboutResume}
                    location={location}
                />

            </div>
            {/* <Carousel /> */}
            <div className="col-10 p-0 mb-3">
                <img src={require("../pages/Images/boatAnna2.png")} alt="Banner" className="banner"></img>
                {/* <div className="name">
                    <p>
                    Anna
                    </p>
                    <p>
                    Grace  
                    </p>
                    <p>
                    Conover    
                    </p>
                </div> */}
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
            {/* <div id = {aboutState} className="about"> */}

            </div>
            {/* <Portfolio /> */}
            {/* <div className="col-2 justify-content-center"> */}
                {/* <div className="name">
                    <p>
                    Anna
                    </p>
                    <p>
                    Grace  
                    </p>
                    <p>
                    Conover    
                    </p>
                </div> */}
            {/* <a href="https://github.com/AnnaxGrace" target = "_blank" class = "fab fa-github icon fa-3x d-flex justify-content-end" ></a>
                <a href="https://linkedin.com/in/anna-grace-conover" target = "_blank" class = "fab fa-linkedin icon fa-3x d-flex justify-content-end" ></a>
                <a href="mailto:anna.grace.conover@gmail.com" class = "fas fa-envelope icon fa-3x d-flex justify-content-end" ></a>
            </div> */}

        </div>
    )
}

export default Banner;