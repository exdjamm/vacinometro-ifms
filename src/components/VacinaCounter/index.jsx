import { useState } from "react";
import "./index.css";

import firebaseConfig from "./../../FirebaseConfig.json";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, onSnapshot } from 'firebase/firestore';
// // Follow this pattern to import other Firebase services
// // import { } from 'firebase/<service>';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const docRefVacinasSomas = doc(db, "soma_vacina/soma");;

// async function getVacinasContas() {
//   const docRef = doc(db, DOC_VACINA_SOMAS);
//   const docSnapshot = await getDoc(citiesCol);
//   return { ...docSnapshot.data()};
// }

import VacinaCounterHeader from './VacinaCounterHeader';
import VacinaDoseCounter from './VacinaDoseCounter';

function VacinaCounter() {
	const [somaVacinados, setSomaVacinados] = useState({ soma_1: 0, soma_2: 0, soma_3:0 });

	onSnapshot(docRefVacinasSomas, (snapshot) => {
		const data = { ...snapshot.data() }
		setSomaVacinados(data);
	}, (error) => { throw error; })

	return (
		<section id="vacina-counter">
			<VacinaCounterHeader />
			<div id="dose-counter-container">
				<VacinaDoseCounter doseValue={somaVacinados.soma_1} doseTitle="1ª Dose" />
				<VacinaDoseCounter doseValue={somaVacinados.soma_2} doseTitle="2ª Dose" doseSubTitle="ou dose única"/>
				<VacinaDoseCounter doseValue={somaVacinados.soma_3} doseTitle="3ª Dose" />
			</div>
		</section>
	);
}

export default VacinaCounter;