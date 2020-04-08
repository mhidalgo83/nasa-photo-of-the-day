import React from "react";

const DateDropdown = (props) => {
  

  return (
    <div>
      <label htmlFor="date">Or, select a date: </label>
      <input type="date" id="date"/>
      <button onClick={props.onClick}>Submit</button>
    </div>
  );
};

export default DateDropdown;
