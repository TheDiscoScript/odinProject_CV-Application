import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

class HeaderName extends Component {
  render() {
    return (
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "25px",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" style={{ paddingRight: "25px" }}>
          {this.props.nameLastName.firstName}
        </Typography>
        <Typography variant="h2">{this.props.nameLastName.lastName}</Typography>
      </Box>
    );
  }
}
export default HeaderName;
