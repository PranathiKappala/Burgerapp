import React from "react";
import "./index.css";
const Backdrop = props => {
  console.log("showwwwwww", props.show);
  return props.show ? (
    <div className="Backdrop" onClick={props.clicked}></div>
  ) : null;
};

export default Backdrop;
