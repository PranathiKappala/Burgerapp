import React from "react";
import Burger from "../Burger/Burger";
import "./index.css";

const CheckoutSummary = props => {
  return (
    <div className="checkoutSummary">
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "300px", height: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <button className="btn btn-danger">CANCEL</button>
      <button className="btn btn-success">CONTINUE</button>
    </div>
  );
};

export default CheckoutSummary;
