import "./index.css";

function HomeHint() {
	return (
		<div className="home-hint-container">
			<span className="hhint-text poppins-font">
				Cadastre-se para registrar sua vacinação ou faça login para atualizar seus dados vacinais.
				</span>
			<button className="hhint-button poppins-font">
				<span>Contribuir com o Vacinômetro</span>
				<i className="bi bi-arrow-right-circle-fill"></i>
			</button>
		</div>
	);
}

export default HomeHint;