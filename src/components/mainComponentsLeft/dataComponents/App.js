import React, { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Buttons from "./Buttons";

class CVData extends Component {
  render() {
    return (
      <>
        <PersonalInfo
          personalInfo={this.props.personalInfo}
          handlePersonalInfoChange={this.props.handlePersonalInfoChange}
          handlePhone={this.props.handlePhone}
          handlePersonalInfoFileChange={this.props.handlePersonalInfoFileChange}
        />
        <Experience
          experience={this.props.experience}
          handleExperienceChange={this.props.handleExperienceChange}
          handleExperienceAdd={this.props.handleExperienceAdd}
          handleExperienceRemove={this.props.handleExperienceRemove}
          handlePersonalInfoFileChange={this.props.handlePersonalInfoFileChange}
        />
        <Education
          education={this.props.education}
          handleEducationChange={this.props.handleEducationChange}
          handleEducationAdd={this.props.handleEducationAdd}
          handleEducationRemove={this.props.handleEducationRemove}
          handleEducationToggle={this.props.handleEducationToggle}
        />
        <Skills
          skills={this.props.skills}
          handleSkillsChange={this.props.handleSkillsChange}
          handleSkillsAdd={this.props.handleSkillsAdd}
          handleSkillsRemove={this.props.handleSkillsRemove}
        />
        <Buttons
          resetData={this.props.resetData}
          loadExample={this.props.loadExample}
          renderPdf={this.props.renderPdf}
        />
      </>
    );
  }
}

export default CVData;
