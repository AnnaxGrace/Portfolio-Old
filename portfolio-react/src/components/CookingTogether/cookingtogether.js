import React from "react"

function CookingTogether (props) {
    console.log(props)
return (
<div>
<div className="col-md-12 col-sm-12 col-xs-12 image-style">
    <div className="img-wrapper description">
        <img className="img-responsive" src={require("../pages/Images/MealPlanner.png")} alt="MealPlanner"/>
        <div className="img-overlay">
            <button className="btn btnstyle" type = "button">
                {/* <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle drop" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       More Projects
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button type="button" className="btn btn-link dropdown-item" id="Self-Care Sidekick" onClick={props.sidekick}> Self-Care Sidekick </button>
                        <button type="button" className="btn btn-link dropdown-item" id="Self-Care Sidekick" onClick={props.once}> Once Upon an Adventure</button>
                        <button type="button" className="btn btn-link dropdown-item" id="Self-Care Sidekick" onClick={props.scheduler}> Work-Day Scheduler </button>

                    </div>
                </div> */}
                <p className="button-header">CookingTogether</p>
                <a href= "cooking-together.herokuapp.com/" target = "_blank">Live Website</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href= "https://github.com/AnnaxGrace/MealPlanner" target = "_blank">GitHub Repository</a>
            </button>
            <div className="dropdown dropdown-style">
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