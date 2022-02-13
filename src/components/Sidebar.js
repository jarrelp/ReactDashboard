import React from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DevicesIcon from "@mui/icons-material/Devices";
import EventIcon from "@mui/icons-material/Event";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
}));

export default function ({ open, handleDrawerClose }) {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <div className="">
        <List>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Mail" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="Events" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ExploreIcon />
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Favorites" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <DevicesIcon />
            </ListItemIcon>
            <ListItemText primary="Devices" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}
