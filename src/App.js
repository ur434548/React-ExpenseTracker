import "./App.css";
import "./Expense.css";
import Expense from "./Expense/Expense";
import React, { useState } from "react";

import ExpenseForm from "./NewExpense/ExpenseForm";
import ExpenseFilter from "./Expense/ExpenseFilter";

const cars = [
  {
    id: "1",
    date: new Date(2020, 11, 20),
    name: "Suzuki",
    amount: 1599.6,
  },
  {
    id: "2",
    date: new Date(2020, 11, 20),
    name: "Toyota",
    amount: 3299.6,
  },
  {
    id: "3",
    date: new Date(2020, 11, 20),
    name: "Chaghan",
    amount: 4599.0,
  },
  {
    id: "4",
    date: new Date(2020, 11, 20),
    name: "Honda",
    amount: 2599.22,
  },
  {
    id: "5",
    date: new Date(2020, 11, 20),
    name: "Hundai",
    amount: 599.6,
  },
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
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <ExpenseFilter selected={filteredYear} onChange={filterChangeHandler} />
      {filteredExpenses .map((expense) => (
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
