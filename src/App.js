import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Form from "./components/form";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <NavBar />
        </div>
        <Form />
      </React.Fragment>
    );
  }
}

export default App;
