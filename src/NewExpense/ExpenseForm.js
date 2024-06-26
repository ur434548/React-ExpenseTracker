import React, { useState } from "react";
import "./Expenseform.css"
export default function ExpenseForm(props) {
  const [titleName, newTitleName] = useState("");
  const [titleAmount, newTitleAmount] = useState("");
  const [titleDate, newTitleDate] = useState("");

  const nameChangeHandler = (event) => {
    newTitleName(event.target.value);
  };
  const amountChangeHandler = (event) => {
    newTitleAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    newTitleDate(event.target.value);
  };
  const submitHanlder = (event) => {
    event.preventDefault();

    const expenseData = {
      name: titleName,
      amount: titleAmount,
      date: new Date(titleDate),
    };
    props.onAddExpense(expenseData);
    
    newTitleName("");
    newTitleAmount("");
    newTitleDate("");
  };

  return (
    <form onSubmit={submitHanlder}>
      <div className="form">
        <div>
          <span>Name </span>
          <input
            type="text"
            className="name"
            value={titleName}
            placeholder="Enter The Name"
            required
            onChange={nameChangeHandler}
          />
        </div>
        <div>
          <span>Amount </span>
          <input
            type="number"
            className="name"
            required
            value={titleAmount}
            placeholder="Enter The Amount"
            onChange={amountChangeHandler}
          />
        </div>
        <div>
          <span>Date & Day </span>
          <input
            type="date"
            value={titleDate}
            className="name"
            required
            onChange={dateChangeHandler}
          />
        </div>
        <button type="submit" className="form-btn">
          Add Expense
        </button>
      </div>
    </form>
  );
}
