import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import SectionTitle from "./baseBlocks/SectionTitle";
import FromTo from "./baseBlocks/FromTo";
import BoldText from "./baseBlocks/BoldText";
import NormalText from "./baseBlocks/NormalText";
import Divider from "@material-ui/core/Divider";

class Experience extends Component {
  render() {
    const datas = {
      title: {
        Title: "Experience",
      },
      text: {
        Comma: ", ",
      },
    };

    const workCopy = this.props.work.slice();
    const workObjects = workCopy.map((object) => (
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
          <Box style={{ textAlign: "left" }}>
            <BoldText title={object.position} />
          </Box>
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <NormalText
              text={object.companyName}
              comma={datas.text.Comma}
              city={object.city}
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
        {workObjects}
      </Box>
    );
  }
}
export default Experience;
