import "./index.css";

function DisclaimerWarn(props) {
	return (
		<article className="disclaimer-container">
			<i className='bi bi-exclamation-circle'></i>
			<span className="poppins-font">
				Este site não é uma página oficial do IFMS e os dados aqui presentes são fornecidos por alunos do Instituto, podendo não representar o valor real de estudantes vacinados.
			</span>
		</article>
	);
}

export default DisclaimerWarn;