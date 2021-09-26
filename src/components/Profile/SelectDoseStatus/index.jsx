import "./index.css";

function SelectDoseStatus({text = "1ª Dose tomada", status = true, ...rest}) {
	return (
		<article { ...rest } className="select-dose-status">
			<div className="select-icon">
				<i className="bi bi-check-square-fill" hidden={!status}/>
				<i className="bi bi-square" hidden={status}/>
			</div>
			<span>{text}</span>
		</article>
	);
}

export default SelectDoseStatus;