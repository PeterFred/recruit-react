import React, { Component } from "react";
import "./App.css";
import RegisterCardHeader from "./components/headers/registerCardHeader";
import MenuHeader from "./components/headers/menuHeader";
import MenuContent from "./components/menuContent";
import RegisterContent from "./components/registerContent";
import Form from "./components/form";
//import HamburgerButton from "react-hamburger-button";
import BurgerIcon from "./components/headers/burgerIcon";
import "./apps.css";

class App extends Component {
  state = {
    displayMenu: false,
    open: false
  };

  handleToggle(event) {
    console.log("handleEvent");
    event.preventDefault();
    this.setState({
      displayMenu: !this.state.displayMenu
    });
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  handleBurger = () => {
    console.log("handleburger");
    this.setState(prevState => {
      return { displayMenu: !prevState.displayMenu };
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="navMenu">
            <BurgerIcon className="burgerIcon" click={this.handleBurger} />

            {this.state.displayMenu === false && <RegisterCardHeader />}
            {this.state.displayMenu === true && <MenuHeader />}
          </div>
          <div className="body">
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
