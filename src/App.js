import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./styles.css";
// import Theme from "./customtheme";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const drawerWidth = 240;

const darkMode = 'light';

const theme = createTheme({
  palette: {
    mode: darkMode ? 'dark' : 'light'
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
}));

// export default function ToggleColorMode() {
//   const [mode, setMode] = React.useState('light');
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//       },
//     }),
//     [],
//   );

// if mode: dark
// then set darkMode variable to dark
// else
// then set darkMode variable to light

function AppStructure() {
  const colorMode = React.useContext(ColorModeContext);
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleDrawerToggle = () => { setOpen(!open); };
  const handleDrawerClose = () => { setOpen(false); };
  const toggleDarkMode = () => { setDarkMode(!darkMode); };

  //schrijf hier verder ifstatement darkmode
  
  return (
      <div className={classes.root}>
        <CssBaseline />
        <Header
          handleDrawerToggle={handleDrawerToggle}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />
        <Sidebar 
        handleDrawerClose={handleDrawerClose} 
        open={open} 
        />
        <main
           className={clsx(classes.content, {
             [classes.contentShift]: open
           })}
         >
          <div className={classes.drawerHeader} />
          <Content />
        </main>
      </div>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppStructure />
    </ThemeProvider>
  );
}