import Card from "../UI/Card";
import "./Expenses.css";
import Filter from "../Filter/Filter";
import Chart from "../Chart/Chart";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
    const currentYear = new Date().getFullYear();
    const [filterOnYear, setFilterOnYear] = useState(currentYear);

    const yearChangeHandler = (selectedYear) => {
        setFilterOnYear(selectedYear);
    };
    const filteredExpenses = props.expenses.filter((expense) => {
        return (
            new Date(expense.date).getFullYear().toString() ===
            filterOnYear.toString()
        );
    });
    const chartDataPoints = [];
    filteredExpenses.map((expense) =>
        chartDataPoints.push({
            amount: expense.amount,
            month: expense.date.getMonth(),
        })
    );
    return (
        <Card className="expenses">
            <Filter
                currentYear={currentYear}
                onYearChange={yearChangeHandler}
            ></Filter>
            <Chart dataPoints={chartDataPoints}></Chart>
            <ExpenseList filteredExpenses={filteredExpenses}></ExpenseList>
        </Card>
    );
};
export default Expenses;
