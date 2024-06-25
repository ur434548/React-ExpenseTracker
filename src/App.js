import "./App.css";
import "./Expense.css";
import Expense from "./Expense/Expense";
import React, { useState } from "react";

import ExpenseForm from "./NewExpense/ExpenseForm";
import ExpenseFilter from "./Expense/ExpenseFilter";

const cars = [
  { id: 'e1', name: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
  { id: 'e2',name: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  { id: 'e3', name: 'Car Insurance', amount: 294.67, date: new Date(2022, 2, 28) },
  { id: 'e4', name: 'New Desk ', amount: 450, date: new Date(2023, 5, 12) },
];

function App() {
  const [expenses, setExpenses] = useState(cars);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <ExpenseFilter  onChange={filterChangeHandler} />
      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          date={expense.date}
          name={expense.name}
          amount={expense.amount}
        />
      ))}
    </div>
  );
}

export default App;
