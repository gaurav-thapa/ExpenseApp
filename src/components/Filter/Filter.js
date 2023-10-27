import "./Filter.css";
const Filter = (props) => {
    const currentYear = props.currentYear;
    const onYearChangeHandler = (event) => {
        const filteredYear = event.target.value;
        props.onYearChange(filteredYear);
    };
    return (
        <div>
            <div className="filter">
                Filter by year
                <select onChange={onYearChangeHandler}>
                    <option>{currentYear}</option>
                    <option>{currentYear - 1}</option>
                    <option>{currentYear - 2}</option>
                </select>
            </div>
        </div>
    );
};
export default Filter;
