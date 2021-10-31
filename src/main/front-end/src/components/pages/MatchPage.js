import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchDetailCard from "../MatchDetailCard";
import "./MatchPage.scss";

const MatchPage = () => {
	const [matches, setMatches] = useState([]);
	const { teamName, year } = useParams();
	const [url, seturl] = useState(
		`http://localhost:8080/team/${teamName}/matches?year=${year}`
	);

	useEffect(() => {
		const fetchMatches = async () => {
			const response = await fetch(url);
			const data = await response.json();
			setMatches(data);
		};
		fetchMatches();
	}, [teamName, year]);

	return (
		<div className="MatchPage">
			<h1>Match Pages</h1>
			<div>
				<h1 className="page-heading">
					{teamName} matches in {year}
				</h1>
				{matches.map((match) => (
					<MatchDetailCard
						key={match.id}
						teamName={teamName}
						match={match}
					/>
				))}
			</div>
		</div>
	);
};

export default MatchPage;
