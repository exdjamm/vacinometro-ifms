import { useState, useContext } from "react";

import VacinaCounterHeader from './VacinaCounterHeader';
import VacinaDoseCounter from './VacinaDoseCounter';

import FirebaseContext from '../../contexts/FirebaseContext'

import { doc, onSnapshot } from 'firebase/firestore';

import "./index.css";

function VacinaCounter() {
	const [somaVacinados, setSomaVacinados] = useState({ soma_1: 0, soma_2: 0, soma_3:0 });
	const { db } = useContext(FirebaseContext);
	
	const docRefVacinasSomas = doc(db, "soma_vacina/soma");

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