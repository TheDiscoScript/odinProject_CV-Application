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
        <PersonalInfo personalInfo={this.props.personalInfo} />
        <Experience work={this.props.work} />
        <Education education={this.props.education} />
        <Skills skills={this.props.skills} />
        <Buttons />
      </>
    );
  }
}

export default CVData;
