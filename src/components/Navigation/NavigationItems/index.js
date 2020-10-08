import React from "react";
import "./index.css";
import NavigationItem from "./NavigationItem";

const NavigationItems = () => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/">Burger Builder</NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
