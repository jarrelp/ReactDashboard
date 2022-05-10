import React from "react";
import AreaChart from "./components/customcharts/AreaChart";
import BarChart from "./components/customcharts/BarChart";
import LineChart from "./components/customcharts/LineChart";
import ScatterChart from "./components/customcharts/ScatterChart";
import { Grid } from "@mui/material";

export default function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <AreaChart />
      </Grid>
      <Grid item xs={6}>
        <BarChart />
      </Grid>
      <Grid item xs={6}>
        <LineChart />
      </Grid>
      <Grid item xs={6}>
        <ScatterChart />
      </Grid>
    </Grid>
  );
}
