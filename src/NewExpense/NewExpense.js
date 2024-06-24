import React from 'react'

export default function NewExpense(props) {
  return (
    <div className="expense-item">
    <div>{props.date.toDateString()}</div>
    <div className="expense-item__description">
      <h2>{props.name}</h2>
      <div className="expense-item__price">${props.amount.toFixed(2)}</div>
    </div>
  </div>
  )
}
