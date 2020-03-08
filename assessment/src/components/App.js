import React, { Component } from "react";
import Banner from "./Banner";
import Signup from "./Signup";

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Signup />
      </div>
    );
  }
}

export default App;
