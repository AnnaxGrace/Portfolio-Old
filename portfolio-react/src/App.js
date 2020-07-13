import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Banner from './components/Banner/banner';


function App() {
  return (
    <Router>
      <div>
        {/* <NavTabs /> */}
        <Route exact path="/" component={Banner} />
        <Route exact path="/portfolio" component={Banner} />
      </div>
    </Router>
    
  );
}

export default App;
