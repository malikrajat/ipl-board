import React from "react";
import { Link } from "react-router-dom";

const MatchDetailCard = ({ match, teamName }) => {
	if (!match) return null;
	const otherTeam = teamName === match.teamName ? match.team1 : match.team2;
	return (
		<div className="MatchDetailCard">
			<h3>Latest Matches</h3>
			<h4>
				vs <Link to={"/team/" + otherTeam}> {otherTeam}</Link>
			</h4>
			<h2>{match.date}</h2>
			<h3>{match.venue}</h3>
			<p>
				{match.matchWinner} Won By {match.resultMargin} {match.result}
			</p>
		</div>
	);
};

export default MatchDetailCard;
