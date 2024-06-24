import React from "react";

export default function ExpenseDate(props) {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" }); // toLocalString Contains two parameters first language and second is day
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div className="date">
      <div className="month">{month}</div>
      
      <div className="year">{year}</div>
     
      <div className="day">{day}</div>
    </div>
  );
}
