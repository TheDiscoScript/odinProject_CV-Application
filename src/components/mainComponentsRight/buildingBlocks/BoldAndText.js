import React, { Component } from "react";
import BoldText from "./BoldText";
import NormalText from "./NormalText";
import Box from "@material-ui/core/Box";

class BoldAndText extends Component {
  render() {
    return (
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <BoldText title={this.props.title}></BoldText>
        <NormalText text={this.props.text}></NormalText>
      </Box>
    );
  }
}
export default BoldAndText;
