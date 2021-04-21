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
        <BoldAndText
          title={datas.labels.GitHub}
          text={this.props.personalInformation.gitHub}
        />
        <BoldAndText
          title={datas.labels.LinkedIn}
          text={this.props.personalInformation.linkedIn}
        />
        <BoldAndText
          title={datas.labels.Email}
          text={this.props.personalInformation.email}
        />
        <BoldAndText
          title={datas.labels.Adress}
          text={this.props.personalInformation.adress}
        />
        <BoldAndText
          title={datas.labels.Number}
          text={this.props.personalInformation.phoneNumber}
        />
      </div>
    );
  }
}
export default Sidebar;
