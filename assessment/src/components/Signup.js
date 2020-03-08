import React, { Component } from "react";

import CountryList from "./CountryList";
import PersonalInfo from "./PersonalInfo";
import { connect } from "react-redux";
import { setUserData } from "../actions";
class Signup extends Component {
  state = {};

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.setUserData(this.state);
  };

  saveInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="ui container segments">
        <div className="ui inverted segment blue">
          <h2 className="heading">Signup</h2>
        </div>
        <div className="ui segment">
          <form action="#" className="ui form">
            <PersonalInfo saveInput={this.saveInput} />
            <CountryList saveInput={this.saveInput} />
            <div className="ui">
              <input
                type="submit"
                className="ui right floated primary button"
                value="Submit"
                onClick={this.handleSubmit}
              />
              <br />
              <br />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUserData: userData => dispatch(setUserData(userData))
});

export default connect(null, mapDispatchToProps)(Signup);
