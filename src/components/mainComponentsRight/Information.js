import React, { Component } from "react";
import SectionTitle from "./buildingBlocks/SectionTitle";
import FromTo from "./buildingBlocks/FromTo";
import BoldText from "./buildingBlocks/BoldText";
import Description from "./buildingBlocks/Description";
import NormalText from "./buildingBlocks/NormalText";

class Information extends Component {
  render() {
    return (
      <div style={{ gridArea: "main" }}>
        <SectionTitle />
        <FromTo />
        <BoldText />
        <NormalText />
        <Description />
      </div>
    );
  }
}
export default Information;
