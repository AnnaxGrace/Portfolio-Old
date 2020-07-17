import React from "react"

function Scheduler (props) {
return (
<div>
<div className="col-md-12 col-sm-12 col-xs-12 image-style">
    <div className="img-wrapper description">
        <img className="img-responsive" src={require("../pages/Images/SchedulerImage.png")} alt="WorkDay Scheduler Image"/>
        <div className="img-overlay">
            <button className="btn btnstyle" type = "button">
                {/* <div className="dropdown dropdown-style">
                    <button className="btn btn-secondary dropdown-toggle drop" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       More Projects
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button type="button" className="btn btn-link dropdown-item" id="Self-Care Sidekick" onClick={props.cookingTogether}> Cooking Together </button>
                        <button type="button" className="btn btn-link dropdown-item" id="Self-Care Sidekick" onClick={props.once}> Once Upon an Adventure</button>
                        <button type="button" className="btn btn-link dropdown-item" id="Self-Care Sidekick" onClick={props.sidekick}> Self-Care Sidekick </button>

                    </div>
                </div> */}
                <p className="button-header">Work Day Scheduler</p>
                <a href= "https://annaxgrace.github.io/WorkDayScheduler/" target = "_blank">Live Website</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href= "https://github.com/AnnaxGrace/WorkDayScheduler" target = "_blank">GitHub Repository</a>
            </button>
            <div className="dropdown dropdown-style">
                    <button className="btn btn-secondary dropdown-toggle drop" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       More Projects
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button type="button" className="btn btn-link dropdown-item" id="Self-Care Sidekick" onClick={props.cookingTogether}> Cooking Together </button>
                        <button type="button" className="btn btn-link dropdown-item" id="Self-Care Sidekick" onClick={props.once}> Once Upon an Adventure</button>
                        <button type="button" className="btn btn-link dropdown-item" id="Self-Care Sidekick" onClick={props.sidekick}> Self-Care Sidekick </button>

                    </div>
                </div>
        </div>
    </div>
    </div>

    <div class = "project-description">
                        <ul>
                            <li>
                            This WorkDay Scheduler allows a user to make and update events to their day calendar
                            </li>
                            <li>
                            Technologies used
                                <ul>
                                    <li>
                                    Front end uses HTML, CSS, JavaScript/jQuery, and relies upon local storage functions 
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

</div>
)
}

export default Scheduler;