import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

const styles = (theme) => ({
  root: {
    width: "100%",
    margin: "5px",
  },
});

class Text extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <TextField
          className={classes.root}
          variant="filled"
          label={this.props.label}
          placeholder={this.props.placeholder}
          type={this.props.type}
        />
      </Grid>
    );
  }
}
export default withStyles(styles)(Text);
