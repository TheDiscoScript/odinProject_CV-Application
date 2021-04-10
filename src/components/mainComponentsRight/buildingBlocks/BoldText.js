import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

class BoldText extends Component {
  render() {
    return (
      <>
        <Typography variant="subtitle2" style={{ fontSize: "1.1rem" }}>
          Bold Text
        </Typography>
      </>
    );
  }
}
export default BoldText;
