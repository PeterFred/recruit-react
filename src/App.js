import React, { Component } from "react";
import "./App.css";
import RegisterCard from "./components/registerCard";
import Menu from "./components/menu";
import Form from "./components/form";

class App extends Component {
  state = {
    displayMenu: false
  };

  handleToggle(event) {
    event.preventDefault();
    this.setState({
      displayMenu: !this.state.displayMenu
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="topMenu">
            <button type="button" onClick={event => this.handleToggle(event)}>
              Burger Icon
            </button>
            {this.state.displayMenu === false && <RegisterCard />}
            {this.state.displayMenu === true && <Menu />}
          </div>
          <div className="Form">
            <Form />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
