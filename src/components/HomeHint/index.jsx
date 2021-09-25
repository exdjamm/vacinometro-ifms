import {useState, useContext} from 'react';
import FirebaseContext from '../../contexts/FirebaseContext';

import "./index.css";

function HomeHint({ handleAccessProfile }) {
	const {user} = useContext(FirebaseContext);
	const logged = user != undefined;

	const textHint = (!logged) ? "Cadastre-se para registrar sua vacinação ou faça login para atualizar seus dados vacinais." : "Acesse seu perfil para atualizar seus dados";
	const textHintButton = (!logged) ? "Contribuir com o Vacinômetro" :"Atualizar meus dados"

	return (
		<div className="home-hint-container">
			<span className="hhint-text poppins-font">
				{textHint}
			</span>
			<button onClick={handleAccessProfile} className="hhint-button poppins-font">
				<span>{textHintButton}</span>
				<i className="bi bi-arrow-right-circle-fill"></i>
			</button>
		</div>
	);
}

export default HomeHint;