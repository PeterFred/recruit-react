import React, { Component } from "react";
import "./App.css";
import RegisterCardHeader from "./components/headers/registerCardHeader";
import MenuHeader from "./components/headers/menuHeader";
import MenuContent from "./components/menuContent";
import RegisterContent from "./components/registerContent";
import Form from "./components/form";
import BurgerIcon from "./components/headers/burgerIcon";
import "./apps.css";
import ArrowIcon from "./components/headers/arrowIcon";

class App extends Component {
  state = {
    displayMenu: false
  };

  handleBurger = () => {
    this.setState(prevState => {
      return { displayMenu: !prevState.displayMenu };
    });
  };

  render() {
    const { displayMenu } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="navMenu">
            {displayMenu === false && (
              <BurgerIcon className="icon" click={this.handleBurger} />
            )}

            {displayMenu === true && (
              <ArrowIcon className="icon" click={this.handleBurger} />
            )}

            {displayMenu === false && <RegisterCardHeader />}
            {displayMenu === true && <MenuHeader />}
          </div>
          <div className="body">
            {displayMenu === false && <RegisterContent />}
            {displayMenu === true && <MenuContent />}
          </div>

          <div className="Form">{displayMenu === false && <Form />}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
