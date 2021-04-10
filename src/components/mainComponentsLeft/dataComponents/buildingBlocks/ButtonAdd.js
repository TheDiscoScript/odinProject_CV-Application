import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";

class ButtonAdd extends Component {
  render() {
    return (
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        style={{ marginBottom: "10px" }}
      >
        <ButtonGroup
          style={{ width: "100%" }}
          variant="contained"
          aria-label="contained primary button group"
        >
          <Button color="primary" style={{ width: "100%" }}>
            <AddIcon />
          </Button>
        </ButtonGroup>
      </Grid>
    );
  }
}
export default ButtonAdd;
