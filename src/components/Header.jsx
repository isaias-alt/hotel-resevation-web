import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import {
  AppBar,
  makeStyles,
  Toolbar,
  InputBase,
  Avatar,
  Typography,
  IconButton,
  Drawer,
  ListItem,
  List,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  const [tablet, setTablet] = useState(true);
  const [draweropen, setDraweropen] = useState(false);
  const classes = useStyle();

  const displayTablet = () => {
    const handleDrawerOpen = () => {
      setDraweropen(true);
    };

    const handleDrawerClose = () => {
      setDraweropen(false);
    };

    const headersData = ["My account", "Previous Bookings", "Log Out"];
    const getDrawerChoices = () => {
      return headersData.map((data, index) => {
        return (
          <List key={index}>
            <ListItem button>{data}</ListItem>
          </List>
        );
      });
    };

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "default",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: draweropen,
            onClose: handleDrawerClose,
          }}
        >
          <div>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

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
        <div className={classes.right}>
          <Typography className={classes.signin}>Sign In</Typography>
          <Avatar className={classes.avatar} />
        </div>
      </Toolbar>
    );
  };

  return (
    <AppBar className={classes.root}>
      {tablet ? displayTablet() : displayDesktop()}
    </AppBar>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: "0",
    backgroundColor: "#f4f4f4",
    zIndex: 99,
    width: "100vw",
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
  right: {
    display: "flex",
    alignItems: "center",
    color: "#333333",
  },
  signin: {
    marginRight: theme.spacing(1),
  },
  avatar: {
    margin: theme.spacing(1),
  },
}));

export default Header;
