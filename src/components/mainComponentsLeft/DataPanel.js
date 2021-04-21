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
          handlePersonalInfoChange={this.props.handlePersonalInfoChange}
          handlePhone={this.props.handlePhone}
        />
      </div>
    );
  }
}
export default DataPanel;
