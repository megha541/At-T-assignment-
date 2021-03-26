import './Step.scss';
const Step = ({icon, status, statusType}) => {
    return (
        <div className="step">
            <div className={`step-icon ${status ? "" : "not-active"}`}><img src={icon} alt="steps"/></div>
            <div className={`step-bar ${status ? "active" : ""}`}></div>
            <div className="step-name">{statusType}</div>
        </div>
    )
}
export default Step;