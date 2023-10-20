import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
const ExpenseItem = (props) => {
    const title = props.title;
    const price = props.price;

    return (
        <div class="expenseItem">
            <div class="left">
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className="title">{title}</div>
            </div>
            <div className="price">$ {price}</div>
        </div>
    );
};
export default ExpenseItem;
