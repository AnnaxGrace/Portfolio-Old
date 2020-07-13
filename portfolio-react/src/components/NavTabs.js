import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./pages/navbarstyle.css"

function NavTabs() {
  
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <div>
        {/* <nav class="navbar navbar-expand-lg navbar-dark bg-light"> */}
        <nav>
        
         <a class="navbar-brand" href="https://annaxgrace.github.io/Portfolio/" />
        {/* <img src ={require("./pages/Images/RoseWebsiteWhite.png")} alt = "signature icon" class = "navbar-icon"/>&nbsp;&nbsp;Let Me Build Your Story
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>   */}
        <Link
                        to="/portfolio"
                        className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                        Portfolio
         </Link>
          
        {/* <nav aria-label="breadcrumb">
            <ol class="breadcrumb"> */}
                {/* <li class="breadcrumb-item">
                    <Link 
                        to="/" 
                        className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Home
                    </Link> 
                </li> */}
                {/* <li class="breadcrumb-item">
                    <Link
                        to="/portfolio"
                        className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                        Portfolio
                    </Link>
                </li>
            </ol> */}
        </nav>
    
       
        {/* </nav> */}
//    
    </div>
  );
}

export default NavTabs;
