import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import SectionTitle from "./baseBlocks/SectionTitle";
import FromTo from "./baseBlocks/FromTo";
import NormalText from "./baseBlocks/NormalText";
import Divider from "@material-ui/core/Divider";
import SizedBoldAndNormal from "./baseBlocks/NormalSizeBoldAndNormal";

class Education extends Component {
  render() {
    const datas = {
      title: {
        Title: "Education",
      },
      text: {
        In: " in ",
      },
    };

    const educationCopy = this.props.education.slice();
    const educationObject = educationCopy.map((object) => (
      <Box
        key={object.id}
        style={{
          display: "flex",
          flexDirection: "rows",
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        <Box>
          <FromTo from={object.from} to={object.to} />
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box style={{ padding: "10px" }}>
          <SizedBoldAndNormal uni={object.university} city={object.city} />
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <NormalText
              degree={object.degree}
              in={datas.text.In}
              subject={object.subject}
            />
          </Box>
        </Box>
      </Box>
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
        <SectionTitle title={datas.title.Title}></SectionTitle>
        {educationObject}
      </Box>
    );
  }
}
export default Education;
