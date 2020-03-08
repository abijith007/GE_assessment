import React, { Component } from "react";

import CountryList from "./CountryList";
import PersonalInfo from "./PersonalInfo";
class Signup extends Component {
  state = {};

  render() {
    return (
      <div className="ui container segments">
        <div className="ui inverted segment blue">
          <h2 className="heading">Signup</h2>
        </div>
        <div className="ui segment">
          <form className="ui form">
            <PersonalInfo />
            <CountryList />
            <div className="ui">
              <input
                type="submit"
                className="ui right floated primary button"
                value="Submit"
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

export default Signup;
