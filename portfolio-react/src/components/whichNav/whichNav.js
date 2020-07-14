import React from "react"
import SideLinks from "../sideLinks/sideLinks"
import PortLinks from "../PortLinks/PortLinks"
import { Link, useLocation } from "react-router-dom";

function WhichNav (props) {
    const location = useLocation();

    console.log("this is props.location")
    // console.log(props.location)
    // console.log(props.location.pathname)
    console.log(location.pathname)
    if (location.pathname === "/Portfolio") {
        return <SideLinks 
        aboutClick={props.aboutClick}
        aboutResume={props.aboutResume}/>
    }
    return <PortLinks />
}

export default WhichNav;