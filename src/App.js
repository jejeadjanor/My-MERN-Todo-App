import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTask from "./components/Create-task"
import UpdateTask from "./components/Update-task"
import TodosList from "./components/Todos-list";
//import logo from "../public/images/todo";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-danger">
            <a className="navbar-brand" href="#" target="_blank">
            <img src="./images/todo.jpg" width="40" height="40" alt="logo"/>
            </a>
            <Link to="/" className="navbar-brand">My EveryDay Task</Link>
            <div classname="collapse nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Task</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/edit/:id" className="nav-link">Update</Link>
                </li>
              </ul>
            </div>
          </nav>
        {/* <div><img src="./images/todo.jpg" width="40" height="40" alt="logo"/></div>
        <div>
          <h1>EveryDay Task</h1>
        </div> */}
        <Route path="/" exact component={TodosList}/>
        <Route path="/create" component={CreateTask}/>
        <Route path="/edit/:id" component={UpdateTask}/>
        </div>
      </Router>
    );
  }
}

export default App;