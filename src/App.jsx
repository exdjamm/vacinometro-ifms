import { Route, Switch, Redirect } from "react-router-dom";
// import { Routes } from "../routes";

import Home from "./pages/Home";
import UpdateVacina from "./pages/UpdateVacina";

function Router({ component: Component, ...rest }) {
	return (
		<Route {...rest} render={props => (<> <Component {...props} /> </>)} />
	)

}

function App() {
	return (
		<Switch>
			<Router exact path="/" component={Home} />
			<Router exact path="/vacinas" component={UpdateVacina} />
		</Switch>
	);
}

export default App;
