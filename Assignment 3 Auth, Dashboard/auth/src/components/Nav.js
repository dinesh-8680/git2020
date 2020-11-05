import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <div className="navigation">
          <div className="container">
            <h2>Logo</h2>
            <nav>
              <Link to="/FirstPage">
                <button>Login</button>
              </Link>
              <Link to="/SecondPage">
                <button>SignUp</button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
