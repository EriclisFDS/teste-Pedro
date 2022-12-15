import React from "react";
import { Chart } from "react-google-charts";

import { lineData, lineOptions } from "./chartLineData";
import { pieData, pieOptions } from "./chartPieData";
import { barData, barOptions } from "./chartBarData";

export function ChartsComponents() {
  return (
    <div className="ml-20">
        <Chart
          className=" p-6 mt-20 border-solid border-2"
          chartType="Line"
          width="95%"
          height="400px"
          data={lineData}
          options={lineOptions}
        />
        <div className="flex mt-10">
            <Chart
            className=" p-6 border-solid border-2"
            chartType="PieChart"
            data={pieData}
            options={pieOptions}
            width={"80%"}
            height={"400px"}
            />
            <Chart
            className="p-6 border-solid border-2"
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