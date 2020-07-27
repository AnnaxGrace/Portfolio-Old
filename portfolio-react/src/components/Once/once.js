import React from "react"

function Once (props) {

return (
<div>
<div className="col-md-12 col-sm-12 col-xs-12 image-style">
    <div className="img-wrapper description">
        <img className="img-responsive" src={require("../pages/Images/Once1.png")} alt="Once Upon an Adventure Homepage"/>
        <div className="img-overlay">
            <button className="btn btnstyle" type = "button">
                
                <p className="button-header">Once Upon An Adventure</p>
                <a className="web-links" href= "https://onceuponanadventure.herokuapp.com/" target = "_blank" rel="noopener noreferrer">Live Website</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a className="web-links" href= "https://github.com/AnnaxGrace/once-upon-an-adventure"  target = "_blank" rel="noopener noreferrer">GitHub Repository</a>
            </button>
            <div className="dropdown dropdown-style">
                    <button className="btn btn-secondary dropdown-toggle drop" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       More Projects
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button type="button" className="btn btn-link dropdown-item" id="Self-Care Sidekick" onClick={props.cookingTogether}> Cooking Together </button>
                        <button type="button" className="btn btn-link dropdown-item" id="Self-Care Sidekick" onClick={props.sidekick}> Self-Care Sidekick</button>
                        <button type="button" className="btn btn-link dropdown-item" id="Self-Care Sidekick" onClick={props.scheduler}> Work-Day Scheduler </button>

                    </div>
                </div>
        </div>
    </div>
    </div>

    <div className = "project-description">
        <ul>
                            <li>
                            An RPG choose-your-own adventure game that focuses on education. As your character fights and makes choices, your story is written. Aims to educate in a fun way – since children are more likely to learn that way.                            </li>
                            <li>
                            Technologies used
                                <ul>
                                    <li>
                                    Front-end built with React.js, canvas, and CSS
                                    </li>
                                    <li>
                                    Back end uses node.js with MongoDB, Mongoose, howler, and Redux
                                    </li>
                                </ul>
                            </li>
                            <li>
                            Guest Account
                                <ul>
                                    <li>
                                    email: OUAA@mail.com
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

export default Once;