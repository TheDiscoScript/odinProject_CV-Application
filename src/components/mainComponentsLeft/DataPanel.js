import React, { Component } from "react";
import CVData from "./dataComponents/App.js";

class DataPanel extends Component {
  render() {
    return (
      <div>
        <CVData
          personalInfo={this.props.personalInfo}
          experience={this.props.experience}
          education={this.props.education}
          skills={this.props.skills}
          handlePersonalInfoChange={this.props.handlePersonalInfoChange}
          handlePhone={this.props.handlePhone}
          handleExperienceChange={this.props.handleExperienceChange}
          handleExperienceAdd={this.props.handleExperienceAdd}
          handleEducationChange={this.props.handleEducationChange}
          handleSkillsChange={this.props.handleSkillsChange}
        />
      </div>
    );
  }
}
export default DataPanel;
