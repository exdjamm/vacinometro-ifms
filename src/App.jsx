import { Route, Switch, Redirect } from "react-router-dom";
// import { Routes } from "../routes";

import Home from "./pages/Home";
import UpdateVacina from "./pages/UpdateVacina";

import FirebaseContext from './contexts/FirebaseContext';

import firebaseConfig from "./FirebaseConfig.json";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

const firebaseContext = {
  app: app,
  auth: auth,
  db: db
}

function Router({component: Component, ...rest}) {
 	const [user] = useAuthState(auth)
 	
 	const Render = (props) => {
 		

		return (
			<FirebaseContext.Provider value={{...firebaseContext, user}}>
				<> 
					<Component {... props}/> 
				</>   
			</FirebaseContext.Provider>
		)
	}

	return (
		<Route {...rest} render={Render}/>
	)

}

function App() {
	return (
		<Switch>
			<Router exact path="/" component={Home}/>
			<Router exact path="/vacinas" component={UpdateVacina}/>
		</Switch>
	);
}

export default App;
