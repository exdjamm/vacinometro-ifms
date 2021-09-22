import logo from '../logo.svg';
import './Home.css';

/*
import firebaseConfig from "../FirebaseConfig.json";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/

import Header from '../components/Header';
import VacinaCounter from '../components/VacinaCounter';
import HomeHint from '../components/HomeHint';
import DisclaimerWarn from '../components/DisclaimerWarn';
import CopyrightFooter from '../components/CopyrightFooter';

function Home() {
	return (
		<div id="home-page">
			<Header />
			<VacinaCounter />
			<HomeHint />
			<DisclaimerWarn />
			<CopyrightFooter />
		</div>
	);
}

export default Home;
