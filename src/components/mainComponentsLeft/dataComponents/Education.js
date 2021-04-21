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
          />
          <Text label={datas.labels.City} value={this.props.education.city} />
          <Text
            label={datas.labels.Degree}
            value={this.props.education.degree}
          />
          <Text
            label={datas.labels.Subject}
            value={this.props.education.subject}
          />
          <Date label={datas.labels.From} value={this.props.education.from} />
          <Date label={datas.labels.To} value={this.props.education.to} />
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
