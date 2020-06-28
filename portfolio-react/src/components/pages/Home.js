import React from "react";
import NavTabs from "../NavTabs"
import Header from "../Header"
import "./indexstyle.css"


function Home() {
  return (
    <div>
        <Header />
        <NavTabs />

        <div id="container">

        
            <div class="main-content">
                <div class="row">
                    <div class="col-md-12 col-xs-12 col-sm-12">
                        <h2>About Me</h2>
                    </div>
                </div>
            
                <main>

                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <img src={require("./Images/AnnaConover0132.jpg")} alt="Anna Conover " class="float-left profilePic"/>
                            <p>
                                Hello! My name is Anna Conover and I am a full-stack developer. 
                            </p>
                            <p>
                                I am originally from Houston, Texas. I went to school in Oklahoma at the University of Oklahoma, where I received a Bachelor's degree in Drama: Acting Emphasis. I am a person that likes learning new things and being challenged. I learn quickly, and work hard. I might not start out good at something, but I know I will be great.
                            </p>
                            <p>
                                As an actor, I bring a unique understanding of collaboration, creativity, and storytelling into the developer world. My ability and interest in challenges and puzzle-solving always lends itself to my building of a character- and I use the same skills to write code that is clean, mobile-first, and efficient to build your story.
                            </p>
                            <p>
                                In July of 2020, I received a certification from the UCLA coding Bootcamp program, where I learned multiple technical skills (including Javascript, CSS, HTML, mySql, Node, and React) while gaining experience in building projects with teams.
                            </p>
                            <p>
                                I have worked extensively in retail, and in food service. Both of these jobs are mentally and physically demanding - while being customer facing. Through these jobs I've excelled in multi-tasking as well as organizing and formatting. Two of my previous jobs had me designing displays within my first few months. I have won awards for service in multiple jobs, due to my ability to solve problems that surfaced both within the company and with customers.
                            </p>
                            <p>
                                You can find my work in this website's "Portfolio" page, and please do not hesitate to reach out to me through email!
                            </p>
                        </div>
                    </div>

            
                </main>
            </div>


        </div>

        <footer>
            <p class="copyright">&copy; Anna Conover</p>
        </footer>
    </div>
  );
}

export default Home;
