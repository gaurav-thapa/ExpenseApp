import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import "./NewExpense.css";
import { useState } from "react";
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };
    const [showForm, setShowForm] = useState(false);
    const addExpenseBtnHandler = () => {
        setShowForm(true);
    };
    const onCancelBtnClick = () => {
        setShowForm(false);
    };
    return (
        <Card className="new-expense">
            {showForm ? (
                <ExpenseForm
                    onCancelBtnClick={onCancelBtnClick}
                    onSaveExpenseData={saveExpenseDataHandler}
                ></ExpenseForm>
            ) : (
                <div className="addExpenseRow">
                    <button onClick={addExpenseBtnHandler}>Add Expense</button>
                </div>
            )}
        </Card>
    );
};
export default NewExpense;
