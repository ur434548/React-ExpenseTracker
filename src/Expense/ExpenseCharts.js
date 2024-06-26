import React from "react";
import Chart from "../Chart/Chart";

export default function ExpenseCharts(props) {
  const charDataPoints = [
    {
      label: "Jan",
      value: "0",
    },
    {
      label: "Feb",
      value: "0",
    },
    {
      label: "Mar",
      value: "0",
    },
    {
      label: "Apr",
      value: "0",
    },
    {
      label: "May",
      value: "0",
    },
    {
      label: "Jun",
      value: "0",
    },
    {
      label: "Jul",
      value: "0",
    },
    {
      label: "Aug",
      value: "0",
    },
    {
      label: "Sep",
      value: "0",
    },
    {
      label: "Oct",
      value: "0",
    },
    {
      label: "Nov",
      value: "0",
    },
    {
      label: "Dec",
      value: "0",
    },
  ];
  for (const expense of props.expense) {
    const expenseMonth = expense.date.getMonth(); // month of initial array

    charDataPoints[expenseMonth].value += expense.amount; // ad the expensemotnh arrays values to the initial arry
    console.log(charDataPoints);
  }
  return (
    <div>
      <Chart dataPoints={charDataPoints} />
    </div>
  );
}
