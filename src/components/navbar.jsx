import React, { Component } from "react";

class NavBar extends Component {
  state = {
    render: true
  };

  handleClick = () => {
    console.log("Click handle");
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <button type="button">Primary</button>
        </a>
      </nav>
    );
  }
}

export default NavBar;
