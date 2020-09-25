import React, { Component } from "react";
import Aux from "../../hoc/auxi";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/spinner";
import withErrorHandler from "../../hoc/withErrorHandler";
import axios from "../../axios";
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 0.3,
  meat: 0.7,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
  };
  updatePurchaseState = () => {
    const ingredients = { ...this.state.ingredients };
    const sum = Object.values(ingredients).reduce((acc, el) => {
      return acc + el;
    }, 0);
    this.setState({ purchasable: sum > 0 });
  };
  addIngredients = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updated = {
      ...this.state.ingredients,
    };
    updated[type] = updatedCount;
    const priceAdded = INGREDIENT_PRICES[type] + this.state.totalPrice;
    this.setState({ totalPrice: priceAdded });
    this.setState({ ingredients: updated }, () => this.updatePurchaseState());
  };
  removeIngredients = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updated = {
      ...this.state.ingredients,
    };
    updated[type] = updatedCount;
    const priceDeduced = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({ totalPrice: priceDeduced });
    this.setState({ ingredients: updated }, () => this.updatePurchaseState());
  };
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  closeHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Pranathi",
        address: {
          street: "Teststreet",
          country: "India",
        },
        email: "test123.com",
      },
      deliveryMethod: "fastest",
    };
    //it creates a orders node and stores data beneath that node.json is an end point u need to target firebase
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false, purchasing: false });
        this.props.history.push("/checkout");
      })
      .catch(error => this.setState({ loading: false, purchasing: false }));
  };
  render() {
    console.log(this.state.purchasing, "purchasssssssssssss");
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      if (disabledInfo[key] <= 0) disabledInfo[key] = true;
      else disabledInfo[key] = false;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <Modal show={this.state.purchasing} toggle={this.closeHandler}>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              price={this.state.totalPrice}
              ingredients={this.state.ingredients}
              toggle={this.closeHandler}
              continue={this.purchaseContinueHandler}
            />
          )}
        </Modal>
        <BuildControls
          ingredientRemoved={this.removeIngredients}
          IngredientAdded={this.addIngredients}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}
          purchase={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
