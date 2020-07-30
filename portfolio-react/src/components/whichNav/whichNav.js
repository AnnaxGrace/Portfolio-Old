import React from "react"
import SideLinks from "../sideLinks/sideLinks"
import PortLinks from "../PortLinks/PortLinks"
import { useLocation } from "react-router-dom";

// function to determine which link component to use depending on our location
function WhichNav (props) {

    const location = useLocation();

    if (location.pathname === "/Portfolio/portfolio") {
        return <PortLinks />
    }
    return <SideLinks 
        aboutClick={props.aboutClick}
        aboutResume={props.aboutResume}/>
}

export default WhichNav;