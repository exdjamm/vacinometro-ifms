import "./index.css";

function SaveStatusButton(props) {
	return (
		<button { ... props} className="save-status-btn">
			<span className="poppins-font">Salvar alterações</span>
			<i className="bi bi-save-fill"/>
		</button>
	);
}

export default SaveStatusButton;