import React, { Component } from "react";
import { Typography, Grid } from "@material-ui/core";

export default class Home extends Component {
  render() {
    return (
      <Grid container justify="center">
        <Typography gutterBottom variant="h1">
          Home
        </Typography>
      </Grid>
    );
  }
}
