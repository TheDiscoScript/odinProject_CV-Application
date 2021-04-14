import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

class Description extends Component {
  render() {
    return (
      <>
        <Typography
          variant="body1"
          style={{ fontSize: "1rem", fontStyle: "italic" }}
        >
          {this.props.text}
        </Typography>
      </>
    );
  }
}
export default Description;
