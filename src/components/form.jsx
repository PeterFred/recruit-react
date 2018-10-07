import React, { Component } from "react";

class Form extends Component {
  state = {
    creditCard: "",
    cvc: "",
    expiry: "",
    month: "",
    year: ""
  };

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

  /**
   * Parses the input string, splitting month and date.
   * Gets current month and date.
   * If month and date are valid, and before current month / date, save state.
   */
  handleExpiryChange = event => {
    const expiry = event.target.validity.valid
      ? event.target.value
      : this.state.expiry;
    this.setState({ expiry });

    if (this.state.expiry.length === 4) {
      const month = expiry.substr(0, 2);
      const year = expiry.substr(3, 4);

      let date = new Date();
      let currentYear = date
        .getFullYear()
        .toString()
        .substring(2, 4);
      let currentMonth = date.getMonth() + 1;

      if (
        (month <= 12 && year > currentYear) ||
        (year === currentYear && month > currentMonth)
      ) {
        this.setState({ month: month, year: year });
      }
    }
  };

  clearCreditCardText = () => {
    this.setState({ creditCard: "" });
  };
  clearCvcText = () => {
    this.setState({ cvc: "" });
  };
  clearExpiryText = () => {
    this.setState({ expiry: "", year: "", month: "" });
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
    const { creditCard, cvc, year } = this.state;
    const isEnabled = creditCard.length > 15 && cvc.length > 2 && year;

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
                pattern="[\\/0-9]*"
                placeholder="expiry"
                style={{ width: "150px" }}
                onInput={this.handleExpiryChange.bind(this)}
                value={this.state.expiry}
                onClick={this.clearExpiryText}
                onChange={this.handleExpiryChange}
              />
            </div>
          </div>
          <button disabled={!isEnabled} onClick={this.submitValues}>
            Submit
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
