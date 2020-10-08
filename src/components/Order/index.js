import React from "react";

export default function Order(props) {
  let { ingredients } = props;
  const items = [];
  for (let key in ingredients) {
    items.push({ item: key, no: ingredients[key] });
  }
  console.log(items);
  return (
    <div
      style={{
        width: "80%",
        textAlign: "center",
        margin: "20px auto",
        border: "1px solid #ccc",
        boxShadow: "0 2px 3px #eee",
        padding: 10,
      }}
    >
      <strong>Ingredients :</strong>{" "}
      {items.map((ingredient, index) => {
        return (
          <span
            style={{
              textTransform: "capitalize",
              display: "inline-block",
              margin: " 8px",
              padding: 5,
              border: "1px solid #ccc",
            }}
            key={index}
          >
            {ingredient.item} : {ingredient.no}
          </span>
        );
      })}
      <p>
        Price <strong>USD {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
}
