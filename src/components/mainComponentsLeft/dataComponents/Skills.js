import React, { Component } from "react";
import Title from "./buildingBlocks/Title";
import Grid from "@material-ui/core/Grid";
import RatingField from "./buildingBlocks/Rating";

class Skills extends Component {
  render() {
    return (
      <Grid container spacing={1}>
        <Title title={"Skills"} />
        <Grid container>
          <RatingField />
        </Grid>
      </Grid>
    );
  }
}
export default Skills;
