import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
    const title = props.title;
    const amount = props.amount;

    return (
        <Card className="expenseItem">
            <div className="left">
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className="title">{title}</div>
            </div>
            <div className="price">${amount}</div>
        </Card>
    );
};
export default ExpenseItem;
