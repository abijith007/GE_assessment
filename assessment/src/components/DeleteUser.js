import React, { Component } from "react";
import TextField from "./TextField";
import { connect } from "react-redux";
import { deleteUserData } from "../actions";
import axios from 'axios'

class DeleteUser extends Component {
  
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.deleteUserData(this.state);
    this.deleteUser();
    /*axios.delete("http://localhost:4000/users/remove/"+this.state.username+"/"+this.state.password)
    
    .then(response =>{
      console.log(response.data);
    })
    .catch(err=>{
      console.log(err); 
    })*/
  };

  deleteUser()
  {
    if(window.confirm('Are u sure?'))
    {
      axios.delete("http://localhost:4000/users/remove/"+this.state.username+"/"+this.state.password)
    
    .then(response =>{
    console.log(response.data);
    })
    .catch(err=>{
      console.log(err); 
    })
    }
  }

  saveInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state)
  };

  render() {
    return (
      <div style={{ marginTop: "13%" }}>
        <div className="ui centered grid container">
          <div className="six wide column">
            <div className="ui segment inverted blue">
              <h2 className="heading">Delete User</h2>
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
                    className="ui primary button"
                    type="submit"
                  >
                    Delete User
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
  deleteUserData: userData => dispatch(deleteUserData(userData))
});

export default connect(null, mapDispatchToProps)(DeleteUser);
