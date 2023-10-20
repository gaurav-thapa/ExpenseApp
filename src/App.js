import "./App.css";
import Expenses from "./components/Expenses";

function App() {
    const expenses = [
        {
            id: 1,
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: 2,
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: 3,
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: 4,
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
    ];
    return (
        <div className="App">
            <Expenses expenses={expenses}></Expenses>
        </div>
    );
}

export default App;
