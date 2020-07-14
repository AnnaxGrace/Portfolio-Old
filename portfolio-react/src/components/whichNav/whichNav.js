import React from "react"
import SideLinks from "../sideLinks/sideLinks"
import PortLinks from "../PortLinks/PortLinks"

function WhichNav (props) {
    console.log("this is props.location")
    console.log(props.location)
    console.log(props.location.pathname)
    if (props.location.pathname === "/Portfolio") {
        return <SideLinks 
        aboutClick={props.aboutClick}
        aboutResume={props.aboutResume}/>
    }
    return <PortLinks />
}

export default WhichNav;