import React, { Component } from "react";
import { connect } from "react-redux";

import TextField from "./TextField";

class PersonalInfo extends Component {
  state = {
    first_name: null,
    last_name: null
  };

  handleSubmit = event => {
    this.setState({
      first: event.target.value
    });
  };

  render() {
    return (
      <div>
        <div className="three fields">
          <TextField
            label="First Name"
            name="first_name"
            placeholder="First Name"
          />
          <TextField
            label="Middle Name"
            name="middle_name"
            placeholder="Middle Name"
          />
          <TextField
            label="Last Name"
            name="last_name"
            placeholder="Last Name"
          />
        </div>
        <div className="two fields">
          <TextField label="Email" name="email" placeholder="Email" />
          <TextField
            label="Phone Number"
            name="phone"
            placeholder="Phone Number"
          />
        </div>
        <TextField label="Address" name="address" placeholder="Address" />
        <div className="three fields">
          <TextField label="City" name="city" placeholder="City" />
          <TextField label="State" name="state" placeholder="State" />
          <TextField label="Postal" name="postal" placeholder="Postal" />
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
