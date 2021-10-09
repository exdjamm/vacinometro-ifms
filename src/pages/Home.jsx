import { useState, useEffect, useContext} from 'react';
import { Redirect } from "react-router-dom";

import Header from '../components/Header';
import VacinaCounter from '../components/VacinaCounter';
import HomeHint from '../components/HomeHint';
import DisclaimerWarn from '../components/DisclaimerWarn';
import CopyrightFooter from '../components/CopyrightFooter';
import LoginPopup from '../components/LoginPopup';

import PageContext from '../contexts/PageContext';
import FirebaseContext from '../contexts/FirebaseContext';

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

const cleanSearchLocation = ({ search }) => {
	if(search == ''){
		return search
	}

	const searchPure = search.replace('?', '')
	let params = searchPure.split('&')
    
    let paramsObject = { }
    
	params.forEach( (index) => {
		const [ name, value ]= index.split('=')

		paramsObject = { ... paramsObject, [name]: value }
	})
    
    return paramsObject
}

function Home({ location }) {
	
	const [loginParam, setLoginParam] = useState(false)
	useEffect( () => {
		const { login } = cleanSearchLocation(location)
		const test = (login == 1) && (login != undefined)
		setLoginParam(test)

		console.table({login, loginParam})
	})

	const { user } = useContext(FirebaseContext)

	const [loginPopupShow, setLoginPopupShow] = useState(loginParam)
	const [redirect, setRedirect] = useState(false)

	const handleAccessProfile = (e) => {
		if(user != undefined){
			setRedirect(true)
		}else{
			setLoginPopupShow(true)
			// TODO: hide popup on end login
		}
	}

	if (redirect) {
		return <Redirect to={'/vacinas'}/>
	}

	return (
		<PageContext.Provider value={pageContext}>
			<div id="home-page">
				<LoginPopup state={[loginPopupShow, setLoginPopupShow]}/>
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
