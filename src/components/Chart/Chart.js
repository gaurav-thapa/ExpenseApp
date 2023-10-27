import "./Chart.css";
import Card from "../UI/Card";
import ChartBar from "./ChartBar";
const Chart = (props) => {
    const dataPoints = props.dataPoints;
    const MONTHS = [
        { label: "Jan", amount: 0 },
        { label: "Feb", amount: 0 },
        { label: "Mar", amount: 0 },
        { label: "Apr", amount: 0 },
        { label: "May", amount: 0 },
        { label: "Jun", amount: 0 },
        { label: "Jul", amount: 0 },
        { label: "Aug", amount: 0 },
        { label: "Sep", amount: 0 },
        { label: "Oct", amount: 0 },
        { label: "Nov", amount: 0 },
        { label: "Dec", amount: 0 },
    ];
    const amounts = [];
    dataPoints.map((data) => {
        amounts.push(data.amount);
        MONTHS[data.month].amount = data.amount;
    });

    const maxAmount = Math.max(...amounts);
    return (
        <Card className="chart">
            {MONTHS.map((month) => (
                <ChartBar
                    fillHeight={(month.amount / maxAmount * 100).toFixed()}
                    month={month.label}
                    key={month.label}
                ></ChartBar>
            ))}
        </Card>
    );
};
export default Chart;
