import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DataPanel from "./mainComponentsLeft/DataPanel";
import PreviewPanel from "./mainComponentsRight/PreviewPanel";
import { withStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: "1rem",
    textAlign: "center",
    padding: "1rem",
  },
});
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        adress: "",
        phoneNumber: "",
        photo: "",
        gitHub: "",
        linkedIn: "",
        description: "",
      },
      experience: [
        {
          id: uuidv4(),
          position: "",
          companyName: "",
          city: "",
          from: "",
          to: "",
        },
      ],
      education: [
        {
          id: uuidv4(),
          university: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
        },
      ],
      skills: [
        {
          id: uuidv4(),
          skill: "",
          value: "",
        },
      ],
    };
    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);
  }
  //handleChangingSection
  handlePersonalInfoChange = (input, event) => {
    const personalInfoCopy = this.state.personalInfo;
    personalInfoCopy[input] = event.target.value;
    this.setState({
      personalInfo: personalInfoCopy,
    });
  };

  handlePhoneInfoChange = (input, event) => {
    const personalInfoCopy = this.state.personalInfo;
    personalInfoCopy[input] = event; //wtf is this ????? IDK
    this.setState({
      personalInfo: personalInfoCopy,
    });
  };

  //id - programm is looking through array for specific object with ID
  /*handleExperienceChange = (input, id, event) => {
    const experienceCopy = this.state.experience;
    const experienceObject = experienceCopy.find((object) => object.id === id);
    experienceObject[input] = event.target.value;
    this.setState({
      experienceCopy: experienceObject,
    });
  };*/
  handleExperienceChange = (input, event) => {
    const experienceCopy = this.state.experience;
    experienceCopy[input] = event.target.value;
    this.setState({
      experience: experienceCopy,
    });
  };

  handleEducationChange = (input, event) => {
    const educationCopy = this.state.education;
    educationCopy[input] = event.target.value;
    this.setState({
      education: educationCopy,
    });
  };

  handleSkillsChange = (input, event) => {
    const skillsCopy = this.state.skills;
    skillsCopy[input] = event.target.value;
    this.setState(
      {
        skills: skillsCopy,
      },
      () => console.log(this.state.skills)
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid
          container
          style={{ justifyContent: "center", textAlign: "center" }}
        >
          <Grid item xs={12} sm={12} md={3} lg={5}>
            <Paper className={classes.paper}>
              <DataPanel
                personalInfo={this.state.personalInfo}
                experience={this.state.experience}
                education={this.state.education}
                skills={this.state.skills}
                handlePersonalInfoChange={this.handlePersonalInfoChange}
                handlePhone={this.handlePhoneInfoChange}
                handleExperienceChange={this.handleExperienceChange}
                handleEducationChange={this.handleEducationChange}
                handleSkillsChange={this.handleSkillsChange}
              />
            </Paper>
          </Grid>
          <Grid
            container
            xs={12}
            sm={12}
            md={9}
            lg={7}
            style={{
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Paper
              className={classes.paper}
              style={{
                position: "sticky",
                top: "10px",
                width: "210mm",
                height: "297mm",
                padding: "0",
              }}
              elevation={18}
            >
              <PreviewPanel
                personalInfo={this.state.personalInfo}
                work={this.state.experience}
                education={this.state.education}
                skills={this.state.skills}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(useStyles)(Main);
