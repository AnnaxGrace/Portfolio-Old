import React from "react"
import { Link, useLocation } from "react-router-dom";

function PortLinks () {
    
    const location = useLocation();

    return(
        <div>
            {/* <button type="button" className="btn btn-link links" id="about-text" onClick={props.aboutClick}> About Me </button> */}
            <Link
            to="/Portfolio"
            // className={location.pathname === "/portfolio" ? "nav-link active links" : "nav-link"}>
            className={location.pathname === "/Portfolio" ? "about" : "links"} id="portfolio-text">

                Home
            </Link>
                    {/* <button type="button" className="btn btn-link links" id="portfolio-text" onClick={aboutPortfolio}> Portfolio </button> */}
                    {/* <button type="button" className="btn btn-link links" id="resume-text" onClick={props.aboutResume}> Resume </button> */}
                    
        </div>
    )
}

export default PortLinks;