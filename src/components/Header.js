import React from "react";
import "fontsource-roboto";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LanguageIcon from "@material-ui/icons/Language";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            href="https://linkedin.com/in/wollmada"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>

          <Typography variant="h4" className={classes.title}>
            CV Application
          </Typography>
          <Button color="inherit">
            <LanguageIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
