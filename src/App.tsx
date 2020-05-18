import * as React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import "./App.css";
import Pages from "./pages/Pages";
import Users from "./pages/users/users";
import GitHubLogo from "./components/githubLogo/GitHubLogo";
import Title from "./components/title/Title";
import BankBaseCapital from "./components/bankBaseCapital/bankBaseCapital";
import getAllCredit from './api/credits/getAllCredit';
import { Credit, CreditData } from "./models/credit";
import { useDispatch } from 'react-redux';
import ListUsers from "./pages/users/listUser";

const App = () => {
  // const bankAmount = useSelector((store: defaultState) => store.bankAmount);
  const dispatch = useDispatch();

  const GetAllCredit = async () => {
    const res = await getAllCredit();
    const credits: [Credit] = res.data;
    let amount = 0;
    
    credits.map((credit: Credit) => {
      amount += credit.amount;
    });
    console.log('res :>> ', amount);
    dispatch({type: 'DECREMENT_BANK_AMOUNT', value: amount});
  }

  React.useEffect(() => {
    GetAllCredit();
  });

  return (
    <Router>
      <div>
        <Title />
        <BankBaseCapital />
        <GitHubLogo />
        <Switch>
          <Route exact path="/" component={Pages} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/list-users" component={ListUsers} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
