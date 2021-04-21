import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

class CustomTextField extends Component {
  render() {
    return (
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <TextField
          label={"Description"}
          multiline
          rows={4}
          placeholder={this.props.placeholder}
          variant="outlined"
          style={{ width: "100%", margin: "5px" }}
          value={this.props.value}
          onChange={this.props.handlePersonalInfoChange}
        />
      </Grid>
    );
  }
}
export default CustomTextField;
