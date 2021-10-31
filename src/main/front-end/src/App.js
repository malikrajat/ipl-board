import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TeamPage from "./components/pages/TeamPage";
import { MatchPage } from "./components/pages/MatchPage";
import { HomePage } from "./components/pages/HomePage";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="/teams/:teamName">
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
