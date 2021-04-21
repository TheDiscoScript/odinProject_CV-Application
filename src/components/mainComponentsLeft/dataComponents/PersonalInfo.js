import React, { Component } from "react";
import Title from "./buildingBlocks/Title";
import Text from "./buildingBlocks/Text";
import PhoneField from "material-ui-phone-number";
import Grid from "@material-ui/core/Grid";
import CustomTextField from "./buildingBlocks/Textfield";

class PersonalInfo extends Component {
  render() {
    const datas = {
      labels: {
        Name: "First Name",
        LastName: "Last Name",
        Adress: "Adress",
        Email: "E-mail",
        Photo: "Photo",
        Phone: "Phone Number",
        GitHub: "GitHub",
        LinkedIn: "LinkedIn",
      },
      placeholder: {
        Email: "example@example.com",
        Adress: "Country, City",
        Description: "Who are you?",
      },
      type: {
        Email: "email",
      },
    };
    return (
      <Grid container spacing={1}>
        <Title title={"Personal Information"} />
        <Text
          label={datas.labels.Name}
          value={this.props.personalInfo.firstName}
        />
        <Text
          label={datas.labels.LastName}
          value={this.props.personalInfo.lastName}
        />
        <Text
          label={datas.labels.Email}
          placeholder={datas.placeholder.Email}
          type={datas.type.Email}
          value={this.props.personalInfo.email}
        />
        <Text
          label={datas.labels.Adress}
          placeholder={datas.placeholder.Adress}
          value={this.props.personalInfo.adress}
        />
        <Grid item xs={12} sm={6} md={12} lg={6}>
          <PhoneField
            style={{ width: "100%", margin: "5px" }}
            variant="filled"
            label="Phone Number"
            defaultCountry={"cz"}
            value={this.props.personalInfo.phoneNumber}
          />
        </Grid>
        <Text
          label={datas.labels.Photo}
          value={this.props.personalInfo.photo}
        />
        <Text
          label={datas.labels.GitHub}
          value={this.props.personalInfo.gitHub}
        />
        <Text
          label={datas.labels.LinkedIn}
          value={this.props.personalInfo.linkedIn}
        />
        <CustomTextField
          placeholder={datas.placeholder.Description}
          value={this.props.personalInfo.description}
        />
      </Grid>
    );
  }
}
export default PersonalInfo;
