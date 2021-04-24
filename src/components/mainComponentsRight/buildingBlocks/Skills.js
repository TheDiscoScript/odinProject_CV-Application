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

    const skillsCopy = this.props.skills.slice();
    const skillsObject = skillsCopy.map((object) => (
      <TextAndRating key={object.id} skill={object.skill} star={object.value} />
    ));

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
        <Box>{skillsObject}</Box>
      </Box>
    );
  }
}
export default Skills;
