import React, { Component } from "react";
import Title from "./buildingBlocks/Title";
import Text from "./buildingBlocks/Text";
import Grid from "@material-ui/core/Grid";
import Date from "./buildingBlocks/Date";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Buttons from "./buildingBlocks/Button";
import ButtonAdd from "./buildingBlocks/ButtonAdd";

class Education extends Component {
  render() {
    const datas = {
      labels: {
        Name: "University",
        City: "City",
        Degree: "Degree",
        Subject: "Subject",
        From: "From",
        To: "To",
      },
      placeholder: {},
    };

    const educationObject = this.props.education.map((object) => (
      <Grid container spacing={1} key={object.id}>
        <Text
          label={datas.labels.Name}
          value={object.university}
          onChange={(e) =>
            this.props.handleEducationChange("university", object.id, e)
          }
        />
        <Text
          label={datas.labels.City}
          value={object.city}
          onChange={(e) =>
            this.props.handleEducationChange("city", object.id, e)
          }
        />
        <Text
          label={datas.labels.Degree}
          value={object.degree}
          onChange={(e) =>
            this.props.handleEducationChange("degree", object.id, e)
          }
        />
        <Text
          label={datas.labels.Subject}
          value={object.subject}
          onChange={(e) =>
            this.props.handleEducationChange("subject", object.id, e)
          }
        />
        <Date
          label={datas.labels.From}
          value={object.from}
          onChange={(e) =>
            this.props.handleEducationChange("from", object.id, e)
          }
        />
        <Date
          label={datas.labels.To}
          // value={object.to}
          onChange={(e) => this.props.handleEducationChange("to", object.id, e)}
        />
        <Grid
          itemv
          xs={12}
          sm={12}
          md={12}
          lg={12}
          fullwidth
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <FormControlLabel
            control={
              <Switch
                name="checkedB"
                color="primary"
                checked={object.checked}
                onChange={(e) =>
                  this.props.handleEducationToggle("checked", object.id, e)
                }
              />
            }
            label="Ongoing"
          />
        </Grid>
        <Buttons
          onClick={(id) => this.props.handleEducationRemove(object.id)}
        />
      </Grid>
    ));

    return (
      <Grid container>
        <Grid container spacing={1}>
          <Title title={"Education"} />
          {educationObject}
        </Grid>
        <ButtonAdd onClick={(e) => this.props.handleEducationAdd(e)} />
      </Grid>
    );
  }
}
export default Education;
