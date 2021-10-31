import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchDetailCard from "../MatchDetailCard";
import MatchSmallCard from "../MatchSmallCard";

const TeamPage = (props) => {
	const [team, setteam] = useState({ matches: [] });
	const { teamName } = useParams();
	const [state, setstate] = useState(
		`http://localhost:8080/team/${teamName}`
	);

	useEffect(() => {
		const fetchMatches = async () => {
			const response = await fetch(state);
			const data = await response.json();
			setteam(data);
		};
		fetchMatches();
	}, [teamName]);
	if (!team || !team.teamName) {
		return <h1> Team not found</h1>;
	}
	return (
		<div className="App">
			<h1>{team?.teamName}</h1>
			<MatchDetailCard
				teamName={team.teamName}
				match={team?.matches[0]}
			/>
			{team?.matches?.slice(1)?.map((match, index) => (
				<MatchSmallCard
					match={match}
					key={index}
					teamName={team.teamName}
				/>
			))}
		</div>
	);
};

export default TeamPage;
