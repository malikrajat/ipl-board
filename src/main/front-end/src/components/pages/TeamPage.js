import React, { useEffect, useState } from "react";
import MatchDetailCard from "../MatchDetailCard";
import MatchSmallCard from "../MatchSmallCard";

const TeamPage = (props) => {
	const [state, setstate] = useState(
		"http://localhost:8080/team/Delhi%20Capitels"
	);
	const [team, setteam] = useState({ matches: [] });
	useEffect(() => {
		const fetchMatches = async () => {
			const response = await fetch(state);
			const data = await response.json();
			setteam(data);
		};
		fetchMatches();
	}, []);
	return (
		<div className="App">
			<h1>{team?.teamName}</h1>
			<MatchDetailCard match={team.matches[0]} />
			{team?.matches?.slice(1)?.map((match) => (
				<MatchSmallCard match={match} />
			))}
		</div>
	);
};

export default TeamPage;
