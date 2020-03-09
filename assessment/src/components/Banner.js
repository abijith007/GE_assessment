import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="ui top menu inverted ">
      <div style={{ marginLeft: "10px" }}>
        <img src="ge.png" height="65" width="180" alt="GE_logo" />
      </div>
      <div className="ui right inverted secondary menu">
        <Link className="item" to="/create">
          Create
        </Link>
        <Link className="item" to="/retrieve">
          Retrieve
        </Link>
        <Link className="item" to="/update">
          Update
        </Link>
        <Link className="item" to="/delete">
          Delete
        </Link>
      </div>
    </div>
  );
};

export default Banner;
