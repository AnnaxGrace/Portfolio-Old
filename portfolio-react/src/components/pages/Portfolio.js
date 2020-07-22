import React, { useState, useEffect } from "react";
import NavTabs from "../NavTabs"
import "./portfoliostyle.css"
import SideNav from "../SideNav/sideNav";
import Carousel from "../Carousel/Carousel";
import CookingTogether from "../CookingTogether/cookingtogether";
import WhichProject from "../whichProject/whichProject";

// let project;

function Portfolio() {


  function sidekick () {
    localStorage.setItem("project", "sidekick");
    //   project = "sidekick"
    window.location.reload();
      console.log("sidekick")
  }

  function cookingTogether () {
    localStorage.setItem("project", "cookingTogether");
    window.location.reload();
    // project = "cookingTogether"
  }
  
  function once () {
    localStorage.setItem("project", "once");
    window.location.reload();
    //   project = "once"
  }

  function scheduler () {
    localStorage.setItem("project", "scheduler");
    window.location.reload();
    //   project = "scheduler"
  }

  return (
    <div>
        <div className="row">

            <div className="col-2 justify-content-center side" >
                <SideNav />
            </div>

            <div className="col-10 p-0">
                {/* <div className="row "> */}
                    <WhichProject
                    sidekick={sidekick}
                    once={once}
                    cookingTogether={cookingTogether}
                    scheduler={scheduler}
                    // project={project}
                    />
                    
            </div>
            </div>



    
    <footer>
            <p className="copyright">&copy; Anna Conover</p>
        </footer>
    </div>
  );
}

export default Portfolio;