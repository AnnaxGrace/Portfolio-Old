import React from "react"
import { Link, useLocation } from "react-router-dom";

//Our links for the portfolio page
function PortLinks () {
    
    const location = useLocation();

    return(
        <div>

            <Link
            to="/Portfolio"
            className={location.pathname === "/Portfolio" ? "about" : "links"} id="portfolio-text">

                Home
            </Link>
                    
        </div>
    )
}

export default PortLinks;