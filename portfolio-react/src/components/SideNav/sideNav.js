import React from "react"
import WhichNav from "../whichNav/whichNav"
import "./sideNav.css"

//component for our side nav bar
function SideNav (props) {

return (
    <div>
        <div className="name">
            <p>Anna</p>
            <p>Grace</p>
            <p>Conover</p>
        </div>

        <div className="justify-content-center">
            <a href="https://github.com/AnnaxGrace" target = "_blank" className = "fab fa-github icon fa-3x d-flex " rel="noopener noreferrer"></a> 
            <a href="https://linkedin.com/in/anna-grace-conover" target = "_blank" className = "fab fa-linkedin icon fa-3x d-flex" rel="noopener noreferrer"></a>
                <div class="git-link">
                    <a href="mailto:anna.grace.conover@gmail.com" className = "fas fa-envelope icon fa-3x d-flex" rel="noopener noreferrer"></a>
                    <p id="email-fa">anna.grace.conover@gmail.com</p> 
                </div>

                {/* determines which navigation links to show */}
                <WhichNav 
                    aboutClick={props.aboutClick}
                    aboutResume={props.aboutResume}
                />

        </div>
           
    </div>
)
}

export default SideNav;