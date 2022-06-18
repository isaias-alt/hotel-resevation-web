import { CssBaseline, makeStyles } from "@material-ui/core";
import React from "react";

const Home = () => {
  const classes = useStyle();
  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <h1>Home Page bitch</h1>
      </div>
    </>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {},
}));

export default Home;
