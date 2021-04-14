import React, { Component } from "react";
import TitleAndDescription from "./buildingBlocks/TitleAndDescription";
import Experience from "./buildingBlocks/Experience";
import Education from "./buildingBlocks/Education";
import Skills from "./buildingBlocks/Skills";

class Information extends Component {
  render() {
    return (
      <div style={{ gridArea: "main", padding: "20px" }}>
        <TitleAndDescription />
        <Experience />
        <Education />
        <Skills />
      </div>
    );
  }
}
export default Information;
