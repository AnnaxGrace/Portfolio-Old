import React from "react"

function Scheduler (props) {

return (
<div>

    {/* scheduler image, drop-down, and description */}
    <div className="col-md-12 col-sm-12 col-xs-12 image-style">
        <div className="img-wrapper description">
            <img className="img-responsive" src={require("../pages/Images/Scheduler2.png")} alt="WorkDay Scheduler Homepage"/>
            <div className="img-overlay">
                <button className="btn btnstyle" type = "button">
                    <p className="button-header">Work Day Scheduler</p>
                    <a className="web-links" href= "https://annaxgrace.github.io/WorkDayScheduler/" target = "_blank" rel="noopener noreferrer">Live Website</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className="web-links" href= "https://github.com/AnnaxGrace/WorkDayScheduler" target = "_blank" rel="noopener noreferrer">GitHub Repository</a>
                </button>
                <div className="dropdown dropdown-style">

                    {/* links to our other projects */}
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

    {/* This div shows up when you hover over the picture */}
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