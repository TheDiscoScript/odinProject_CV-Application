import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Description from "./baseBlocks/Description";
import SectionTitle from "./baseBlocks/SectionTitle";

class TitleAndDescription extends Component {
  render() {
    const datas = {
      title: {
        Title: "Who am I?",
      },
    };
    return (
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        <SectionTitle title={datas.title.Title}></SectionTitle>
        <Description
          text={this.props.personalDescription.description}
        ></Description>
      </Box>
    );
  }
}
export default TitleAndDescription;
