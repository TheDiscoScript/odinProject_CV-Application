import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class EventButtons extends Component {
  render() {
    return (
      <Box style={{ marginTop: "20px" }}>
        <Divider fullwidth />{" "}
        <Grid container>
          <Grid
            container
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
            spacing={1}
          >
            <Grid item xs={12} sm={4} md={12} lg={12}>
              <Button
                size="large"
                style={{
                  backgroundColor: "green",
                  color: "yellow",
                  width: "100%",
                }}
              >
                Generate PDF
              </Button>
            </Grid>
            <Grid item xs={12} sm={4} md={12} lg={6}>
              {" "}
              <Button
                size="large"
                style={{ backgroundColor: "red", color: "blue", width: "100%" }}
              >
                Reset Data
              </Button>
            </Grid>
            <Grid item xs={12} sm={4} md={12} lg={6}>
              {" "}
              <Button
                size="large"
                style={{
                  backgroundColor: "gray",
                  color: "white",
                  width: "100%",
                }}
              >
                Load Example
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
export default EventButtons;
