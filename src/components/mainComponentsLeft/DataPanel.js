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
          //
          handlePersonalInfoChange={this.props.handlePersonalInfoChange}
          handlePhone={this.props.handlePhone}
          //
          handleExperienceChange={this.props.handleExperienceChange}
          handleExperienceAdd={this.props.handleExperienceAdd}
          handleExperienceRemove={this.props.handleExperienceRemove}
          handleExperienceToggle={this.props.handleExperienceToggle}
          //
          handleEducationChange={this.props.handleEducationChange}
          handleEducationAdd={this.props.handleEducationAdd}
          handleEducationRemove={this.props.handleEducationRemove}
          handleEducationToggle={this.props.handleEducationToggle}
          //
          handleSkillsChange={this.props.handleSkillsChange}
          handleSkillsAdd={this.props.handleSkillsAdd}
          handleSkillsRemove={this.props.handleSkillsRemove}
          //
          resetData={this.props.resetData}
          loadExample={this.props.loadExample}
          handlePersonalInfoFileChange={this.props.handlePersonalInfoFileChange}
          renderPdf={this.props.renderPdf}
        />
      </div>
    );
  }
}
export default DataPanel;
