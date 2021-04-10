import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div style={{ gridArea: "sidebar", backgroundColor: "#D3D3D3" }}>
        <div>Sidebar</div>
      </div>
    );
  }
}
export default Sidebar;
