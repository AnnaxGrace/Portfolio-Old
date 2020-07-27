import React, { useState } from "react";
import "./banner.css"
import SideNav from "../SideNav/sideNav";


function Banner () {
    const [aboutState, setAboutState] = useState("hide")


    function aboutClick () {
        setAboutState("show")
    }

    function aboutResume () {
        setAboutState("show")
    }

    return (

        <div className="row">

            <div className="col-2 justify-content-center side">
                <SideNav 
                    aboutClick={aboutClick}
                    aboutResume={aboutResume}
                />

            </div>
            <div className="col-10 p-0 mb-3">
                <img src={require("../pages/Images/boatAnna2.png")} alt="Back of Head of woman overlooking the ocean" className="banner"></img>
                
                <div className="hero-text">
                    Let me build your story
                </div>
                <div id = {aboutState} className="about">
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
                            
                            <p>
                                You can view my work through the "Portfolio" link. Please do not hesitate to reach out to me through email!
                            </p>
                        </div>
                </div>

            </div>

        </div>
    )
}

export default Banner;