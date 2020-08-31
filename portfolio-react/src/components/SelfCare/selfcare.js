import React from "react"

function Selfcare (props) {
return (
<div>
    
    {/* Self-Care SideKick image, drop-down, and description */}
    <div className="col-md-12 col-sm-12 col-xs-12 image-style">
        <div className="img-wrapper description">
            <img className="img-responsive" src={require("../pages/Images/SelfCareSidekick.png")} alt="Self-Care Sidekick Homepage"/>
            <div className="img-overlay">
                <button className="btn btnstyle" type = "button">
                    <p className="button-header">Self-Care Sidekick</p>
                    <a className="web-links" href= "https://selfcare-sidekick.herokuapp.com/" target = "_blank" rel="noopener noreferrer">Live Website</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className="web-links" href= "https://github.com/AnnaxGrace/selfcare-sidekick"  target = "_blank" rel="noopener noreferrer">GitHub Repository</a>
                </button>
                <div className="dropdown dropdown-style">
                    
                    {/* links to our other projects */}
                    <button className="btn btn-secondary dropdown-toggle drop" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       More Projects
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button type="button" className="btn btn-link dropdown-item" id="Self-Care Sidekick" onClick={props.cookingTogether}> Cooking Together </button>
                        <button type="button" className="btn btn-link dropdown-item" id="Self-Care Sidekick" onClick={props.once}> Once Upon an Adventure</button>
                        <button type="button" className="btn btn-link dropdown-item" id="Self-Care Sidekick" onClick={props.scheduler}> Work-Day Scheduler </button>

                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* This div shows up when you hover over the picture */}
    <div className = "project-description">
        <ul>
            <li>
                This habit-builder application allows a user to take care of a digital pet by creating self-care tasks and completing them.
            </li>
            <li>
                Technologies used
                <ul>
                    <li>
                        Front end uses HTML, CSS, JavaScript/jQuery, and Bootstrap
                    </li>
                    <li>
                        Back end uses node.js with express, passport, passport-session, handlebars, handlebars-helper, nodemailer, bycrypt, mySql, and sequelize
                    </li>
                </ul>
            </li>
            <li>
                Guest Account
                <ul>
                    <li>
                        email: selfsidekick@mail.com
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

export default Selfcare;