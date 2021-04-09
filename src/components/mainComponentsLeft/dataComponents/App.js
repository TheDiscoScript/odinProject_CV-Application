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
        <PersonalInfo />
        <Experience />
        <Education />
        <Skills />
        <Buttons />
      </>
    );
  }
}

export default CVData;
