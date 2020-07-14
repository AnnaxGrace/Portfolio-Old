import React from "react"
import { Link, useLocation } from "react-router-dom";

function SideLinks (props) {
    
    const location = useLocation();

    return(
        <div>
            <button type="button" className="btn btn-link links" id="about-text" onClick={props.aboutClick}> About Me </button>
            <Link
            to="/portfolio/portfolio"
            // className={location.pathname === "/portfolio" ? "nav-link active links" : "nav-link"}>
            className={location.pathname === "/portfolio" ? "about" : "links"} id="portfolio-text">

                Portfolio
            </Link>
                    {/* <button type="button" className="btn btn-link links" id="portfolio-text" onClick={aboutPortfolio}> Portfolio </button> */}
                    <button type="button" className="btn btn-link links" id="resume-text" onClick={props.aboutResume}> Resume </button>
                    
        </div>
    )
}

export default SideLinks;