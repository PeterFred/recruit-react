import React, { Component } from "react";

class RegisterCard extends Component {
  state = {
    render: true
  };

  handleClick = () => {
    console.log("Click handle");
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-light">Register Card Form</nav>
    );
  }
}

export default RegisterCard;
