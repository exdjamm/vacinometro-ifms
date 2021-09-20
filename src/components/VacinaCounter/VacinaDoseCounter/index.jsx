import "./index.css";

function RenameThis({doseValue=0, doseTitle='1ª Dose', doseSubTitle=''}){
	const hasSubTitle = doseSubTitle == '';

	return (
		<article className="vacina-dcounter">
			<div className="dose-title">
				<span className="d-maintitle poppins-font">{doseTitle}</span>
				<span className="d-subtitle poppins-font" hidden={hasSubTitle}>{doseSubTitle}</span>
			</div>
			<div className="dose-number">
				<span className="poppins-font">{doseValue}</span>
			</div>
		</article>	
	);
}

export default RenameThis;