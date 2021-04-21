import React, { Component } from "react";
import TitleAndDescription from "./buildingBlocks/TitleAndDescription";
import Experience from "./buildingBlocks/Experience";
import Education from "./buildingBlocks/Education";
import Skills from "./buildingBlocks/Skills";

class Information extends Component {
  render() {
    return (
      <div style={{ gridArea: "main", padding: "20px" }}>
        <TitleAndDescription
          personalDescription={this.props.personalDescription}
        />
        <Experience work={this.props.work} />
        <Education education={this.props.education} />
        <Skills skills={this.props.skills} />
      </div>
    );
  }
}
export default Information;
