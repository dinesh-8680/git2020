import React, { Component } from "react";
import "./App.css";
import FirstPage from "./components/auth/FirstPage";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/auth/Signup";
import SecondPage from "./components/auth/SecondPage";
import Login from "./components/auth/Login";
import Profile from "./components/dashboard/Profile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  SamplePage = () => {
    const a = (
      <div>
        <Nav />
        <h1>Sample Page</h1>
      </div>
    );
    return a;
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={this.SamplePage} />
            <Route path="/FirstPage" component={FirstPage} />
            <Route path="/SecondPage" component={SecondPage} />
            <Route path="/Signup" component={Signup} />
            <Route path="/Login" component={Login} />
            <Route path="/Profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
