import React, { Component } from "react";
import CVData from "./dataComponents/App.js";

class DataPanel extends Component {
  render() {
    return (
      <div>
        <CVData
          personalInfo={this.props.personalInfo}
          work={this.props.work}
          education={this.props.education}
          skills={this.props.skills}
        />
      </div>
    );
  }
}
export default DataPanel;
