import React from "react";
import "./BuildControl.css";
import BuildControl from "./BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];
const BuildControls = props => {
  return (
    <div>
      <p>Current Price : {props.price.toFixed(2)}</p>
      {controls.map((item, index) => {
        return (
          <BuildControl
            added={() => props.IngredientAdded(item.type)}
            removed={() => props.ingredientRemoved(item.type)}
            label={item.label}
            key={index}
            disabled={props.disabled[item.type]}
          />
        );
      })}
      <button
        onClick={props.purchase}
        disabled={!props.purchasable}
        className="OrderButton"
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
