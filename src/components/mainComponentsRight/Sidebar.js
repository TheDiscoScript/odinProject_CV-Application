import React, { Component } from "react";
import SectionTitle from "./buildingBlocks/baseBlocks/SectionTitle";
import BoldAndText from "./buildingBlocks/BoldAndText";
import img from "./buildingBlocks/baseBlocks/prof.png";

class Sidebar extends Component {
  render() {
    const datas = {
      labels: {
        Title: "Personal information",
        Email: "Email",
        Number: "Phone",
        GitHub: "Github",
        LinkedIn: "LinkedIn",
        Adress: "Adress",
      },
      testing: {
        Text: "xxxx xxxx",
      },
    };
    return (
      <div
        style={{
          gridArea: "sidebar",
          backgroundColor: "#D3D3D3",
        }}
      >
        <img
          src={img}
          alt="profile pic tu re"
          style={{ height: "55mm", width: "55mm", marginTop: "15px" }}
        />

        <SectionTitle title={datas.labels.Title} />
        <BoldAndText title={datas.labels.GitHub} text={datas.testing.Text} />
        <BoldAndText title={datas.labels.LinkedIn} text={datas.testing.Text} />
        <BoldAndText title={datas.labels.Email} text={datas.testing.Text} />
        <BoldAndText title={datas.labels.Adress} text={datas.testing.Text} />
        <BoldAndText title={datas.labels.Number} text={datas.testing.Text} />
      </div>
    );
  }
}
export default Sidebar;
