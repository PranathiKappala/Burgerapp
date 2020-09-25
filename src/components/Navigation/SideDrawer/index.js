import React from "react";
import burgerLogo from "../../../assests/burger-logo.png";
import NavigationItems from "../NavigationItems";
import "./index.css";
import Aux from "../../../hoc/auxi";
import Backdrop from "../../UI/Backdrop";
const sideDrawer = props => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  console.log(".........", props.open);
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />

      <div className={attachedClasses.join(" ")}>
        <div className="Logo" style={{ height: "11%" }}>
          {" "}
          <img src={burgerLogo} alt="burgerLogo" />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
