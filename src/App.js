import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";
import { CssBaseline, ThemeProvider } from "@mui/material/styles";
import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./styles.css";

const drawerWidth = 240;

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

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Header
          handleDrawerToggle={handleDrawerToggle}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />
        <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <Content />
        </main>
      </div>
    </ThemeProvider>
  );
}








// import React, { useState } from "react";
// import clsx from "clsx";
// import { makeStyles } from '@mui/styles';
// import { CssBaseline } from "@mui/material"; //createMuiTheme, 
// import { createTheme, ThemeProvider } from '@mui/material/styles'; //, adaptV4Theme
// import Content from "./components/Content";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";

// const drawerWidth = 240;

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     display: "flex"
// //   },

// //   content: {
// //     flexGrow: 1,
// //     padding: theme.spacing(3),
// //     transition: theme.transitions.create("margin", {
// //       easing: theme.transitions.easing.sharp,
// //       duration: theme.transitions.duration.leavingScreen
// //     }),
// //     marginLeft: -drawerWidth
// //   },
// //   contentShift: {
// //     transition: theme.transitions.create("margin", {
// //       easing: theme.transitions.easing.easeOut,
// //       duration: theme.transitions.duration.enteringScreen
// //     }),
// //     marginLeft: 0
// //   },
// //   drawerHeader: {
// //     display: "flex",
// //     alignItems: "center",
// //     padding: theme.spacing(0, 1),
// //     // necessary for content to be below app bar
// //     ...theme.mixins.toolbar,
// //     justifyContent: "flex-end"
// //   }
// // }));

// const useStyles = makeStyles();

// const theme = createTheme();

// function AppContent(props) {
//   const classes = useStyles(); // ✅ This is safe because it is called inside ThemeProvider
//   //return <Card className={classes.root}>...</Card>;

//   const [open, setOpen] = useState(true);
//   // const [darkMode, setDarkMode] = useState(true);

//   const handleDrawerToggle = () => {
//     setOpen(!open);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   // const toggleDarkMode = () => {
//   //   setDarkMode(!darkMode);
//   // };

//   return (
//     <div className={classes.root}>
//         <CssBaseline />
//         <Header
//           handleDrawerToggle={handleDrawerToggle}
//           // toggleDarkMode={toggleDarkMode}
//           // darkMode={darkMode}
//         />
//         <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
//         <main
//           className={clsx(classes.content, {
//             [classes.contentShift]: open
//           })}
//         >
//           <div className={classes.drawerHeader} />
//           <Content />
//         </main>
//       </div>
//   );
// }

// function App(props) {

//   // const theme = createTheme(({ //adaptV4Theme
//   //   palette: {
//   //     type: darkMode ? "dark" : "light"
//   //   }
//   //   }));

//   return (
//     <ThemeProvider theme={theme}>
//       <AppContent {...props} />
//     </ThemeProvider>
//   );
// }

// export default App;
