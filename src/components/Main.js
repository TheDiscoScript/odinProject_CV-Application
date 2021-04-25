import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DataPanel from "./mainComponentsLeft/DataPanel";
import PreviewPanel from "./mainComponentsRight/PreviewPanel";
import { withStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";
import defaultImg from "./mainComponentsRight/buildingBlocks/baseBlocks/prof.png";
import exampleImg from "./mainComponentsRight/buildingBlocks/baseBlocks/exampleprof.jpg";

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
    this.myRef = React.createRef();
    this.state = {
      personalInfo: {
        //no ID needed as there will be only 1 personalInfo
        firstName: "",
        lastName: "",
        email: "",
        adress: "",
        phoneNumber: "",
        photo: defaultImg,
        gitHub: "",
        linkedIn: "",
        description: "",
      },
      experience: [],
      education: [],
      skills: [],
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

  //stackOverflow, thank you very much!!
  handlePersonalInfoFileChange = (event) => {
    event.target.type = "file";
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.setState((prevState) => ({
        ...prevState,
        personalInfo: {
          ...prevState.personalInfo,
          photo: reader.result,
        },
      }));
    };
    reader.readAsDataURL(file);
  };
  //handle work experience)

  //id - programm is looking through array for specific object with ID
  handleExperienceChange = (input, id, event) => {
    const experienceCopy = this.state.experience;
    const experienceObject = experienceCopy.find((object) => object.id === id);
    experienceObject[input] = event.target.value;
    this.validate(experienceObject);
    this.setState({
      experienceCopy: experienceObject,
    });
    console.log(this.state.experience);
    console.log(this.state.experienceCopy);
  };
  handleExperienceToggle = (input, id, event) => {
    const experienceCopy = this.state.experience;
    const experienceObject = experienceCopy.find((object) => object.id === id);
    experienceObject[input] = event.target.checked;
    this.validate(experienceObject);
    this.setState({
      experienceCopy: experienceObject,
    });
    console.log(this.state.experience);
    console.log(this.state.experienceCopy);
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
          checked: false,
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
    this.validate(educationObject);
    this.setState({
      educationCopy: educationObject,
    });
  };

  handleEducationToggle = (input, id, event) => {
    const educationCopy = this.state.education;
    const educationObject = educationCopy.find((object) => object.id === id);
    educationObject[input] = event.target.checked;
    this.validate(educationObject);
    this.setState({
      educationCopy: educationObject,
    });
    console.log(this.state.education);
    console.log(this.state.educationCopy);
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
          checked: false,
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
    this.setState({
      skillsCopy: skillsObject,
    });
  };
  handleSkillsAdd = (e) => {
    this.setState((prevState) => ({
      skills: [
        ...prevState.skills,
        {
          id: uuidv4(),
          skill: "",
          value: null,
        },
      ],
    }));
  };
  handleSkillsRemove = (id) => {
    const skillsCopy = this.state.skills;
    const skillsCopyMinusOne = skillsCopy.filter((object) => object.id !== id);
    this.setState({
      skills: skillsCopyMinusOne,
    });
  };

  //
  //
  //utility
  validate = (object) => {
    if (object.checked === true) {
      return (object.to = "Ongoing");
    }
  };

  resetData = (e) => {
    this.setState({
      personalInfo: {
        //no ID needed as there will be only 1 personalInfo
        firstName: "",
        lastName: "",
        email: "",
        adress: "",
        phoneNumber: "",
        photo: defaultImg,
        gitHub: "",
        linkedIn: "",
        description: "",
      },
      experience: [],
      education: [],
      skills: [],
    });
  };
  loadExample = (e) => {
    //this.resetData()
    this.setState({
      personalInfo: {
        //no ID needed as there will be only 1 personalInfo
        firstName: "Felix",
        lastName: "Existing",
        email: "abot1@gmail.com",
        adress: "Indonesia, Bali",
        phoneNumber: "+912012345678",
        photo: exampleImg,
        gitHub: "github.com/example",
        linkedIn: "linkedin.com/in/example",
        description:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc auctor. Sed convallis magna eu sem. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Curabitur vitae diam non enim vestibulum interdum. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Morbi scelerisque luctus velit. Etiam posuere lacus quis dolor. Donec quis nibh at felis congue commodo.",
      },
      experience: [
        {
          id: uuidv4(),
          position: "React Senior Developer",
          companyName: "Recent Company",
          city: "Prague",
          from: "2021-01-01",
          to: "Ongoing",
          checked: true,
        },
        {
          id: uuidv4(),
          position: "React Junior Developer",
          companyName: "Past Company",
          city: "Brno",
          from: "2020-01-01",
          to: "2020-12-31",
          checked: false,
        },
      ],
      education: [
        {
          id: uuidv4(),
          university: "Masaryk University",
          city: "Brno",
          degree: "Master's degree",
          subject: "Law",
          from: "2017.09.01",
          to: "Ongoing",
          checked: true,
        },
      ],
      skills: [
        {
          id: uuidv4(),
          skill: "React",
          value: 3.0,
        },
        {
          id: uuidv4(),
          skill: "JS",
          value: 2,
        },
        {
          id: uuidv4(),
          skill: "CSS",
          value: 1.5,
        },
      ],
    });
  };

  //
  //
  //
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
                handleExperienceToggle={this.handleExperienceToggle}
                //
                handleEducationChange={this.handleEducationChange}
                handleEducationAdd={this.handleEducationAdd}
                handleEducationRemove={this.handleEducationRemove}
                handleEducationToggle={this.handleEducationToggle}
                //
                handleSkillsChange={this.handleSkillsChange}
                handleSkillsAdd={this.handleSkillsAdd}
                handleSkillsRemove={this.handleSkillsRemove}
                //
                resetData={this.resetData}
                loadExample={this.loadExample}
                handlePersonalInfoFileChange={this.handlePersonalInfoFileChange}
                content={() => this.myRef.current}
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
                ref={this.myRef}
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
