import React from "react";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Transactions from "./pages/Transactions/Transactions"
import About from "./pages/About/About"
import {  Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} exact/>  
      <Route path="/transactions" component={Transactions} />  
      <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
