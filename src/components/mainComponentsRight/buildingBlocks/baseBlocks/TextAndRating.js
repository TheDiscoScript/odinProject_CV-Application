import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";

class TextAndRating extends Component {
  render() {
    return (
      <Box
        style={{
          display: "flex",
          flexDirection: "rows",
          justifyContent: "space-around",
          alignItems: "flex-start",
          padding: "20px",
        }}
      >
        <Typography style={{ fontSize: "1.15rem" }} variant="body1">
          {this.props.skill}
        </Typography>
        <Rating
          style={{ paddingLeft: "15px" }}
          value={this.props.star}
          readOnly
        />
      </Box>
    );
  }
}
export default TextAndRating;
