import React, { useState } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { withSize } from "react-sizeme";
import Widget from "./Widget";
import LineChart from "./customcharts/LineChart";
import AreaChart from "./customcharts/AreaChart";
import BarChart from "./customcharts/BarChart";
import ScatterChart from "./customcharts/ScatterChart";

const originalItems = ["a", "b", "c", "d"];

const initialLayouts = {
  lg: [
    { w: 6, h: 6, x: 0, y: 0, i: "a", moved: false, static: false },
    { w: 6, h: 6, x: 6, y: 0, i: "b", moved: false, static: false },
    { w: 6, h: 6, x: 6, y: 6, i: "c", moved: false, static: false },
    { w: 6, h: 6, x: 12, y: 6, i: "d", moved: false, static: false },
  ],
};

const componentList = {
  a: LineChart,
  b: AreaChart,
  c: BarChart,
  d: ScatterChart,
};

function Content({ size: { width } }) {
  return (
    <>
      <ResponsiveGridLayout
        className="layout"
        layouts={initialLayouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={60}
        width={width}
      >
        {originalItems.map((key) => (
          <div
            key={key}
            className="widget"
            data-grid={{ w: 3, h: 2, x: 0, y: Infinity }}
          >
            <Widget id={key} component={componentList[key]} />
          </div>
        ))}
      </ResponsiveGridLayout>
    </>
  );
}

export default withSize({ refreshMode: "debounce", refreshRate: 60 })(Content);
