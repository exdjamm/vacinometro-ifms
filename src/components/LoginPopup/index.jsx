import LoginGoogleButton from './LoginGoogleButton'
import PopupBox from "../PopupBox"

import "./index.css";

function LoginPopup({state: [state, setState]}) {
	const closePopup = () => {
		setState(false)
	}

	// TODO: Show Warn feature

	return (
		<article hidden={!state}>
			<PopupBox 
				warnText="Erro no Login! Tente novamente"
				showWarn={false}
				hintText="Use sua conta instituional para criar ou acessar seu perfil."
				closeButton={closePopup}
				button={LoginGoogleButton} 
			/>
		</article>
	);
}

export default LoginPopup;