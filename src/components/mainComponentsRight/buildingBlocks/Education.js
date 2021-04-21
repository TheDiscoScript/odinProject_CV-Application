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
            <FromTo
              from={this.props.education.from}
              to={this.props.education.to}
            />
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box style={{ padding: "10px" }}>
            <SizedBoldAndNormal
              uni={this.props.education.university}
              city={this.props.education.city}
            />
            <Box style={{ display: "flex", flexDirection: "row" }}>
              <NormalText
                degree={this.props.education.degree}
                in={datas.text.In}
                subject={this.props.education.subject}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
export default Education;
