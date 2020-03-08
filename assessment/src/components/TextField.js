import React from "react";

const TextField = props => {
  return (
    <div className="field">
      <label>
        <h4>{props.placeholder}</h4>
      </label>
      <input type="text" name={props.name} placeholder={props.placeholder} />
    </div>
  );
};

export default TextField;
