import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/Portfolio/portfolio" component={Portfolio} />
        <Route exact path="/Portfolio" component={Home} />
      </div>
    </Router>
    
  );
}

export default App;
