import { useState } from 'react';

import ProfileTitle from './ProfileTitle';
import ProfileHint from './ProfileHint';
import SelectDoseStatus from './SelectDoseStatus';
import SaveStatusButton from './SaveStatusButton';

import "./index.css";

function Profile(props) {
	const [dosesStatus, setDosesStatus] = useState({dose_1:false, dose_2:false, dose_3:false, dose_unica:false})

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

			<SaveStatusButton />
		</section>
	);
}

export default Profile;