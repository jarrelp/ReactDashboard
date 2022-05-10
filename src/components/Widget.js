import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem",
  },
  spacer: {
    flexGrow: 1,
  },
  body: {
    padding: "0.5rem",
    flexGrow: 1,
  },
});

const widgetNames = {
  a: "Line Chart",
  b: "Area Chart",
  c: "Bar Chart",
  d: "Scatter Chart",
};
export default function Widget({ id, component: Item }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h6" gutterBottom>
          {widgetNames[id]}
        </Typography>
        <div className={classes.spacer} />
      </div>
      <div className={classes.body}>
        <Item />
      </div>
    </Card>
  );
}
