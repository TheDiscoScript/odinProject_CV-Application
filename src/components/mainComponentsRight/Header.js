import React, { Component } from "react";
import HeaderName from "./buildingBlocks/baseBlocks/HeaderName";

class Header extends Component {
  render() {
    return (
      <div
        style={{
          gridArea: "header",
          backgroundColor: "#3f51b5",
          display: "flex",
          color: "white",
        }}
      >
        <HeaderName nameLastName={this.props.nameLastName} />
      </div>
    );
  }
}
export default Header;
