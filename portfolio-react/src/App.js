import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";


function App() {
  return (
    <Router>
      <div>
        {/* <NavTabs /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router>
    
  );
}

export default App;
