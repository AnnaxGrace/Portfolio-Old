import React from "react";
import "./pages/indexstyle.css"

function Header() {
  return (
    <div>

        <header>
    
            <div class ="row">
                <div class = "col-12">
                    <h1>Anna Grace Conover</h1>
                    <div>
                        <a href="https://github.com/AnnaxGrace" target = "_blank" class = "fab fa-github icon fa-3x d-flex justify-content-end" ></a>
                        <a href="https://linkedin.com/in/anna-grace-conover" target = "_blank" class = "fab fa-linkedin icon fa-3x d-flex justify-content-end" ></a>
                        <a href="mailto:anna.grace.conover@gmail.com" class = "fas fa-envelope icon fa-3x d-flex justify-content-end" ></a>
                    </div>
                </div>
            </div>

        </header>
    </div>
  );
}

export default Header;
