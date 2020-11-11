import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./login.css";
// import Seatbooking from "./Seatbooking";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      entryType:
        localStorage.getItem("entryType") === null ? "Register" : "Login",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      book: false,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.userName == "admin" && this.state.password == "admin") {
      localStorage.setItem("entryType", "loggedIn");
      this.props.history.push("/seat");
    }
    this.setState({ book: true });
  };

  render() {
    return (
      <div className="margin-top">
        <div className="container form ">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="labels">User Name:</label>
              <input
                className="form-control"
                name="userName"
                type="text"
                value={this.state.userName}
                required
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label className="labels">Password:</label>
              <input
                className="form-control"
                name="password"
                type="password"
                value={this.state.password}
                required
                onChange={this.handleChange}
              />
            </div>

            <input
              type="submit"
              value={this.state.entryType}
              className="login-btn"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
