import "./index.css";

function RenameThis({ warnText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", ...rest}) {
	return (
		<span className="poppins-font popup-warn" { ...rest }>
			{warnText}			
		</span>
	);
}

export default RenameThis;