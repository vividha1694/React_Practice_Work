import React, { useState, useEffect } from 'react'

//import ExpenseItem from './Components/ExpenseItem'
import ExpenseForm from './Components/ExpenseForm';
//import ExpenseDate from './Components/ExpenseDate';
import Expense from './Components/Expense';


function App() {
  const [expenses, setExpenses] = useState([
    {
      title:"Soap", date: new Date(2026,11,26),amount:200,
  
    },
    {
      title:"Car", date: new Date(2026,11,26),amount:700000,
  
    },
    {
      title:"Bike", date: new Date(2026,11,26),amount:200000,
  
    },
    {
      title:"Clothes", date: new Date(2026,11,26),amount:50000,
  
    },
  ]);


 useEffect(() => {

  console.log(JSON.stringify(expenses));
}, [expenses]);

const handleAddExpense = (expenses) =>{
  console.log(handleAddExpense,JSON.stringify(expenses));

  setExpenses((prevState) => {
    return [...prevState,expenses];
  });
};
  return (
    <>
    
    <ExpenseForm addExpense={handleAddExpense}/>
    <Expense expenses={expenses}/>
    {/*{expenses.map((expenses) =>{
      return <ExpenseItem expenses={expenses}></ExpenseItem>
    }
   )}}*/}
   {/* <ExpenseItem expenses={expenses[0]}></ExpenseItem>
    <ExpenseItem expenses={expenses[1]}></ExpenseItem>
    <ExpenseItem expenses={expenses[2]}></ExpenseItem>
  <ExpenseItem expenses={expenses[3]}></ExpenseItem> */}
   </>
  );
}



export default App;

