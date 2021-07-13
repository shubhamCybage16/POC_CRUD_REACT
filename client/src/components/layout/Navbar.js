import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            POC CRUD
          </Typography>

          {/*--------------------*/}
          <Typography variant="h6" color="secondary" className={classes.root}>
            <Link exact to="/">
              Home
            </Link>
          </Typography>

          <Typography variant="h6">
            <Link to="/users/add">Add User</Link>
          </Typography>

          {/*--------------------*/}
        </Toolbar>
      </AppBar>
    </div>
  );
}
