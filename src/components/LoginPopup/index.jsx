import LoginGoogleButton from './LoginGoogleButton'
import PopupBox from "../PopupBox"

import "./index.css";

function LoginPopup({state: [state, setState]}) {
	const closePopup = () => {
		setState(true)
	}

	return (
		<article hidden={state}>
			<PopupBox 
				warnText="Erro no Login! Tente novamente"
				hintText="Use sua conta instituional para criar ou acessar seu perfil."
				closeButton={closePopup}
				button={LoginGoogleButton} 
			/>
		</article>
	);
}

export default LoginPopup;