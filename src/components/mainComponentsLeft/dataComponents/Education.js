import React, { Component } from "react";
import Title from "./buildingBlocks/Title";
import Text from "./buildingBlocks/Text";
import Grid from "@material-ui/core/Grid";
import Date from "./buildingBlocks/Date";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Buttons from "./buildingBlocks/Button";

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
      <Grid container spacing={1}>
        <Title title={"Education"} />
        <Text label={datas.labels.Name} />
        <Text label={datas.labels.City} />
        <Text label={datas.labels.Degree} />
        <Text label={datas.labels.Subject} />
        <Date label={datas.labels.From} />
        <Date label={datas.labels.To} />
        <Grid
          item
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
    );
  }
}
export default Education;
