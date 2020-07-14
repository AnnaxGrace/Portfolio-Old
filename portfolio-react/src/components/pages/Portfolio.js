import React from "react";
import NavTabs from "../NavTabs"
import "./portfoliostyle.css"
import SideNav from "../SideNav/sideNav";
import Carousel from "../Carousel/Carousel";

function Portfolio() {
  return (
    <div>
        <div class="row">

            <div className="col-2 justify-content-center side">
                <SideNav />
            </div>

            <div className="col-10 p-0">
                <div className="row ">

                    <div class="col-md-12 col-sm-12 col-xs-12 image-style">
                        <div class="img-wrapper description">
                            <img class="img-responsive" src={require("./Images/MealPlanner.png")} alt="MealPlanner"/>
                            <div class="img-overlay">
                                <button class = "btn btnstyle" type = "button">
                                    <h5>CookingTogether</h5>
                                    <a href= "https://annaxgrace.github.io/MealPlanner/" target = "_blank">Live Website</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href= "https://github.com/AnnaxGrace/MealPlanner" target = "_blank">GitHub Repository</a>
                                </button>

                                {/* <div id="project-description" className="show">
                                    This one-stop-shop meal planning website tackles the issue of the mental load in households by allowing planning by multiple chefs.
            
                                    <ul>
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
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>


    <div id="project-description" className="show">
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
                {/* <Carousel /> */}
            </div>



    
    <footer>
            <p class="copyright">&copy; Anna Conover</p>
        </footer>
    </div>
  );
}

export default Portfolio;