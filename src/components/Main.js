import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DataPanel from "./mainComponentsLeft/DataPanel";
import PreviewPanel from "./mainComponentsRight/PreviewPanel";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: "1rem",
    textAlign: "center",
    padding: "1rem",
  },
}));
const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container style={{ justifyContent: "center", textAlign: "center" }}>
        <Grid item xs={12} sm={12} md={4} lg={5}>
          <Paper className={classes.paper}>
            <DataPanel />
          </Paper>
        </Grid>
        <Grid
          container
          xs={12}
          sm={12}
          md={8}
          lg={7}
          style={{ justifyContent: "center", textAlign: "center" }}
        >
          <Paper
            className={classes.paper}
            style={{
              position: "sticky",
              top: "10px",
              width: "210mm",
              height: "297mm",
              padding: "0",
            }}
            elevation={12}
          >
            <PreviewPanel />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Main;
