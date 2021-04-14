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
      date: {
        From: "1.8.2017",
        To: "now",
      },
      University: {
        Name: "Masarykova Univerzita",
        City: "Brno",
        Degree: "Master's degree",
        Subject: "Law",
        In: " in ",
        Comma: ",",
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
            <SizedBoldAndNormal
              uni={datas.University.Name}
              city={datas.University.City}
            />
            <Box style={{ display: "flex", flexDirection: "row" }}>
              <NormalText
                degree={datas.University.Degree}
                in={datas.University.In}
                subject={datas.University.Subject}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
export default Education;
