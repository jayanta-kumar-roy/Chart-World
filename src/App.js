import './App.css';
import React ,{ useState }from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Login from './components/Login'
import Logout from './components/Logout'
import Admin from './components/Admin'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/Admin">
              <Admin />
      </Route>
      <Route path="/Logout">
              <Logout />
      </Route>
      <Route path="/">
        <Login/>
      </Route>

      </Switch>
      
    </div>
  );
}

export default App;
