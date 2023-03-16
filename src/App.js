import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Content from "./components/Content";
import "./styles.css";

function AppStructure() {
  return (
    <>
      <Content />
    </>
  );
}

export default function App() {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#5cbc63",
            contrastText: "#fff",
          },
          secondary: {
            main: "#000000",
          },
        },
        typography: {
          h3: {
            fontFamily: "CeraPro-Bold",
            color: "#484848",
          },
          h4: {
            fontFamily: "CeraPro-Bold",
            color: "#484848",
          },
          h5: {
            color: "#484848",
          },
          fontFamily: "CeraPro-Regular",
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              rounded: {
                borderRadius: 12,
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                textTransform: "none",
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                fontWeight: 700,
              },
              contained: {
                boxShadow: "none",
              },
            },
          },
          MuiFab: {
            styleOverrides: {
              root: {
                boxShadow: "none",
              },
            },
          },
        },
      }),
    []
  );
  return (
    <ThemeProvider theme={theme}>
      <AppStructure />
    </ThemeProvider>
  );
}
