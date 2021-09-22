import "./index.css";

import ProfileTitle from './ProfileTitle';
import ProfileHint from './ProfileHint';
import SelectDoseStatus from './SelectDoseStatus';
import SaveStatusButton from './SaveStatusButton';

function Profile(props) {
	return (
		<section id="profile-container">
			<header>
				<ProfileTitle />
				<ProfileHint />
			</header>

			<div className="pselects-dose-stts">
				<SelectDoseStatus text="1ª Dose tomada" status={false}/>
				<SelectDoseStatus text="2ª Dose tomada" status={false}/>
				<SelectDoseStatus text="3ª Dose tomada" status={false}/>
				<SelectDoseStatus text="Dose unica tomada" status={false}/>
			</div>

			<SaveStatusButton />
		</section>
	);
}

export default Profile;