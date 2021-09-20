import HeaderTitle from './HeaderTitle'
import HeaderButton from './HeaderButtons'

import "./index.css";

function Header(props) {
	return (
		<header id="page-header">
			<HeaderTitle />

			<div className="hbuttons">
				<HeaderButton className="hlogin-btn" color="white" text="Login" />
				<HeaderButton className="haccess-btn" color="green" text="Acessar Conta" />
			</div>
		</header>
	);
}

export default Header;