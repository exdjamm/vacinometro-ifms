import LoginGoogleButton from './LoginGoogleButton'
import PopupBox from "../PopupBox"

import "./index.css";

function LoginPopup({state: [state, setState]}) {
	const closePopup = () => {
		setState(false)
	}

	// TODO: Show Warn feature
	// TODO: Mudar comportamento depende se usar botão "login" ou "cadastro"
	// Ao usar botão login, não reseta as doses
	// Ao usar botão cadastro, reseta as doses

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