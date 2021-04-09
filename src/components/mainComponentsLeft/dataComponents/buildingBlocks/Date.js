import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

class Date extends Component {
  render() {
    return (
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <TextField
          label={this.props.label}
          type="date"
          variant="filled"
          style={{ width: "100%", margin: "5px" }}
          placeholder="dd/mm/yyyy"
        />
      </Grid>
    );
  }
}
export default Date;
