import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TeamPage from "./components/pages/TeamPage";
import MatchPage from "./components/pages/MatchPage";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/teams/:teamName" exact>
						<TeamPage />
					</Route>
					<Route path="/teams/:teamName/matches/:year">
						<MatchPage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
