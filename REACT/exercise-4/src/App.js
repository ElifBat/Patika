import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import About from "./Component/About";
import Home from "./Component/Home";
import Users from "./Component/Users"

const App = () => {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact activeStyle={{backgroundColor: "black", color: "white"}} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{backgroundColor: "black", color: "white"}} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{backgroundColor: "black", color: "white"}} to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          {/* <Route path="/:id" component={User} /> */}
        </Switch>
      </div>
    </Router>


  );
}

export default App;
