
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseForm from "../NewExpense/ExpenseForm";
import React, { useState } from "react";
export default function Expense(props) {
  

  return (
    <Card className="expense">
      <div>
        <ExpenseDate date={props.date} />
      </div>

      <div className="title">{props.name}</div>
      <div>
        <div className="amount"> ${props.amount}</div>
      </div>
    </Card>
  );
}
