import { useState, useContext} from "react";

import FirebaseContext from '../../../contexts/FirebaseContext'

import { doc, setDoc } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import "./index.css";

const provider = new GoogleAuthProvider()

const initUserDataOnDB = async (auth, db) => {
	const { uid } = auth.currentUser

	const docDosesUser = doc(db, `vacinados/${uid}`)
	await setDoc(docDosesUser, { numero_doses: 1 })
}

function LoginAuthGoogle() {
	const { auth, db } = useContext(FirebaseContext);

	const signIn = async () => {
		await signInWithPopup(auth, provider);
		initUserDataOnDB(auth, db)
	}

	// TODO: Show Warn on error
	// TODO: Estilizar e colocar icone do Google

	return (
		<article className="loging-conteiner" onClick={signIn}>
			<span className="icon-google"></span>
			<span className="loging-btn">Faça cadastro com o Google</span>
		</article>
	);
}

export default LoginAuthGoogle;