import {useContext} from 'react';
import PageContext from '../../../contexts/PageContext';
import FirebaseContext from '../../../contexts/FirebaseContext';

import "./index.css";

function HeaderButton({ color = 'green', text = 'Acessar Conta', className = '', ...rest }) {
	const {iconsHeader} = useContext(PageContext)
	const {user} = useContext(FirebaseContext)
	const logged = user != undefined ;

	const iconButton = (logged) ? iconsHeader.logged : iconsHeader.notLogged;
	const isColorWhite = color == "white";

	const styleGreen = {
		color: "var(--white)",
		backgroundColor: "var(--dark-green)"
	}

	const styleWhite = {
		color: "var(--dark-green)",
		backgroundColor: "var(--white)"
	}

	const style = (isColorWhite) ? styleWhite : styleGreen;

	return (
		<button className={`${className} header-btns`} style={style} { ...rest }>
			<span className="header-btn-content ubuntu-font">{text}</span>
			<i hidden={isColorWhite} className={`bi bi-${iconButton} btn-icon`}></i>
		</button>
	);
}

export default HeaderButton;