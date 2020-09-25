import React from "react";
import { Button } from "reactstrap";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(item => {
    return (
      <li key={item}>
        {item} : {props.ingredients[item]}
      </li>
    );
  });
  return (
    <div>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price : {props.price.toFixed(2)}</strong>
      </p>
      <Button color="danger" onClick={props.toggle}>
        Cancel
      </Button>
      <Button color="success" onClick={props.continue}>
        Continue
      </Button>
    </div>
  );
};

export default OrderSummary;
