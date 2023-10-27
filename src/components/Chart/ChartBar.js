import './ChartBar.css';
const ChartBar = (props) => {
    const fillHeight = props.fillHeight;
    const cssValue = 'linear-gradient(to top, #006e4f 0%, #006e4f '+fillHeight+'%, #C9D6DF '+fillHeight+'%, #C9D6DF 100%)';
    return (
        <div className="month">
            <div className="indicator" style={{background: cssValue}}></div>
            <div className="name">{props.month}</div>
        </div>
    );
};
export default ChartBar;
