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
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Paper className={classes.paper}>
            <DataPanel />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Paper
            className={classes.paper}
            style={{ position: "sticky", top: "10px" }}
          >
            <PreviewPanel />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Main;
