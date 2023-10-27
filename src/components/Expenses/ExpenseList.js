import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
    const filteredExpenses = props.filteredExpenses;
    let expenseContent;
    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                title={expense.title}
                date={expense.date}
                amount={expense.amount}
                key={expense.id}
            ></ExpenseItem>
        ));
    } else {
        expenseContent = <p className="no-expense-msg">No Expenses Found!</p>;
    }
    return <div>{expenseContent}</div>;
};
export default ExpenseList;
