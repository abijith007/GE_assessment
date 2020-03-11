import React, { Component } from "react";
import CountryList from "./CountryList";
import PersonalInfo from "./PersonalInfo";
import { connect } from "react-redux";
import { createUserData } from "../actions";

class Signup extends Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.createUserData(this.state);
  };

  saveInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="ui container segments" style={{ marginTop: "3%" }}>
        <div className="ui inverted segment blue">
          <h2 className="heading">Signup</h2>
        </div>
        <div className="ui segment">
          <form onSubmit={this.handleSubmit} className="ui form">
            <PersonalInfo saveInput={this.saveInput} />
            <CountryList saveInput={this.saveInput} />
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

const mapDispatchToProps = dispatch => ({
  createUserData: userData => dispatch(createUserData(userData))
});

export default connect(null, mapDispatchToProps)(Signup);
