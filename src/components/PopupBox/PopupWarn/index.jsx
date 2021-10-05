import "./index.css";

function RenameThis({ warnText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}) {
	return (
		<span className="poppins-font popup-warn">
			{warnText}			
		</span>
	);
}

export default RenameThis;