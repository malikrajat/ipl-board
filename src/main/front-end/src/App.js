import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TeamPage from "./components/pages/TeamPage";

function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/teams/:teamName">
					<TeamPage />
				</Route>
			</Router>
		</div>
	);
}

export default App;
