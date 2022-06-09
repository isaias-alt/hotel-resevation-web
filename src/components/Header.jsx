import { useState } from "react";
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const classes = useStyle();

  const displayMobile = () => {};
  //TODO: add a logo and images
  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <h1 className={classes.logo}>estoy dentro del toolbar</h1>
      </Toolbar>
    );
  };

  return <AppBar>{mobile ? displayMobile() : displayDesktop()}</AppBar>;
};

const useStyle = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: "50px",
    margin: theme.spacing(1, 0, 0, 2),
    objectFit: "contain",
  },
}));

export default Header;
