import React, { Component } from "react";
import Title from "./buildingBlocks/Title";
import Text from "./buildingBlocks/Text";
import Grid from "@material-ui/core/Grid";

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Title title={"Skills"} />
        <Text />
      </Grid>
    );
  }
}
export default Skills;
