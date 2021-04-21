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
          value: null,
        },
      ],
    };
  }
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
                work={this.state.experience[0]}
                education={this.state.education[0]}
                skills={this.state.skills[0]}
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
                work={this.state.experience[0]}
                education={this.state.education[0]}
                skills={this.state.skills[0]}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(useStyles)(Main);
