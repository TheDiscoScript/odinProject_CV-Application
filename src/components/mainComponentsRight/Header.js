import React, { Component } from "react";
import HeaderName from "./buildingBlocks/HeaderName";

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
        <HeaderName />
      </div>
    );
  }
}
export default Header;
