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
        />
        <Experience
          experience={this.props.experience}
          handleExperienceChange={this.props.handleExperienceChange}
          handleExperienceAdd={this.props.handleExperienceAdd}
        />
        <Education
          education={this.props.education}
          handleEducationChange={this.props.handleEducationChange}
        />
        <Skills
          skills={this.props.skills}
          handleSkillsChange={this.props.handleSkillsChange}
        />
        <Buttons />
      </>
    );
  }
}

export default CVData;
