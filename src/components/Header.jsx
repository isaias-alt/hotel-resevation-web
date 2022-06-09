import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { AppBar, makeStyles, Toolbar, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const classes = useStyle();

  const displayMobile = () => {};
  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <Link to="/">
          <img src={logo} className={classes.logo} />
        </Link>
        <div className={classes.center}>
          <InputBase
            fullWidth
            placeholder="Search here..."
            inputProps={{ className: classes.input }}
          />
          <SearchIcon className={classes.search} />
        </div>
      </Toolbar>
    );
  };

  return (
    <AppBar className={classes.root}>
      {mobile ? displayMobile() : displayDesktop()}
    </AppBar>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: "0",
    backgroundColor: "#f4f4f4",
    zIndex: 99,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: "75px",
    objectFit: "contain",
  },
  input: {
    fontSize: "1.2rem",
    padding: theme.spacing(1, 5, 1, 5),
  },
  search: {
    color: "gray",
    margin: theme.spacing(0, 1, 0, 0),
  },
  center: {
    display: "flex",
    alignItems: "center",
    border: "1px solid lightgray",
    borderRadius: "999px",
    minWidth: "300px",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
}));

export default Header;
