import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

class NormalText extends Component {
  render() {
    return (
      <>
        <Typography style={{ padding: "5px" }} variant="body1">
          {this.props.text}
          {this.props.comma}
          {this.props.city}
          {this.props.degree}
          {this.props.in}
          {this.props.subject}
        </Typography>
      </>
    );
  }
}
export default NormalText;
