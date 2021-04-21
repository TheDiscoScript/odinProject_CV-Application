import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import SectionTitle from "./baseBlocks/SectionTitle";
import TextAndRating from "./baseBlocks/TextAndRating";

class Skills extends Component {
  render() {
    const datas = {
      title: {
        Title: "Skills",
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
        <SectionTitle title={datas.title.Title} />
        <Box>
          <TextAndRating
            skill={this.props.skills.skill}
            star={this.props.skills.value}
          />
        </Box>
      </Box>
    );
  }
}
export default Skills;
