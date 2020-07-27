import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";


function App() {
  return (
    <HashRouter basename = "/">
      <div>
        <Route exact path="/Portfolio/portfolio" component={Portfolio} />
        <Route exact path="/Portfolio" component={Home} />
        <Route exact path="/" component={Home} />

      </div>
    </HashRouter>
    
  );
}

export default App;
