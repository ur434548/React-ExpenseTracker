import logo from "./logo.svg";
import "./App.css";
import "./Expense.css";
import Expense from "./Expense/Expense";
import React, { useState } from "react";
import NewExpense from "./NewExpense/NewExpense";
import ExpenseForm from "./NewExpense/ExpenseForm";
const cars = [
  {
    date: new Date(20.12, 1196),
    name: "Suzuki",
    amount: 1599.6,
  },
  {
    date: new Date(20.12, 1196),
    name: "Toyota",
    amount: 3299.6,
  },
  {
    date: new Date(20.12, 1196),
    name: "Chaghan",
    amount: 4599.0,
  },
  {
    date: new Date(20.12, 1196),
    name: "Honda",
    amount: 2599.22,
  },
  {
    date: new Date(20.12, 1196),
    name: "Hundai",
    amount: 599.6,
  },
];

function App() {
  const [expenses, setExpenses] = useState(cars);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  console.log(expenses);
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      {cars.map((expense, index) => (
        <Expense
          key={index}
          date={expense.date}
          name={expense.name}
          amount={expense.amount}
        />
      ))}
    </div>
  );
}

export default App;
