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
        <div className="mt-10 md:flex block">
          <div className="mb-10 md:flex block md:w-1/2">
            <Chart
            className=" p-6 border-solid border-2 "
            chartType="PieChart"
            data={pieData}
            options={pieOptions}
            width={"80%"}
            height={"400px"}
            />
          </div>
          <div className="md:flex block md:w-1/2 md:pr-0 ">
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
    </div>
  );
}