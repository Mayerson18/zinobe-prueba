import * as React from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import "./App.css";
import Pages from "./pages/Pages";
import GitHubLogo from "./components/githubLogo/GitHubLogo";
import Title from "./components/title/Title";

const App = () => {

  return (
    <Router>
      <div>
        <Title />
        <GitHubLogo />
        <Switch>
          <Route exact path="/" component={Pages} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
