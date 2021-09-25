import {useState} from 'react';

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
		logged: "person-circle",
		notLogged: "box-arrow-in-right"
	},
	textHeader:{
		mainButtonLogOff: "Cadastro",
		mainButtonLogOn: "Meu peril",
		mobileButton: "Acessar Conta"
	}
}

function Home() {

	return (
		<PageContext.Provider value={pageContext}>
			<div id="home-page">
				<Header />
				<VacinaCounter />
				<HomeHint />
				<DisclaimerWarn />
				<CopyrightFooter />
			</div>
		</PageContext.Provider>
	);
}

export default Home;
