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

  return (
    <div>
        <div className="row">

            <div className="col-2 justify-content-center side" >
                <SideNav />
            </div>

            <div className="col-10 p-0">
                    <WhichProject
                    sidekick={sidekick}
                    once={once}
                    cookingTogether={cookingTogether}
                    scheduler={scheduler}
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