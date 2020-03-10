import React, { Component } from "react";
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
  };

  componentDidMount() {}

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
                    <label>
                      <h4>Username</h4>
                    </label>
                    <div className="ui left icon input">
                      <i className="user icon"></i>
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={this.saveInput}
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>
                      <h4>Password</h4>
                    </label>
                    <div className="ui left icon input">
                      <i className="lock icon"></i>
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.saveInput}
                        required
                      />
                    </div>
                  </div>
                  <div className="ui left floated">
                    <p id="login_response"></p>
                  </div>
                  <div className="ui right floated">
                    <button
                      className="ui primary labeled icon button"
                      type="submit"
                    >
                      <i className="unlock alternate icon"></i>
                      Login
                    </button>
                  </div>
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
