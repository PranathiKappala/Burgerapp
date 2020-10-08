import React, { Component } from "react";
import CheckoutSummary from "../../components/checkoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/contactData";
class Checkout extends Component {
  state = {
    ingredients: {},
    totalPrice: 0,
    ...this.props.location.state,
  };
  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    console.log("ooo", this.props.location);
    return (
      <div>
        <CheckoutSummary
          onContinue={this.checkoutContinueHandler}
          onCancel={this.checkoutCancelHandler}
          ingredients={this.state.ingredients}
        />
        <Route
          path="/checkout/contact-data"
          render={() => (
            <ContactData
              ingredients={this.state.ingredients}
              totalPrice={this.state.totalPrice}
              {...this.props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
