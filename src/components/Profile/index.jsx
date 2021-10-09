import { useState, useContext, useEffect } from 'react';

import FirebaseContext from '../../contexts/FirebaseContext';

import ProfileTitle from './ProfileTitle';
import ProfileHint from './ProfileHint';
import SelectDoseStatus from './SelectDoseStatus';
import SaveStatusButton from './SaveStatusButton';

import { doc, getDoc, setDoc} from 'firebase/firestore';

import "./index.css";

function Profile(props) {
	const { auth, db } = useContext(FirebaseContext)
	
	// Expect user be login
	const { uid } = auth.currentUser
	const docUserVacinas = doc(db, `vacinados/${uid}`)

	const [teste, setTeste] = useState(false)
	
	const [dosesStatus, setDosesStatus] = useState(teste)

	useEffect( () => {
		getDoc(docUserVacinas).then( (somaVacinasSnapshot) => {
			setDosesStatus(somaVacinasSnapshot.data())	
		})

		console.log('1')
		
	}, [teste])
	

	const handleChangeDosesStatus = ({currentTarget}) => {
		const name  = currentTarget.getAttribute('name');
	
		const prevStateDose = dosesStatus[name]

		setDosesStatus((prevState) => {
			const nextState =  {
				...prevState,
				[name]: !prevStateDose
			}

			return nextState
		})
	}

	const updateDoseOnDb = (e) => {

		// TODO: While not set, show a popup of a spinner running
		setDoc(docUserVacinas, dosesStatus).then( () => {
			// TODO: When done, show a check popup	
		})
	}

	return (
		<section id="profile-container">
			<header>
				<ProfileTitle />
				<ProfileHint />
			</header>

			<div className="pselects-dose-stts">
				<SelectDoseStatus
					onClick={handleChangeDosesStatus}
					name="dose_1" 
					text="1ª Dose tomada" 
					status={dosesStatus.dose_1}/>
				<SelectDoseStatus
					onClick={handleChangeDosesStatus} 
					name="dose_2" 
					text="2ª Dose tomada" 
					status={dosesStatus.dose_2}/>
				<SelectDoseStatus
					onClick={handleChangeDosesStatus} 
					name="dose_3" 
					text="3ª Dose tomada" 
					status={dosesStatus.dose_3}/>
				<SelectDoseStatus
					onClick={handleChangeDosesStatus} 
					name="dose_unica" 
					text="Dose unica tomada" 
					status={dosesStatus.dose_unica}/>
			</div>

			<SaveStatusButton onClick={updateDoseOnDb}/>
		</section>
	);
}

export default Profile;