import React from "react";

const Banner = () => {
  return (
    <div className="ui top menu inverted ">
      <div style={{ marginLeft: "10px" }}>
        <img src="ge.png" height="65" width="180" alt="GE_logo" />
      </div>
      <div className="ui right inverted secondary menu">
        <a className="item" href="/create">
          Create
        </a>
        <a className="item" href="/retrieve">
          Retrieve
        </a>
        <a className="item" href="/update">
          Update
        </a>
        <a className="item" href="/delete">
          Delete
        </a>
      </div>
    </div>
  );
};

export default Banner;
