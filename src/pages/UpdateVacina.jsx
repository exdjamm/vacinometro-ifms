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

	return (
		<PageContext.Provider value={pageContext}>
			<div id="update-vacina-page">
				<Header />
				<Profile />
				<CopyrightFooter />
			</div>
		</PageContext.Provider>
	);
}

export default UpdateVacina;
