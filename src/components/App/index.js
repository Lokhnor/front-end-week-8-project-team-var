import React from "react";
import css from "./App.module.css";
import NewContract from "../NewContract/NewContract";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "../../components/West-Midlands-CA.png";
import ContractList from "../ContractList/ContractList";
import Contract from "../Contract/Contract";

//Dashboard Page
//Should render list of contracts, each showing completion status (e.g. 1/3, 0/3)
//  -Colour coding to indicate status?
//  -Should also have button to open each contract and view data

//Should include button to create new db entries

function App() {
  return (
    <div className={css.container}>
      <img src={logo} alt={"logo"} className={css.logo} />
      <hr></hr>

      <Router>
        <Switch>
          <Route path="/ContractList">
            <ContractList />
          </Route>
          <Route path="/Contract/:id">
            <Contract />
          </Route>
          <Route path="/NewContract">
            <NewContract />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
