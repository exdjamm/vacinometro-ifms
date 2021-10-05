import "./index.css";

function RenameThis({ hintText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lorem interdum."}) {
	return (
		<p className="popup-hint poppins-font">
			{hintText}
		</p>
	);
}

export default RenameThis;