import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";

const Burger = props => {
  let { ingredients } = props;
  let transformedIng = Object.keys(ingredients)
    .map(key => {
      return [...Array(ingredients[key])].map((_, i) => {
        return <BurgerIngredient key={key + i} type={key} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  console.log(transformedIng, ".........");
  if (transformedIng.length === 0)
    transformedIng = <p>Please start adding ingredients</p>;
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIng}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
