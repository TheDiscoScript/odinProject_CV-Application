import React, { Component } from "react";
import Title from "./buildingBlocks/Title";
import Grid from "@material-ui/core/Grid";
import RatingField from "./buildingBlocks/Rating";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

class Skills extends Component {
  render() {
    return (
      <Grid container spacing={1}>
        <Title title={"Skills"} />
        <Grid container>
          <RatingField />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          style={{ marginTop: "15px" }}
        >
          <Button color="primary" variant="contained" fullWidth>
            <AddIcon />
          </Button>
        </Grid>
      </Grid>
    );
  }
}
export default Skills;
