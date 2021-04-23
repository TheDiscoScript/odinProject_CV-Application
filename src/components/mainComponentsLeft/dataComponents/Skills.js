import React, { Component } from "react";
import Title from "./buildingBlocks/Title";
import Grid from "@material-ui/core/Grid";
import RatingField from "./buildingBlocks/Rating";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

class Skills extends Component {
  render() {
    const skillsObject = this.props.skills.map((object) => (
      <Grid container key={object.id}>
        <RatingField
          skill={object.skill}
          star={object.value}
          handleSkillsChangeSkill={(e) =>
            this.props.handleSkillsChange("skill", object.id, e)
          }
          handleSkillsChangeStar={(e) =>
            this.props.handleSkillsChange("value", object.id, e)
          }
        />
      </Grid>
    ));

    return (
      <Grid container spacing={1}>
        <Title title={"Skills"} />
        {skillsObject}
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          style={{ marginTop: "15px" }}
        >
          <Button color="primary" variant="contained" fullWidth>
            <AddIcon />
          </Button>
        </Grid>
      </Grid>
    );
  }
}
export default Skills;
