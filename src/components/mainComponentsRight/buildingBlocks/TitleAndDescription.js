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
      text: {
        Text:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Duis risus. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. In enim a arcu imperdiet malesuada. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Vivamus porttitor turpis ac leo. ",
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
        <Description text={datas.text.Text}></Description>
      </Box>
    );
  }
}
export default TitleAndDescription;
