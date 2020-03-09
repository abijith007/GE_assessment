import React, { Component } from "react";
import TextField from "./TextField";
import { setLoginData } from "../actions";
import { connect } from "react-redux";
class Login extends Component {
  saveInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.setLoginData(this.state);
    console.log(this.state);
  };

  render() {
    return (
      <div style={{ marginTop: "13%" }}>
        <div className="ui centered grid container">
          <div className="six wide column">
            <div className="ui segment inverted blue">
              <h2 className="heading">Login</h2>
            </div>
            <div className="ui fluid card">
              <div className="content">
                <form onSubmit={this.handleSubmit} className="ui form">
                  <div className="field">
                    <TextField
                      label="Username"
                      name="username"
                      placeholder="Username"
                      onChange={this.saveInput}
                    />
                  </div>
                  <div className="field">
                    <label>
                      <h4>Password</h4>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={this.saveInput}
                      required
                    />
                  </div>
                  <button
                    className="ui primary labeled icon button"
                    type="submit"
                  >
                    <i className="unlock alternate icon"></i>
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setLoginData: loginData => dispatch(setLoginData(loginData))
});

export default connect(null, mapDispatchToProps)(Login);
