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
        <Box
          style={{
            display: "flex",
            flexDirection: "rows",
            justifyContent: "space-around",
            alignItems: "flex-start",
          }}
        >
          <Box>
            <FromTo from={this.props.work.from} to={this.props.work.to} />
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box style={{ padding: "10px" }}>
            <Box style={{ textAlign: "left" }}>
              <BoldText title={this.props.work.position} />
            </Box>
            <Box style={{ display: "flex", flexDirection: "row" }}>
              <NormalText
                text={this.props.work.companyName}
                comma={datas.text.Comma}
                city={this.props.work.city}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
export default Experience;
