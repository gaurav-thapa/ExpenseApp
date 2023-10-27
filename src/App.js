import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
    {
        id: 1,
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2023, 7, 14),
    },
    {
        id: 2,
        title: "Rent",
        amount: 1200,
        date: new Date(2021, 12, 22),
    },
    {
        id: 3,
        title: "Groceries",
        amount: 49.99,
        date: new Date(2022, 5, 16),
    },
    {
        id: 4,
        title: "Skin Care",
        amount: 99.12,
        date: new Date(2023, 1, 1),
    },
];
function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevState) => [expense, ...prevState]);
    };
    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses expenses={expenses}></Expenses>
        </div>
    );
}

export default App;
