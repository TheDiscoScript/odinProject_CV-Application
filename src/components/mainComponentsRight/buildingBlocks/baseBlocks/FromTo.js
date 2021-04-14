import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

class FromTo extends Component {
  render() {
    return (
      <Box style={{ padding: "10px" }}>
        <Typography variant="body1">{this.props.from}</Typography> -
        <Typography variant="body1">{this.props.to}</Typography>
      </Box>
    );
  }
}
export default FromTo;
