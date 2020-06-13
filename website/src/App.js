import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Introduction from "./pages/Introduction.js";
import Experience from "./pages/Experience.js";
import Personality from "./pages/Personality.js";
import ErrorPage from "./pages/ErrorPage.js";
import Navigation from "./components/Navigation"
import history from "./history"


function App() {
  return (
    <Router history={history}>
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Introduction}>
          <Redirect to="/introduction"/>
        </Route>
        <Route path="/introduction" component={Introduction}/>
        <Route path="/experience" component={Experience} />
        <Route path="/personality" component={Personality} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
