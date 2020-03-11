import React, { Component } from "react";
import CountryList from "./CountryList";
import PersonalInfo from "./PersonalInfo";
import { connect } from "react-redux";
import { setUserData } from "../actions";
import Axios from "axios";
class Signup extends Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.setUserData(this.state);
    const userObj={
      "id":0,
      "username": this.state.user_name,
      "password": this.state.password,
      "email": this.state.email

    };
    Axios.post('http://localhost:4000/users',userObj)
    .then((res=>{
      console.log(res.data);
    }))
    .catch((error=>{
      console.log(error);

    }))
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
  setUserData: userData => dispatch(setUserData(userData))
});

export default connect(null, mapDispatchToProps)(Signup);
