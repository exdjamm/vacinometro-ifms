import { useState, useContext } from 'react';
import { Redirect } from "react-router-dom";

import "./UpdateVacina.css";

import Header from '../components/Header';
import Profile from '../components/Profile';
import CopyrightFooter from '../components/CopyrightFooter';

import PageContext from '../contexts/PageContext';
import FirebaseContext from '../contexts/FirebaseContext';

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
	
	const { user } = useContext(FirebaseContext)
	const notLogged = user == undefined;

	const handleAccessHome = (e) => {
		setRedirect(true)
	}

	if (redirect || notLogged) {
		return <Redirect to={{
				    pathname: "/",
				    search: "?login=1",
		  		}}/>
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
