import React from "react";
import ChartBars from "./ChartBars";
import "./Chart.css";
export default function Chart(props) {
  const dataPointsvalues = props.dataPoints.map(
    (dataPoints) => dataPoints.value // show the values of new array
  );
  console.log(dataPointsvalues)
  const totalMaximum = Math.max(...dataPointsvalues); //gives the maximin values
  console.log(totalMaximum)  /// acc to mnth

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBars
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={totalMaximum} //4599
          label={dataPoints.label}
        />
      ))}
    </div>
  );
}
