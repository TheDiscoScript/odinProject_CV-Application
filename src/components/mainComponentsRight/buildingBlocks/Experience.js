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
        Company: "IDK yet,s.r.o.",
        City: "Brno",
        Comma: ", ",
      },
      date: {
        From: "18.5.1998",
        To: "18.5.2021",
      },
      position: {
        Position: "React Junior Dev",
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
            <FromTo from={datas.date.From} to={datas.date.To} />
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box style={{ padding: "10px" }}>
            <Box>
              <BoldText title={datas.position.Position} />
            </Box>
            <Box style={{ display: "flex", flexDirection: "row" }}>
              <NormalText
                text={datas.text.Company}
                comma={datas.text.Comma}
                city={datas.text.City}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
export default Experience;
