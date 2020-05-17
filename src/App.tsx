import * as React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import "./App.css";
import Pages from "./pages/Pages";
import Users from "./pages/users/users";
import GitHubLogo from "./components/githubLogo/GitHubLogo";
import Title from "./components/title/Title";
import BankBaseCapital from "./components/bankBaseCapital/bankBaseCapital";

const App = () => {

  return (
    <Router>
      <div>
        <Title />
        <BankBaseCapital />
        <GitHubLogo />
        <Switch>
          <Route exact path="/" component={Pages} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
