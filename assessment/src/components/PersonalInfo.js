import React, { Component } from "react";

import TextField from "./TextField";

class PersonalInfo extends Component {
  render() {
    return (
      <div>
        <div className="three fields">
          <TextField
            label="First Name"
            name="first_name"
            placeholder="First Name"
            onChange={this.props.saveInput}
          />
          <TextField
            label="Middle Name"
            name="middle_name"
            placeholder="Middle Name"
            onChange={this.props.saveInput}
          />
          <TextField
            label="Last Name"
            name="last_name"
            placeholder="Last Name"
            onChange={this.props.saveInput}
          />
        </div>
        <div className="two fields">
          <TextField
            label="Email"
            name="email"
            placeholder="Email"
            onChange={this.props.saveInput}
          />
          <TextField
            label="Phone Number"
            name="phone"
            placeholder="Phone Number"
            onChange={this.props.saveInput}
          />
        </div>
        <TextField
          label="Address"
          name="address"
          placeholder="Address"
          onChange={this.props.saveInput}
        />
        <div className="three fields">
          <TextField
            label="City"
            name="city"
            placeholder="City"
            onChange={this.props.saveInput}
          />
          <TextField
            label="State"
            name="state"
            placeholder="State"
            onChange={this.props.saveInput}
          />
          <TextField
            label="Postal"
            name="postal"
            placeholder="Postal"
            onChange={this.props.saveInput}
          />
        </div>
        <div className="three fields">
          <TextField
            label="User Name"
            name="user_name"
            placeholder="User Name"
            onChange={this.props.saveInput}
          />
          <TextField
            label="Password"
            name="password"
            placeholder="Password"
            onChange={this.props.saveInput}
          />
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
