import React from "react";
import { Chart } from "react-google-charts";

import { lineData, lineOptions } from "./chartLineData";
import { pieData, pieOptions } from "./chartPieData";
import { barData, barOptions } from "./chartBarData";

export function ChartsComponents() {
  return (
    <div>
        <Chart
          className="pl-60 mt-20"
          chartType="Line"
          width="90%"
          height="400px"
          data={lineData}
          options={lineOptions}
        />
        <div className="flex mx-auto mt-10">
            <Chart
            className="ml-20"
            chartType="PieChart"
            data={pieData}
            options={pieOptions}
            width={"80%"}
            height={"400px"}
            />
            <Chart
            chartType="Bar"
            width="80%"
            height="400px"
            data={barData}
            options={barOptions}
            />
        </div>
    </div>
  );
}