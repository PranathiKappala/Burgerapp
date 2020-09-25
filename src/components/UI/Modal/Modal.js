import React from "react";
import "./Modal.css";
import Aux from "../../../hoc/auxi";
import Backdrop from "../Backdrop";
class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    ) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.toggle} />
        <div
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
          className="Modal"
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
