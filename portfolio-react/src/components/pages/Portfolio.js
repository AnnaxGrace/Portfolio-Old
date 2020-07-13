import React from "react";
import NavTabs from "../NavTabs"
import "./portfoliostyle.css"

function Portfolio() {
  return (
    <div>
       {/* <NavTabs /> */}
       <div id="container">

        <div class="main-content">

            <div class="row">
                <div class="col-md-12 col-xs-12 col-sm-12">
                    <h2>Portfolio</h2>
                </div>
            </div>

            <div class="row">

                <div class="col-md-6 col-sm-12 col-xs-12">
                    <div class="img-wrapper">
                        <img class="img-responsive" src={require("./Images/MealPlanner.png")} alt="MealPlanner"/>
                        <div class="img-overlay">
                            <button class = "btn btnstyle" type = "button">
                                <h5>Meal Planner</h5>
                                <a href= "https://annaxgrace.github.io/MealPlanner/" target = "_blank">Live Website</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href= "https://github.com/AnnaxGrace/MealPlanner" target = "_blank">GitHub Repository</a>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-12 col-xs-12">
                    <div class = "project-description">
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
            </div>
        
            <div class="row">

                <div class="col-md-6 col-sm-12 col-xs-12">
                    <div class="img-wrapper">
                        <img class="img-responsive" src={require("./Images/SchedulerImage.png")} alt="WorkScheduler"/>
                        <div class="img-overlay">
                            <button class = "btn btnstyle" type = "button">
                                <h5>Workday Scheduler</h5>
                                <a href= "https://annaxgrace.github.io/WorkDayScheduler/" target = "_blank">Live Website</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href= "https://github.com/AnnaxGrace/WorkDayScheduler" target = "_blank">GitHub Repository</a>
                            </button>
                        </div>
                    </div>
                </div>

            

                <div class="col-md-6 col-sm-12 col-xs-12">
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
            </div>

            <div class="row">

                <div class="col-md-6 col-sm-12 col-xs 12">
                    <div class="img-wrapper">
                        <img class="img-responsive" src={require("./Images/SelfCareSidekick.png")} alt="SelfCareSidekick"/>
                        <div class="img-overlay">
                            <button class = "btn btnstyle" type = "button">
                                <h5>Self-Care Sidekick</h5>
                                <a href= "https://personal-pet.herokuapp.com/" target = "_blank">Live Website</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href= "https://github.com/sharlenemay/personal_pet" target = "_blank">GitHub Repository</a>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-12 col-xs-12">
                    <div class = "project-description">
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

            </div>

            {/* <div class="row">

                <div class="col-md-6 col-sm-12 col-xs 12">
                    <div class="img-wrapper">
                        <img class="img-responsive" src={require("./Images/NoteTaker.png")} alt="NoteTaker"/>
                        <div class="img-overlay">
                            <button class = "btn btnstyle" type = "button">
                                <h5>NoteTaker</h5>
                                <a href= "https://mysterious-oasis-64006.herokuapp.com/" target = "_blank">Live Website</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href= "https://github.com/AnnaxGrace/NoteTaker" target = "_blank">GitHub Repository</a>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-12 col-xs-12">
                    <div class = "project-description">
                        <ul>
                            <li>
                            This NoteTaker allows a user to create, update, delete, and view past notes.
                            </li>
                            <li>
                            Technologies used
                                <ul>
                                    <li>
                                    Front end uses HTML, CSS, and JavaScript/jQuery
                                    </li>
                                    <li>
                                    Back end uses node.js with express
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div class="row">

                <div class="col-md-6 col-sm-12 col-xs 12">
                    <div class="img-wrapper">
                        <img class="img-responsive" src={require("./Images/Burgers.png")} alt="Burgers"/>
                        <div class="img-overlay">
                            <button class = "btn btnstyle" type = "button">
                                <h5>Burgers</h5>
                                <a href= "https://anna-burger.herokuapp.com/" target = "_blank">Live Website</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href= "https://github.com/AnnaxGrace/Burger" target = "_blank">GitHub Repository</a>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-12 col-xs-12">
                    <div class = "project-description">
                        <ul>
                            <li>
                            This Burger website allows you to create your own hamburger, and then "eat it", moving it to another column.
                            </li>
                            <li>
                            Technologies used
                                <ul>
                                    <li>
                                    Front end uses HTML, CSS, and JavaScript/jQuery. 
                                    </li>
                                    <li>
                                    Back end uses node.js with express, express-handlebars, and mySql
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div class="row">

                <div class="col-md-6 col-sm-12 col-xs 12">
                    <div class="img-wrapper">
                        <img class="img-responsive" src={require("./Images/CodeQuizPortfolio.png")} alt="CodeQuiz"/>
                        <div class="img-overlay">
                            <button class = "btn btnstyle" type = "button">
                                <h5>Code Quiz</h5>
                                <a href= "https://annaxgrace.github.io/CodeQuiz/" target = "_blank">Live Website</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href= "https://github.com/AnnaxGrace/CodeQuiz" target = "_blank">GitHub Repository</a>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-12 col-xs-12">
                    <div class = "project-description">
                        <ul>
                            <li>
                            This CodeQuiz website includes a quiz that a user can retake to try to beat their high score.
                            </li>
                            <li>
                            Technologies used
                                <ul>
                                    <li>
                                    Front end uses HTML, CSS, and JavaScript/jQuery. 
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div> */}

            {/* </div> */}

        </div>

        <div class = "main-content">
            <div class="row">
                <div class="col-md-12 col-xs-12 col-sm-12">
                    <h2>Resume</h2>
                    <embed class = "pdf" src={require("./Images/Anna Grace Conover Resume1.pdf")} width="800px" height="1100px" />
                </div>
            </div>

        </div>
                    

        

        

    </div>
    <footer>
            <p class="copyright">&copy; Anna Conover</p>
        </footer>
    </div>
  );
}

export default Portfolio;