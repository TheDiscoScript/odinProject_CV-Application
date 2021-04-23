import React, { Component } from "react";
import Title from "./buildingBlocks/Title";
import Text from "./buildingBlocks/Text";
import Grid from "@material-ui/core/Grid";
import Date from "./buildingBlocks/Date";
import Buttons from "./buildingBlocks/Button";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ButtonAdd from "./buildingBlocks/ButtonAdd";

class Experience extends Component {
  render() {
    const datas = {
      labels: {
        Position: "Position",
        Company: "Company Name",
        City: "City",
        From: "From",
        To: "To",
      },
      placeholder: {
        Description: "What was your job?",
      },
    };
    const experienceObject = this.props.experience.map((object) => (
      <Grid container spacing={1} key={object.id}>
        <Text
          label={datas.labels.Position}
          value={object.position}
          onChange={(e) =>
            this.props.handleExperienceChange("position", object.id, e)
          }
        />
        <Text
          label={datas.labels.Company}
          value={object.companyName}
          onChange={(e) =>
            this.props.handleExperienceChange("companyName", object.id, e)
          }
        />
        <Text
          label={datas.labels.City}
          value={object.city}
          onChange={(e) =>
            this.props.handleExperienceChange("city", object.id, e)
          }
        />
        <Date
          label={datas.labels.From}
          value={object.from}
          onChange={(e) =>
            this.props.handleExperienceChange("from", object.id, e)
          }
        />
        <Date
          label={datas.labels.To}
          value={object.to}
          onChange={(e) =>
            this.props.handleExperienceChange("to", object.id, e)
          }
        />
        <Grid
          container
          xs={12}
          sm={6}
          md={12}
          lg={6}
          fullwidth
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <FormControlLabel
            control={<Switch name="checkedB" color="primary" />}
            label="Till now"
            disabled
          />
        </Grid>
        <Buttons />
      </Grid>
    ));

    return (
      <Grid container>
        <Grid container spacing={1}>
          <Title title={"Experience"} />
          {experienceObject}
        </Grid>
        <ButtonAdd onClick={(e) => this.props.handleExperienceAdd(e)} />
      </Grid>
    );
  }
}
export default Experience;
