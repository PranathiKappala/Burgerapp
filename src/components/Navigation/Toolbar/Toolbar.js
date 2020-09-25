import React from "react";
import "./index.css";
import burgerLogo from "../../../assests/burger-logo.png";
import NavigationItems from "../NavigationItems";
const Toolbar = props => {
  return (
    <header className="Toolbar">
      <div className="DrawerToggle" onClick={props.toggled}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="Logo">
        {" "}
        <img src={burgerLogo} alt="burgerLogo" />
      </div>
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
