import React, { Component } from "react";
import Title from "./buildingBlocks/Title";
import Text from "./buildingBlocks/Text";
import Grid from "@material-ui/core/Grid";
import Date from "./buildingBlocks/Date";
import Buttons from "./buildingBlocks/Button";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ButtonAdd from "./buildingBlocks/ButtonAdd";

class Experience extends Component {
  render() {
    const datas = {
      labels: {
        Position: "Position",
        Company: "Company Name",
        City: "City",
        From: "From",
        To: "To",
      },
      placeholder: {
        Description: "What was your job?",
      },
    };
    return (
      <Grid container>
        <Grid container spacing={1}>
          <Title title={"Experience"} />
          <Text
            label={datas.labels.Position}
            value={this.props.work.position}
          />
          <Text
            label={datas.labels.Company}
            value={this.props.work.companyName}
          />
          <Text label={datas.labels.City} value={this.props.work.city} />
          <Date label={datas.labels.From} value={this.props.work.from} />
          <Date label={datas.labels.To} value={this.props.work.to} />
          <Grid
            container
            xs={12}
            sm={6}
            md={12}
            lg={6}
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
export default Experience;
