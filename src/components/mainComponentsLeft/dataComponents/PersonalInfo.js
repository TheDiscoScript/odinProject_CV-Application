import React, { Component } from "react";
import Title from "./buildingBlocks/Title";
import Text from "./buildingBlocks/Text";
import PhoneField from "material-ui-phone-number";
import Grid from "@material-ui/core/Grid";
import CustomTextField from "./buildingBlocks/Textfield";
import UploadButtons from "./buildingBlocks/UploadBut2";

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
        GitHub: "github.com/example",
        LinkedIn: "linedin.com/in/example",
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
          onChange={(e) => this.props.handlePersonalInfoChange("firstName", e)}
        />
        <Text
          label={datas.labels.LastName}
          value={this.props.personalInfo.lastName}
          onClick={(e) => this.props.handlePersonalInfoChange("lastName", e)}
        />
        <Text
          label={datas.labels.Email}
          placeholder={datas.placeholder.Email}
          type={datas.type.Email}
          value={this.props.personalInfo.email}
          onChange={(e) => this.props.handlePersonalInfoChange("email", e)}
        />
        <Text
          label={datas.labels.Adress}
          placeholder={datas.placeholder.Adress}
          value={this.props.personalInfo.adress}
          onChange={(e) => this.props.handlePersonalInfoChange("adress", e)}
        />
        <Grid item xs={12} sm={6} md={12} lg={6}>
          <PhoneField
            style={{ width: "100%", margin: "5px" }}
            variant="filled"
            label="Phone Number"
            defaultCountry={"cz"}
            value={this.props.personalInfo.phoneNumber}
            onChange={(e) => this.props.handlePhone("phoneNumber", e)}
          />
        </Grid>

        <Text
          label={datas.labels.GitHub}
          placeholder={datas.placeholder.GitHub}
          value={this.props.personalInfo.gitHub}
          onChange={(e) => this.props.handlePersonalInfoChange("gitHub", e)}
        />
        <Text
          label={datas.labels.LinkedIn}
          placeholder={datas.placeholder.LinkedIn}
          value={this.props.personalInfo.linkedIn}
          onChange={(e) => this.props.handlePersonalInfoChange("linkedIn", e)}
        />
        <UploadButtons
          onClick={(e) => this.props.handlePersonalInfoFileChange(e)}
        />
        <CustomTextField
          placeholder={datas.placeholder.Description}
          value={this.props.personalInfo.description}
          handlePersonalInfoChange={(e) =>
            this.props.handlePersonalInfoChange("description", e)
          }
        />
      </Grid>
    );
  }
}
export default PersonalInfo;
