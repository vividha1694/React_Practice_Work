import React from 'react'
import ExpenseItem from './ExpenseItem'
import '../Styles/Expenses.css'
 

function Expense(props) {
  return (
    <div className="expenses">
      {props.expenses.map((expenses) =>{
      return <ExpenseItem expenses={expenses}></ExpenseItem>
    }
   )}
    </div>
  );
}

export default Expense
