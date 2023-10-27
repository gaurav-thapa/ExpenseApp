import './ExpenseDate.css';
const ExpenseDate = (props) => {
    const date = new Date(props.date);
    const year = date.getFullYear();
    const month = date.toLocaleDateString('en-US', {month: 'long'});
    const day = date.toLocaleDateString('en-US', {day: '2-digit'});
    return (
        <div className="date">
            <p>{month}</p>
            <p>{year}</p>
            <h1>{day}</h1>
        </div>
    );
};
export default ExpenseDate;
