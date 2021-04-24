import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Grid from "@material-ui/core/Grid";

class UploadBut extends Component {
  render() {
    return (
      <Grid item xs={12} sm={6} md={12} lg={6}>
        <label htmlFor="contained-button-file">
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            style={{ display: "none" }}
            onChange={this.props.onClick}
          />
          <Button
            variant="contained"
            component="span"
            style={{ width: "100%", margin: "5px", height: "55px" }}
          >
            Upload
            <PhotoCamera />
          </Button>
        </label>
      </Grid>
    );
  }
}

export default UploadBut;
