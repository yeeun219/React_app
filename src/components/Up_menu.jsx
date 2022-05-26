import React from "react";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

import { menuItems } from "../inputData";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navButton: {
    margin: "auto",
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: "orange",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (index, event) => {
    setAnchorEl({ [index]: event.currentTarget });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Toolbar className={classes.toolbar}>
        {Object.keys(menuItems).map((item, index) => (
          <div className={classes.navButton} key={index}>
            <Button color="inherit" onClick={(e) => handleClick(index, e)}>
              {item} <i className="fas fa-caret-down" />
            </Button>
            <Menu
              anchorEl={anchorEl && anchorEl[index]}
              keepMounted
              open={anchorEl && Boolean(anchorEl[index])}
              onClose={handleClose}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
              {menuItems[item].map((menuitems, menuindex) => (
                <MenuItem
                  key={menuindex}
                  selected={menuitems === item}
                  onClick={handleClose}
                >
                  {menuitems.title}
                </MenuItem>
              ))}
            </Menu>
          </div>
        ))}
      </Toolbar>
    </div>
  );
}
