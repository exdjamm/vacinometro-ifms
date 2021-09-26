import {useState} from 'react';

import "./UpdateVacina.css";

import Header from '../components/Header';
import Profile from '../components/Profile';
import CopyrightFooter from '../components/CopyrightFooter';

import PageContext from '../contexts/PageContext';

const pageContext = {
	iconsHeader:{
		logged: "house",
		notLogged: "box-arrow-in-right"
	},
	textHeader:{
		mainButtonLogOff: "Cadastro",
		mainButtonLogOn: "Tela inicial",
		mobileButton: "Tela inicial"
	}
}

function UpdateVacina() {
	const [redirect, setRedirect] = useState(false)

	const handleAccessHome = (e) => {
		// TODO: Funcionalidade de quando clicar no Botão verde no Header
		// Lembrando que o user não poderá entrar nessa pagina deslogado
	}

	if (redirect) {
		return <Redirect to={'/'}/>
	}

	return (
		<PageContext.Provider value={pageContext}>
			<div id="update-vacina-page">
				<Header handleGreenButtonBehavior={handleAccessHome} />
				<Profile />
				<CopyrightFooter />
			</div>
		</PageContext.Provider>
	);
}

export default UpdateVacina;
