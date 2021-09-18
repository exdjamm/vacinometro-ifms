import { useState } from "react";
import "./index.css";

import firebaseConfig from "../FirebaseConfig.json";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider()
const docRefVacinasSomas = doc(db, "soma_vacina/soma");

const atualizarSoma = async () => {
	const {uid} = auth.currentUser

	const somaVacinasSnapshot = await getDoc(docRefVacinasSomas)

	const {soma_1} =  somaVacinasSnapshot.data()
	updateDoc(docRefVacinasSomas, {"soma_1": (soma_1+1)})	

	const docRef = doc(db, `vacinados/${uid}`)
	await setDoc(docRef, {numero_doses: 1})

	
}

const signIn = async () => {
	await signInWithPopup(auth, provider);
	atualizarSoma()
}

function LoginAuthGoogle(){

	return (
		<article className="loging-conteiner" onClick={signIn}>
			<span className="icon-google"></span>		
			<span className="loging-btn">Faça cadastro com o Google</span>		
		</article>
	);
}

export default LoginAuthGoogle;