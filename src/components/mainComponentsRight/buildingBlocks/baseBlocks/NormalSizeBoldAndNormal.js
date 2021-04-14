import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

class SizedBoldAndNormal extends Component {
  render() {
    return (
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <Typography
          style={{
            paddingLeft: "5px",
            paddingTop: "5px",
            paddingBottom: "5px",
            fontWeight: "bold",
          }}
          variant="body1"
        >
          {this.props.uni}
        </Typography>
        <Typography
          style={{
            paddingTop: "5px",
            paddingBottom: "5px",
            paddingRight: "5px",
          }}
          variant="body1"
        >
          {", "}
        </Typography>
        <Typography
          style={{ paddingTop: "5px", paddingBottom: "5px" }}
          variant="body1"
        >
          {this.props.city}
        </Typography>
      </Box>
    );
  }
}
export default SizedBoldAndNormal;
