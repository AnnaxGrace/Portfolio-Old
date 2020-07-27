import React from "react"
import SideLinks from "../sideLinks/sideLinks"
import PortLinks from "../PortLinks/PortLinks"
import { useLocation } from "react-router-dom";

function WhichNav (props) {
    const location = useLocation();

        if (location.pathname === "/Portfolio") {
        return <SideLinks 
        aboutClick={props.aboutClick}
        aboutResume={props.aboutResume}/>
    }
    return <PortLinks />
}

export default WhichNav;