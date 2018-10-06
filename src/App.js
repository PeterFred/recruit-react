import React, { Component } from "react";
import "./App.css";
import RegisterCardHeader from "./components/registerCardHeader";
import MenuHeader from "./components/menuHeader";
import MenuContent from "./components/menuContent";
import RegisterContent from "./components/registerContent";
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
            {this.state.displayMenu === false && <RegisterCardHeader />}
            {this.state.displayMenu === true && <MenuHeader />}
          </div>
          <div>
            {this.state.displayMenu === false && <RegisterContent />}
            {this.state.displayMenu === true && <MenuContent />}
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
