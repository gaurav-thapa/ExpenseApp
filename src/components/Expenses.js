import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = () => {
    const title = "test";
    const date = "2020-10-10";
    const price = 10.1;
    return (
        <Card>
            <ExpenseItem title={title} date={date} price={price}></ExpenseItem>
            <ExpenseItem title={title} date={date} price={price}></ExpenseItem>

        </Card>
    );
};
export default Expenses;
