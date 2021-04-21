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
        firstName: "Daniel",
        lastName: "Wollmann",
        email: "wollmada@gmail.com",
        adress: "Brno",
        phoneNumber: "+420732377173",
        photo: "",
        gitHub: "wollmadaGithub",
        linkedIn: "wollmadaLinkedIn",
        description:
          "Maximalní pog. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Duis risus. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. In enim a arcu imperdiet malesuada. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Vivamus porttitor turpis ac leo. ",
      },
      experience: [
        {
          id: uuidv4(),
          position: "Futureposition",
          companyName: "FutureCompany",
          city: "FutureCompanyCity",
          from: "22.22.2222",
          to: "11.11.1111",
        },
      ],
      education: [
        {
          id: uuidv4(),
          university: "Muni",
          city: "Brno",
          degree: "Mgr",
          subject: "Právo",
          from: "20.20.2020",
          to: "now",
        },
      ],
      skills: [
        {
          id: uuidv4(),
          skill: "React",
          value: 1,
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
                work={this.state.experience}
                education={this.state.education}
                skills={this.state.skills}
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
