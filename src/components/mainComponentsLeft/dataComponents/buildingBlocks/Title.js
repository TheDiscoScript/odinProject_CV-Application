import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

class Title extends Component {
  render() {
    return (
      <Grid item xs={12} sm={12} md={12} lg={12} style={{ textAlign: "left" }}>
        <Typography variant="h5" component="h3">
          {this.props.title}
        </Typography>
        <Divider />
      </Grid>
    );
  }
}
export default Title;
