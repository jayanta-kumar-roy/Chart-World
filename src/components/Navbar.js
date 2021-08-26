import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

  import classes from './Navbar.module.css'
function Navbar() {
    return (
        <div className={classes.navbar}>
            <h1 className={classes.heading}>Chart World</h1>
            <Link className={classes.button} to="/Logout">
                  Logout
            </Link>
        </div>
    )
}

export default Navbar
