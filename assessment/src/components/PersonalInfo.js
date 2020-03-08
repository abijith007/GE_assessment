import React, { Component } from "react";

class PersonalInfo extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="three fields">
          <div className="field">
            <label>
              <h4>First Name</h4>
            </label>
            <input type="text" placeholder="First Name" />
          </div>
          <div className="field">
            <label>Middle name</label>
            <input type="text" placeholder="Middle Name" />
          </div>
          <div className="field">
            <label>Last name</label>
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className="two fields">
          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="email" />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input type="text" placeholder="phone number"></input>
          </div>
        </div>
        <div className="field">
          <label>Address</label>
          <input type="text" placeholder="Address" />
        </div>
        <div className="three fields">
          <div className="field">
            <label>City</label>
            <input type="text" placeholder="City" />
          </div>
          <div className="field">
            <label>State</label>
            <input type="text" placeholder="State" />
          </div>
          <div className="field">
            <label>Postal</label>
            <input type="text" placeholder="Zip Code" />
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
