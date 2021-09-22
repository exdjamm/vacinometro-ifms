import "./index.css";

function SaveStatusButton(props) {
	return (
		<button className="save-status-btn">
			<span className="poppins-font">Salvar alterações</span>
			<i class="bi bi-save-fill"/>
		</button>
	);
}

export default SaveStatusButton;