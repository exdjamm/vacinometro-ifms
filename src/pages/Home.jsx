import {useState} from 'react';
import { Redirect } from "react-router-dom";

import Header from '../components/Header';
import VacinaCounter from '../components/VacinaCounter';
import HomeHint from '../components/HomeHint';
import DisclaimerWarn from '../components/DisclaimerWarn';
import CopyrightFooter from '../components/CopyrightFooter';

import PageContext from '../contexts/PageContext';

import logo from '../logo.svg';
import './Home.css';

const pageContext = {
	iconsHeader:{
		logged: "person-cicle",
		notLogged: "box-arrow-in-right"
	},
	textHeader:{
		mainButtonLogOff: "Cadastro",
		mainButtonLogOn: "Meu peril",
		mobileButton: "Acessar Conta"
	}
}

function Home() {
	const [loginPopupShow, setLoginPopupShow] = useState(false)
	const [redirect, setRedirect] = useState(false)

	const handleAccessProfile = (e) => {
		// TODO: Funcionalidade quando clicado no botão de Verde no Header e no botão do Hin
	}

	if (redirect) {
		return <Redirect to={'/vacinas'}/>
	}

	return (
		<PageContext.Provider value={pageContext}>
			{/*TODO: Popup de login e sua mudança de estado*/}
			<div id="home-page">
				<Header handleGreenButtonBehavior={handleAccessProfile} />
				<VacinaCounter />
				<HomeHint handleAccessProfile={handleAccessProfile} />
				<DisclaimerWarn />
				<CopyrightFooter />
			</div>
		</PageContext.Provider>
	);
}

export default Home;
