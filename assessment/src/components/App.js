import React from "react";
import Banner from "./Banner";
import Signup from "./Signup";
import Login from "./Login";
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";

import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="ui">
      <BrowserRouter>
        <Banner />
        <div>
          <Route path="/create" exact component={Signup} />
          <Route path="/retrieve" exact component={Login} />
          <Route path="/update" exact component={UpdateUser} />
          <Route path="/delete" exact component={DeleteUser} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
