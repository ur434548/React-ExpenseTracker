import React from "react";
import "./ChartBars.css";
export default function ChartBars(props) {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chartBars">
      <div className="chartBars-inner">
        <div className="chartBars-fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chartBars-label">{props.label}</div>
    </div>
  );
}
