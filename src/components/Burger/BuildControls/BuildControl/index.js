import React from "react";
import "./index.css";
const BuildControl = props => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button
        className="Less"
        disabled={props.disabled}
        onClick={props.removed}
      >
        Less
      </button>
      <button className="More" onClick={props.added}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
