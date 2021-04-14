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
      skill: {
        React: "React",
      },
      value: {
        ReactValue: 2,
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
            skill={datas.skill.React}
            star={datas.value.ReactValue}
          />
        </Box>
      </Box>
    );
  }
}
export default Skills;
