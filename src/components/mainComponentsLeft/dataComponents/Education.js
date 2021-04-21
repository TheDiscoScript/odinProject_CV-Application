import React, { Component } from "react";
import Title from "./buildingBlocks/Title";
import Text from "./buildingBlocks/Text";
import Grid from "@material-ui/core/Grid";
import Date from "./buildingBlocks/Date";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Buttons from "./buildingBlocks/Button";
import ButtonAdd from "./buildingBlocks/ButtonAdd";

class Education extends Component {
  render() {
    const datas = {
      labels: {
        Name: "University",
        City: "City",
        Degree: "Degree",
        Subject: "Subject",
        From: "From",
        To: "To",
      },
      placeholder: {},
    };
    return (
      <Grid container>
        <Grid container spacing={1}>
          <Title title={"Education"} />
          <Text
            label={datas.labels.Name}
            value={this.props.education.university}
            onChange={(e) => this.props.handleEducationChange("university", e)}
          />
          <Text
            label={datas.labels.City}
            value={this.props.education.city}
            onChange={(e) => this.props.handleEducationChange("city", e)}
          />
          <Text
            label={datas.labels.Degree}
            value={this.props.education.degree}
            onChange={(e) => this.props.handleEducationChange("degree", e)}
          />
          <Text
            label={datas.labels.Subject}
            value={this.props.education.subject}
            onChange={(e) => this.props.handleEducationChange("subject", e)}
          />
          <Date
            label={datas.labels.From}
            value={this.props.education.from}
            onChange={(e) => this.props.handleEducationChange("from", e)}
          />
          <Date
            label={datas.labels.To}
            value={this.props.education.to}
            onChange={(e) => this.props.handleEducationChange("to", e)}
          />
          <Grid
            itemv
            xs={12}
            sm={12}
            md={12}
            lg={12}
            fullwidth
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              width: "100%",
            }}
          >
            <FormControlLabel
              control={<Switch name="checkedB" color="primary" />}
              label="Till now"
              disabled
            />
          </Grid>
          <Buttons />
        </Grid>
        <ButtonAdd />
      </Grid>
    );
  }
}
export default Education;
