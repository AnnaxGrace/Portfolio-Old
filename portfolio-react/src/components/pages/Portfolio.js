import React, { useState, useEffect } from "react";
import NavTabs from "../NavTabs"
import "./portfoliostyle.css"
import SideNav from "../SideNav/sideNav";
import Carousel from "../Carousel/Carousel";
import CookingTogether from "../CookingTogether/cookingtogether";

function Portfolio() {

  function sidekick () {
      console.log("sidekick")
  }

  function cookingTogether () {
    console.log("cooking")
  }
  
  function once () {
      console.log("once")
  }

  function scheduler () {
      console.log("scheduler")
  }

  return (
    <div>
        <div className="row">

            <div className="col-2 justify-content-center side" >
                <SideNav />
            </div>

            <div className="col-10 p-0">
                {/* <div className="row "> */}
                    <CookingTogether 
                    sidekick={sidekick}
                    once={once}
                    cooking={cookingTogether}
                    scheduler={scheduler}
                    />
                    
            </div>
            </div>



    
    <footer>
            <p class="copyright">&copy; Anna Conover</p>
        </footer>
    </div>
  );
}

export default Portfolio;