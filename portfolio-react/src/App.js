import React from 'react';
import { HashRouter, Route, Link} from "react-router-dom";
// import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Banner from './components/Banner/banner';


function App() {
  return (
    <HashRouter basename = "/">
      <div>
        {/* <NavTabs /> */}
        <Route exact path="/Portfolio/portfolio" component={Portfolio} />
        <Route exact path="/Portfolio" component={Home} />
        <Route exact path="/" component={Home} />

      </div>
    </HashRouter>
    
  );
}

export default App;
