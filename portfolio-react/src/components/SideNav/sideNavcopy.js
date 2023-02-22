import React from "react"
import WhichNav from "../whichNav/whichNav"
import "./sideNavcopy.css"

//component for our side nav bar
function SideNav(props) {

    return (
        <div className="side-wrapper">
            <div className="raindrops">
                <div id="top-row">
                    <a class="raindrop" onClick={props.aboutClick}>
                        <p class="raintext">about me</p>
                    </a>
                    <a class="raindrop">
                        <p class="raintext">certs</p>
                    </a>
                    <a class="raindrop" data-toggle="modal" data-target="#resumeModal">
                        <p class="raintext">resume</p>
                    </a>
                </div>
            </div>
            {/* <div id="mid-row">
                <a class="raindrop">
                    <p class="raintext">contact</p>
                </a>
                <a class="raindrop">
                    <p class="raintext">certs</p>
                </a>
            </div> */}


            {/* <div className=" row justify-content-center icon-small">
                <a href="https://github.com/AnnaxGrace" target="_blank" className="fab fa-github icon fa-3x d-flex " rel="noopener noreferrer"></a>
                <a href="https://linkedin.com/in/anna-grace-conover" target="_blank" className="fab fa-linkedin icon fa-3x d-flex" rel="noopener noreferrer"></a>
                <div class="git-link">
                    <a href="mailto:annaxgrace2022@gmail.com" className="fas fa-envelope icon fa-3x d-flex" rel="noopener noreferrer"></a>
                </div>
            </div> */}

            {/* <div class="row justify-content-center mb-5">
                <img src={require("../pages/Images/aws-certified-solutions-architect-associate.png")} alt="AWS SAA Certification icon" ></img>
                <img src={require("../pages/Images/cert_mark_SP_small_150px.png")} alt="Safe Certification icon" ></img>
                <img src={require("../pages/Images/hashicorp-certified-terraform-associate.png")} alt="Terraform associate Icon" ></img>
            </div> */}

            {/* determines which navigation links to show */}
            {/* <div class="row justify-content-center">
                <WhichNav
                    aboutClick={props.aboutClick}
                    aboutResume={props.aboutResume}
                />
            </div> */}

        </div>
    )
}

export default SideNav;