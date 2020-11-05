import React, { Component } from "react";
import fire from "../config/Fire";
import Login from "../auth/Login";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };

    //  this.handleEvent = this.handleEvent.bind(this)
  }

  componentDidMount() {
    this.authLinstener();
  }

  authLinstener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return this.state.user ? (
      <div>
        <div className="card">
          <h1>John Doe</h1>
          <p className="title">CEO & Founder, Example</p>
          <p>Harvard University</p>
          <p>{this.state.user.email}</p>
        </div>
      </div>
    ) : (
      <Login />
    );
  }
}
