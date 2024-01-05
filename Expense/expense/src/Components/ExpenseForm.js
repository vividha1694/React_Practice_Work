import { useState, useEffect } from "react"; 

function ExpenseForm (props) {
 
    const [title,setTitle] = useState("");
    const [date,setDate]   = useState("");
    const [amount,setAmount]= useState("");

    useEffect(() => {
        console.log(title);
    },[title]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(title);
        console.log(date);
        console.log(amount);
        props.addExpense({title: title, date: date, amount:amount});
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlfor="title">Title : </label>
                <input type="text" name="title" id="title"
                 onChange={(event) => {
                    setTitle(event.target.value);
                }}></input><br></br><br></br>
                <label htmlfor="date">Date : </label>
                <input type="date" name="date" id="date" 
                onChange={(event) => {
                    setDate(new Date(event.target.value));
                }}></input><br></br><br></br>
                <label htmlfor="amount">Amount : </label>
                <input type="text" name="amount" id="amount"
                onChange={(event) => {
                    setAmount(event.target.value);
                }}></input><br></br><br></br>
                <input type="submit" name="submit" value="submit"></input>
            </form>
        </div>
    )
}

export default ExpenseForm;