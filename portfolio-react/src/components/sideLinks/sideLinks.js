import React from "react"
import { Link, useLocation } from "react-router-dom";


//Our links for the portfolio page
function SideLinks (props) {
    
    const location = useLocation();

    return(

        <div className="links-wrapper">
            <button type="button" className="btn btn-link links" id="about-text" onClick={props.aboutClick}> About Me </button>
            <Link
            to="/Portfolio/portfolio"
            className={location.pathname === "/portfolio" ? "about" : "links"} id="portfolio-text">

                Portfolio
            </Link>
            <button type="button" className="btn btn-link links" id="resume-text" onClick={props.aboutResume}> Resume </button>
                    
        </div>
    )
}

export default SideLinks;