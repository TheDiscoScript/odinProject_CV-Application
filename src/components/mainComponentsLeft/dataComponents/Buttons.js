import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class EventButtons extends Component {
  render() {
    return (
      <Box style={{ marginTop: "20px" }}>
        <Divider fullwidth />{" "}
        <ButtonGroup
          size="large"
          variant="contained"
          style={{ marginTop: "20px" }}
        >
          <Button style={{ backgroundColor: "green", color: "yellow" }}>
            Generate PDF
          </Button>
          <Button style={{ backgroundColor: "red", color: "blue" }}>
            Reset
          </Button>
          <Button style={{ backgroundColor: "gray", color: "white" }}>
            Load Example
          </Button>
        </ButtonGroup>
      </Box>
    );
  }
}
export default EventButtons;
