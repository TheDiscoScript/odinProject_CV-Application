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
        //no ID needed as there will be only 1 personalInfo
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
      experience: [],
      education: [],
      skills: [
        {
          id: uuidv4(),
          skill: "",
          value: "",
        },
      ],
    };
    this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);
    this.handleExperienceAdd = this.handleExperienceAdd.bind(this);
  }
  //handleChangingSection
  //handle personalInfo
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
  //handle work experience
  //id - programm is looking through array for specific object with ID
  handleExperienceChange = (input, id, event) => {
    const experienceCopy = this.state.experience;
    const experienceObject = experienceCopy.find((object) => object.id === id);
    experienceObject[input] = event.target.value;
    this.setState({
      experienceCopy: experienceObject,
    });
  };

  handleExperienceAdd = (e) => {
    this.setState((prevState) => ({
      experience: [
        ...prevState.experience,
        {
          id: uuidv4(),
          position: "",
          companyName: "",
          city: "",
          from: "",
          to: "",
        },
      ],
    }));
  };
  handleExperienceRemove = (id) => {
    const experienceCopy = this.state.experience;
    const experienceCopyMinusOne = experienceCopy.filter(
      (object) => object.id !== id
    );
    this.setState({
      experience: experienceCopyMinusOne,
    });
  };

  //handle education
  handleEducationChange = (input, id, event) => {
    const educationCopy = this.state.education;
    const educationObject = educationCopy.find((object) => object.id === id);
    educationObject[input] = event.target.value;
    this.setState({
      educationCopy: educationObject,
    });
  };
  handleEducationAdd = (e) => {
    this.setState((prevState) => ({
      education: [
        ...prevState.education,
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
    }));
  };
  handleEducationRemove = (id) => {
    const educationCopy = this.state.education;
    const educationCopyMinusOne = educationCopy.filter(
      (object) => object.id !== id
    );
    this.setState({
      education: educationCopyMinusOne,
    });
  };

  //handle skills
  handleSkillsChange = (input, id, event) => {
    const skillsCopy = this.state.skills;
    const skillsObject = skillsCopy.find((object) => object.id === id);
    skillsObject[input] = event.target.value;
    this.setState(
      {
        skillsCopy: skillsObject,
      },
      () => console.log(this.state.skills)
    );
  };

  /*
  handleSkillsAdd=(e) =>{
    this.setState((prevState) =>({
      skills:[...prevState.skills,{
         id: uuidv4(),
          skill: "",
          value: "",
      }]
    }))
  }
  
  handleSkillsRemove = (id) => {
    const skillsCopy = this.state.skills
    const skillsCopyMinusOne = skillsCopy.filter ((object) 
    => object.id !== id)
    this.setState({
      skills: skillsCopyMinusOne
    })
  }
  
  */

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
                //
                handlePersonalInfoChange={this.handlePersonalInfoChange}
                handlePhone={this.handlePhoneInfoChange}
                //
                handleExperienceChange={this.handleExperienceChange}
                handleExperienceAdd={this.handleExperienceAdd}
                handleExperienceRemove={this.handleExperienceRemove}
                //
                handleEducationChange={this.handleEducationChange}
                handleEducationAdd={this.handleEducationAdd}
                handleEducationRemove={this.handleEducationRemove}
                //
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
