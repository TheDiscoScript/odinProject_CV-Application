import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

class SectionTitle extends Component {
  render() {
    return (
      <>
        <Typography variant="h6" color="primary">
          {this.props.title}
        </Typography>
        <Divider style={{ width: "100%" }} />
      </>
    );
  }
}
export default SectionTitle;
