import React from "react"


function CookingTogether (props) {


return (
<div>
    
    {/* cooking together image, drop-down, and description */}
    <div className="col-md-12 col-sm-12 col-xs-12 image-style">
        <div className="img-wrapper description">
            <img className="img-responsive" src={require("../pages/Images/MealPlanner.png")} alt="MealPlanner"/>
            <div className="img-overlay">

                <button className="btn btnstyle" type = "button">
                
                    <p className="button-header">CookingTogether</p>
                    <a className="web-links" href= "https://cooking-together.herokuapp.com/" target = "_blank" rel="noopener noreferrer">Live Website</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className="web-links" href= "https://github.com/AnnaxGrace/MealPlanner" target = "_blank" rel="noopener noreferrer">GitHub Repository</a>
                    {/* <button type="button" className = "fa fa-lock d-flex btn-lock" onClick={props.descriptionHover} rel="noopener noreferrer">&nbsp; Lock Description</button>  */}

                </button>

                <div className="dropdown dropdown-style">

                    {/* links to our other projects */}
                    <button className="btn btn-secondary dropdown-toggle drop" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       More Projects
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button type="button" className="btn btn-link dropdown-item" id="Self-Care Sidekick" onClick={props.sidekick}> Self-Care Sidekick </button>
                        <button type="button" className="btn btn-link dropdown-item" id="Self-Care Sidekick" onClick={props.once}> Once Upon an Adventure</button>
                        <button type="button" className="btn btn-link dropdown-item" id="Self-Care Sidekick" onClick={props.scheduler}> Work-Day Scheduler </button>

                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* This div shows up when you hover over the picture */}
    <div className="project-description">
       
        <ul>
            <li>
                This one-stop-shop meal planning website tackles the issue of the mental load in households by allowing planning by multiple chefs.
            </li>
            <li>
                Technologies used
                <ul>
                    <li>
                        Front end uses HTML, CSS, and JavaScript/jQuery
                    </li>
                    <li>
                        Back end uses node.js with express, passport, passport-session, nodemailer, bycrypt, mySql, and sequelize
                    </li>
                </ul>
            </li>
            <li>
                Guest Account
                <ul>
                    <li>
                        email: planner@mail.com
                    </li>
                    <li>
                        password: Gue$tAcnt1
                    </li>
                </ul>
            </li>
        </ul>
    </div>

</div>
)
}

export default CookingTogether;