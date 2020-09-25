import React from "react";

import Aux from "../../hoc/auxi";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer";
class Layout extends React.Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  sideDrawerToggleHandler = () => {
    this.setState({ showSideDrawer: !this.state.showSideDrawer });
  };
  render() {
    return (
      <Aux>
        <div>
          <Toolbar toggled={this.sideDrawerToggleHandler} />
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerCloseHandler}
          />
        </div>
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
