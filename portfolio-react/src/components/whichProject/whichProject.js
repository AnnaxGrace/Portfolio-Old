import React from "react"
import Once from "../Once/once"
import Selfcare from "../SelfCare/selfcare"
import CookingTogether from "../CookingTogether/cookingtogether"
import Scheduler from "../Scheduler/scheduler"

//determines which project to return 
function WhichProject (props) {

    //gets our information from our location, depends on which button is clicked
    var project = localStorage.getItem("project");

    if (project === "once") {
        return <Once 
            sidekick={props.sidekick}
            once={props.once}
            cookingTogether={props.cookingTogether}
            scheduler={props.scheduler}
        />
    }

    if (project === "sidekick") {
        return <Selfcare 
                sidekick={props.sidekick}
                once={props.once}
                cookingTogether={props.cookingTogether}
                scheduler={props.scheduler}
        />
    }

    if (project === "cookingTogether") {
        return <CookingTogether 
            sidekick={props.sidekick}
            once={props.once}
            cookingTogether={props.cookingTogether}
            scheduler={props.scheduler}
        />
    }

    if (project === "scheduler") {
        return <Scheduler 
            sidekick={props.sidekick}
            once={props.once}
            cookingTogether={props.cookingTogether}
            scheduler={props.scheduler}
        />
    }

    //default return cooking together project
    return <CookingTogether 
        sidekick={props.sidekick}
        once={props.once}
        cooking={props.cookingTogether}
        scheduler={props.scheduler}
    />
    
}

export default WhichProject;