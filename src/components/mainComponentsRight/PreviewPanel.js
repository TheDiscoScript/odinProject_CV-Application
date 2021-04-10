import React, { Component } from "react";
import Header from "./Header";
import Information from "./Information";
import Sidebar from "./Sidebar";

class PreviewPanel extends Component {
  render() {
    return (
      <div
        style={{
          margin: "0",
          padding: "0",
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateRows: "40mm 257mm",
          gridTemplateColumns: "150mm 60mm",
          gridTemplateAreas: `"header header" "main sidebar"`,
        }}
      >
        <Header />
        <Information />
        <Sidebar />
      </div>
    );
  }
}
export default PreviewPanel;
