import React from "react"
import WhichNav from "../whichNav/whichNav"
import "./sideNav.css"

function SideNav (props) {


return (
    <div>
                <div className="name">
                    <p>
                    Anna
                    </p>
                    <p>
                    Grace  
                    </p>
                    <p>
                    Conover    
                    </p>
                </div>
                <div className="justify-content-center">
                    {/* <div className="github-div">
                        <a href="https://github.com/AnnaxGrace" target = "_blank" className = "fab fa-github icon fa-3x d-flex " rel="noopener noreferrer"></a>
                        <p id="git-link">githublink</p>
                    </div>
                    <div className="linkedin-div">
                        <a href="https://linkedin.com/in/anna-grace-conover" target = "_blank" className = "fab fa-linkedin icon fa-3x d-flex" rel="noopener noreferrer"></a>
                        <p id="git-link">githublink</p>
                    </div>
                    <div className="email-div">
                        <a href="mailto:anna.grace.conover@gmail.com" className = "fas fa-envelope icon fa-3x d-flex" rel="noopener noreferrer"></a>
                        <p id="git-link">githublink</p>
                    </div> */}
                    <div class="div-links">
                        <a href="https://github.com/AnnaxGrace" target = "_blank" className = "fab fa-github icon fa-3x d-flex " rel="noopener noreferrer"></a> 
                        <a href="https://linkedin.com/in/anna-grace-conover" target = "_blank" className = "fab fa-linkedin icon fa-3x d-flex" rel="noopener noreferrer"></a>
                        <a href="mailto:anna.grace.conover@gmail.com" className = "fas fa-envelope icon fa-3x d-flex" rel="noopener noreferrer"></a>
                        <p id="git-link">anna.grace.conover@gmail.com</p>  
                    </div>
                    {/* <a href="https://github.com/AnnaxGrace" target = "_blank" className = "fab fa-github icon fa-3x d-flex " rel="noopener noreferrer"></a> 
                    <a href="https://linkedin.com/in/anna-grace-conover" target = "_blank" className = "fab fa-linkedin icon fa-3x d-flex" rel="noopener noreferrer"></a>
                    <a href="mailto:anna.grace.conover@gmail.com" className = "fas fa-envelope icon fa-3x d-flex" rel="noopener noreferrer"></a>
                    <p>anna.grace.conover@gmail.com</p>  */}
                    <WhichNav 
                    aboutClick={props.aboutClick}
                    aboutResume={props.aboutResume}
                    />
                    {/* <button type="button" className="btn btn-link links" id="about-text" onClick={props.aboutClick}> About Me </button>
                    <Link
                        to="/portfolio/portfolio"
                        // className={location.pathname === "/portfolio" ? "nav-link active links" : "nav-link"}>
                        className={location.pathname === "/portfolio" ? "about" : "links"} id="portfolio-text">

                        Portfolio
                    </Link> */}
                    {/* <button type="button" className="btn btn-link links" id="portfolio-text" onClick={aboutPortfolio}> Portfolio </button> */}
                    {/* <button type="button" className="btn btn-link links" id="resume-text" onClick={props.aboutResume}> Resume </button> */}
                    

                </div>
                {/* <button type="button" className="btn btn-link"> About Me </button> */}
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
                {/* <button type="button" className="btn btn-link links" onClick={aboutClick}> About Me </button> */}

           
    </div>
)
}

export default SideNav;