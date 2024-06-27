import "./App.css";
import "./Expense.css";
import ExpenseCharts from "./Expense/ExpenseCharts";
import React, { useState } from "react";
import ExpensesList from "./Expense/ExpensesList";
import ExpenseForm from "./NewExpense/ExpenseForm";
import ExpenseFilter from "./Expense/ExpenseFilter";

const cars = [
  // {
  //   id: "1",
  //   date: new Date(2020, 11, 22),
  //   name: "Suzuki",
  //   amount: 1599.6,
  // },
  // {
  //   id: "2",
  //   date: new Date(2023, 4, 21),
  //   name: "Toyota",
  //   amount: 3299.6,
  // },
  // {
  //   id: "3",
  //   date: new Date(2024, 2, 23),
  //   name: "Chaghan",
  //   amount: 4599.0,
  // },
  // {
  //   id: "4",
  //   date: new Date(2022, 5, 22),
  //   name: "Honda",
  //   amount: 2599.22,
  // },
  // {
  //   id: "5",
  //   date: new Date(2021, 7, 21),
  //   name: "Hundai",
  //   amount: 599.6,
  // },
];

function App() {
  const [expenses, setExpenses] = useState(cars);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  

  const [filteredYear, setFilteredYear] = useState("");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
  const filteredExpenses = filteredYear
    ? expenses.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
      )
    : expenses;
  
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <ExpenseFilter selected={filteredYear} onChange={filterChangeHandler} />
      <ExpenseCharts expense={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
}

export default App;
