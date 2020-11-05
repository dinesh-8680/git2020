import React, { Component } from "react";
import fire from "../config/Fire";
import "./Home.css";
import Form from "./Todo/TodoInput";
import TodoList from "./Todo/TodoList";
import Profile from "./Profile";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Profile: "",
    };
    // this.handleEvent = this.handleEvent.bind(this)
  }
  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <div className="navigation">
          <div className="container">
            <h2>Logo</h2>
            <nav>
              <ul>
                <li>About</li>
                <Link to="Profile">
                  <li>Profile</li>
                </Link>
                <button onClick={this.logout}>Logout</button>
              </ul>
            </nav>
          </div>
        </div>
        <div className="todo">
          <div className="container">
            <Form />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}
