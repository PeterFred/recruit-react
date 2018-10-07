import React from "react";

import "./arrowIcon.css";

const ArrowIcon = props => (
  <button className="toggle-button" onClick={props.click}>
    <div id="arrow-container">
      <div id="arrow-wrapper">
        <div id="arrow-head" />
        <div id="arrow-stem" />
      </div>
    </div>
  </button>
);

export default ArrowIcon;
