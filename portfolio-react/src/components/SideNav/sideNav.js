import React from "react"
import { Link, useLocation } from "react-router-dom";
import WhichNav from "../whichNav/whichNav"

function SideNav (props) {

    const location = useLocation();

    // function whichNav () {
    //     if (props.location === "home") {
    //         return <sideLinks />
    //     }
    //     return <sideLinks />
    // }

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
                    <a href="https://github.com/AnnaxGrace" target = "_blank" className = "fab fa-github icon fa-3x d-flex" ></a>
                    <a href="https://linkedin.com/in/anna-grace-conover" target = "_blank" className = "fab fa-linkedin icon fa-3x d-flex" ></a>
                    <a href="mailto:anna.grace.conover@gmail.com" className = "fas fa-envelope icon fa-3x d-flex " ></a>
                    <WhichNav 
                    aboutClick={props.aboutClick}
                    aboutResume={props.aboutResume}
                    location={props.location}/>
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