import React, { Component } from "react";

class Form extends Component {
  //   constructor() {
  //     super();
  // this.
  state = {
    creditCard: "",
    cvc: "",
    expiry: ""
  };
  //   }

  handleCreditCardChange = event => {
    const creditCard = event.target.validity.valid
      ? event.target.value
      : this.state.creditCard;
    this.setState({ creditCard });
  };

  handleCvcChange = event => {
    const cvc = event.target.validity.valid
      ? event.target.value
      : this.state.cvc;
    this.setState({ cvc });
  };

  handleExpiryChange = event => {
    const expiry = event.target.validity.valid
      ? event.target.value
      : this.state.expiry;
    this.setState({ expiry });
  };

  clearCreditCardText = () => {
    this.setState({ creditCard: "" });
  };
  clearCvcText = () => {
    this.setState({ cvc: "" });
  };
  clearExpiryText = () => {
    this.setState({ expiry: "" });
  };

  submitValues = () => {
    console.log(
      "Credit Card: ",
      this.state.creditCard,
      "\nCVC: ",
      this.state.cvc,
      "\nExpiry: ",
      this.state.expiry
    );
  };

  render() {
    const { creditCard, cvc, expiry } = this.state;
    const isEnabled =
      creditCard.length > 16 && cvc.length > 2 && expiry.length > 3;

    return (
      <React.Fragment>
        <div id="formInputs">
          <div id="creditCard">
            <input
              id="creditCardInput"
              type="text"
              pattern="[0-9]*"
              placeholder="Credit card number"
              style={{ width: "300px" }}
              onInput={this.handleCreditCardChange.bind(this)}
              value={this.state.creditCard}
              onClick={this.clearCreditCardText}
              onChange={this.handleCreditCardChange}
            />
            <div id="bottomInputs">
              <input
                id="cvc"
                type="text"
                pattern="[0-9]*"
                placeholder="CVC"
                style={{ width: "150px" }}
                onInput={this.handleCvcChange.bind(this)}
                value={this.state.cvc}
                onClick={this.clearCvcText}
                onChange={this.handleCvcChange}
              />

              <input
                id="expiry"
                type="text"
                pattern="[0-9]*"
                placeholder="expiry"
                style={{ width: "150px" }}
                onInput={this.handleExpiryChange.bind(this)}
                value={this.state.expiry}
                onClick={this.clearExpiryText}
                onChange={this.handleExpiryChange}
              />
            </div>
          </div>
        </div>
        <button disabled={!isEnabled} onClick={this.submitValues}>
          Submit
        </button>
      </React.Fragment>
    );
  }
}

export default Form;
