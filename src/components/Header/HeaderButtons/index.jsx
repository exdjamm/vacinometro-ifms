import "bootstrap-icons/font/bootstrap-icons.css"

import "./index.css";

function HeaderButton({color='green', text='Acessar Conta'}){
	const isColorWhite = color == "white";

	const styleGreen = {
		color: "var(--white)",
		backgroundColor: "var(--dark-green)"
	}

	const styleWhite = {
		color: "var(--dark-green)",
		backgroundColor: "var(--white)"
	}

	const style = (isColorWhite)? styleWhite : styleGreen;

	return (
		<div className="header-btns" style={style}>
			<span className="header-btn-content ubuntu-font">{text}</span>
			<i hidden={isColorWhite} className="bi bi-box-arrow-in-right btn-icon"></i>

		</div>
	);
}

export default HeaderButton;