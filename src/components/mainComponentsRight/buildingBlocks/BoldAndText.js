import React, { Component } from "react";
import BoldText from "./baseBlocks/BoldText";
import NormalText from "./baseBlocks/NormalText";
import Box from "@material-ui/core/Box";

class BoldAndText extends Component {
  render() {
    return (
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "flex-start",
          paddingLeft: "10px",
        }}
      >
        <BoldText title={this.props.title}></BoldText>
        <NormalText text={this.props.text}></NormalText>
      </Box>
    );
  }
}
export default BoldAndText;
