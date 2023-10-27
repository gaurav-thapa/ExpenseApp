import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };
    const formSubmitHandler = (event) => {
        event.preventDefault();
        const expense = {
            title: title,
            amount: parseFloat(amount),
            date: new Date(date),
        };
        // console.log('date',Date(date));
        // console.log('entered expense - ',expense);
        props.onSaveExpenseData(expense);
        setTitle("");
        setAmount("");
        setDate("");
    };
    const cancelBtnHanler = (event) => {
        event.preventDefault();
        props.onCancelBtnClick();
    }
    return (
        <form onSubmit={formSubmitHandler}>
            
            <div className="expense-controls">
                <div className="expense-control">
                    <label>Title</label>
                    <input
                        onChange={titleChangeHandler}
                        type="text"
                        value={title}
                    ></input>
                </div>
                <div className="expense-control">
                    <label>Amount</label>
                    <input
                        onChange={amountChangeHandler}
                        type="number"
                        size="10"
                        min="0.01"
                        step="0.01"
                        value={amount}
                    ></input>
                </div>
            </div>
            <div className="expense-controls">
                <div className="expense-control">
                    <label>Date</label>
                    <input
                        onChange={dateChangeHandler}
                        type="date"
                        value={date}
                    ></input>
                </div>
            </div>
            <div className="expense-actions">
                <button onClick={cancelBtnHanler}>Cancel</button>
                <button>Add Expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;
