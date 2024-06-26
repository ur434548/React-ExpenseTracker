import React from "react";
import Expense from "./Expense";
export default function ExpensesList(props) {
  
  return (
    <div>
      {props.items.length === 0 ? (
        <p>No Expense Item Found</p>
      ) : (
       props.items.map((expense) => (
          <Expense
            key={expense.id}
            date={expense.date}
            name={expense.name}
            amount={expense.amount}
          />
        ))
      )}
    </div>
  );
}
