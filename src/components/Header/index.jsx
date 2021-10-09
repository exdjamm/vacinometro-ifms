import { useContext } from 'react';

import PageContext from '../../contexts/PageContext';
import FirebaseContext from '../../contexts/FirebaseContext';

import HeaderTitle from './HeaderTitle'
import HeaderButton from './HeaderButtons'

import { signOut } from 'firebase/auth';


import "./index.css";

function Header({handleGreenButtonBehavior}) {
	const {textHeader} = useContext(PageContext)
	const {user, auth} = useContext(FirebaseContext)

	const logged = user != undefined;

	let textLogin = (logged) ? "Sair" : "Login" ;
	let textCadastro = (logged) ? textHeader.mainButtonLogOn : textHeader.mainButtonLogOff ;
	let textAccessProfile = textHeader.mobileButton

	const handleClickLoginBtn = (e) =>{
		if(logged){
			signOut(auth)
		}else{
			// TODO: mostrar popup de login; setLoginPopupShow(true)
		}
	}

	return (
		<header id="page-header">
			<HeaderTitle />

			<div className="hbuttons">
				<HeaderButton 
					onClick={handleClickLoginBtn} 
					className="hlogin-btn" 
					color="white" 
					text={textLogin} />

				<HeaderButton 
					onClick={handleGreenButtonBehavior} 
					className="haccess-btn" 
					color="green" 
					text={textCadastro} />

				<HeaderButton 
					onClick={handleGreenButtonBehavior} 
					className="haccess-btn-mobile" 
					color="green" 
					text={textAccessProfile} />
			</div>
		</header>
	);
}

export default Header;