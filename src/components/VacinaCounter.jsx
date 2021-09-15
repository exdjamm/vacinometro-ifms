import { useState } from "react";
import "./VacinaCounter.css";

import firebaseConfig from "../FirebaseConfig.json";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, onSnapshot } from 'firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const docRefVacinasSomas = doc(db, "soma_vacina/soma");;

// async function getVacinasContas() {
//   const docRef = doc(db, DOC_VACINA_SOMAS);
//   const docSnapshot = await getDoc(citiesCol);
//   return { ...docSnapshot.data()};
// }

function VacinaCounter({width, height}){
	const style = {
		height: height + "em",
		width: width + "em"
	}

	const [somaVacinados, setSomaVacinados] = useState({soma_1: 0, soma_2: 0});
	
	onSnapshot(docRefVacinasSomas, (snapshot) => {
		const data = { ...snapshot.data()}
		setSomaVacinados(data);
	},  (error) => { throw error;})

	return (
		<article style={style} className="vacinac-conteiner">
			
			<span className="vacinac-1">{somaVacinados.soma_1}</span>	
			<span className="vacinac-2">Segunda dose: {somaVacinados.soma_2}</span>	
	
			
		</article>
	);
}

export default VacinaCounter;