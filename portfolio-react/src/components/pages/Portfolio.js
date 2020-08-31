import React from "react";
import "./portfoliostyle.css"
import SideNav from "../SideNav/sideNav";
import WhichProject from "../whichProject/whichProject";


function Portfolio() {


  function sidekick () {
    localStorage.setItem("project", "sidekick");
    window.location.reload();
  }

  function cookingTogether () {
    localStorage.setItem("project", "cookingTogether");
    window.location.reload();
  }
  
  function once () {
    localStorage.setItem("project", "once");
    window.location.reload();
  }

  function scheduler () {
    localStorage.setItem("project", "scheduler");
    window.location.reload();
  }

  function descriptionHover () {
    console.log("this is working")
  }

  return (
    <div>
        <div className="row">

            <div className="col-md-2 col-lg-2 col-sm-12 col-xs-12 justify-content-center side" >
                <SideNav />
            </div>

            <div className="col-md-10 col-sm-12 p-0">
                    <WhichProject
                    sidekick={sidekick}
                    once={once}
                    cookingTogether={cookingTogether}
                    scheduler={scheduler}
                    descriptionHover={descriptionHover}
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