import React from "react"

function Carousel () {
return (
    <div id="portfolio-carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="row">
                <div ClassName="col-md-5 col-sm-5 col-xs-5">
                    {/* <div className="carousel-item active m-t-20"> */}
                        <img src={require("../pages/Images/MealPlanner.png")} className="w-50" alt="..." />
                    {/* </div> */}
                </div>
                <div className="col-md-5 col-sm-12 col-xs-12">
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
            {/* </div> */}
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
            </div>

             <div className="carousel-item">
                <img src={require("../pages/Images/SelfCareSidekick.png")} class="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div className="carousel-item">
                <img src={require("../pages/Images/SchedulerImage.png")} class="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
            </div>

        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
)
}

export default Carousel;