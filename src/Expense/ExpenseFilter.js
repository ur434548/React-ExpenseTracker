import React from "react";
import "./ExpenseFilter.css";

export default function ExpenseFilter(props) {
  const dropdownChanger = (event) => {
    props.onChange(event.target.value);
  };
  console.log(props);
  console.log(props.onChange);

  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label>Filter by Year</label>
        <select value={props.selected} onChange={dropdownChanger}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
}
