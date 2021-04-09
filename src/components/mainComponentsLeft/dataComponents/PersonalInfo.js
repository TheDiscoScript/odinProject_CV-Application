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
        <Text label={datas.labels.Name} />
        <Text label={datas.labels.LastName} />
        <Text
          label={datas.labels.Email}
          placeholder={datas.placeholder.Email}
          type={datas.type.Email}
        />
        <Text
          label={datas.labels.Adress}
          placeholder={datas.placeholder.Adress}
        />
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <PhoneField
            style={{ width: "100%", margin: "5px" }}
            variant="filled"
            label="Phone Number"
            defaultCountry={"cz"}
          />
        </Grid>
        <Text label={datas.labels.Photo} />
        <Text label={datas.labels.GitHub} />
        <Text label={datas.labels.LinkedIn} />
        <CustomTextField placeholder={datas.placeholder.Description} />
      </Grid>
    );
  }
}
export default PersonalInfo;
