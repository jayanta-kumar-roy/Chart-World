import React,{useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import Navbar from './Navbar'
import BarChart from './BarChart';
import LineChart from './LineChart';
import RadarChart from './RadarChart';
import DoughnutChart from './DoughnutChart';
import PolarAreaChart from './PolarAreaChart';
import BubbleChart from './BubbleChart';
import './Admin.css'

function Admin() {
  const[sidebar,setSidebar]=useState(true);
  const showSidebar=()=>setSidebar(!sidebar);

    // let [loggedIn,setLoggedIn]=useState(true);
    const token = localStorage.getItem("token");
   
    let loggedIn=true;
    if(token===null){
        // setLoggedIn(false);
        loggedIn=false;
    }
    
    if(loggedIn===false){
        return <Redirect to="/"></Redirect>
    }

    return (
      <div>
        <div className="navbar">
          <Navbar />
        </div>
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>

        <div className="main">
          <div className={sidebar ? "sidebar active " : "sidebar"}>
            <ul className="sidebar-list">
              <li className="row">
                <Link className="links" to="/Admin/BarChart">
                  Bar Chart
                </Link>
              </li>
              <li className="row">
                <Link className="links" to="/Admin/LineChart">
                  Line Chart
                </Link>
              </li>
              <li className="row">
                <Link className="links" to="/Admin/RadarChart">
                  Radar Chart
                </Link>
              </li>
              <li className="row">
                <Link className="links" to="/Admin/DoughnutChart">
                  Doughnut Chart
                </Link>
              </li>
              <li className="row">
                <Link className="links" to="/Admin/PolarAreaChart">
                  Polar Area Chart
                </Link>
              </li>
              <li className="row">
                <Link className="links" to="/Admin/BubbleChart">
                  Bubble Chart
                </Link>
              </li>
            </ul>
          </div>

          <div className="main-components">
            <Switch>
              <Route path="/Admin/BarChart">
                <BarChart />
              </Route>
              <Route path="/Admin/LineChart">
                <LineChart />
              </Route>
              <Route path="/Admin/RadarChart">
                <RadarChart />
              </Route>
              <Route path="/Admin/DoughnutChart">
                <DoughnutChart />
              </Route>
              <Route path="/Admin/PolarAreaChart">
                <PolarAreaChart />
              </Route>
              <Route path="/Admin/BubbleChart">
                <BubbleChart />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    );
}

export default Admin
