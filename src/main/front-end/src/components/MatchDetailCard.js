import React from "react";

const MatchDetailCard = ({ match }) => {
	if (!match) return null;
	return (
		<div className="MatchDetailCard">
			<h3>Latest Matchs</h3>
			<h4>Match Details</h4>
			<h4>
				{match.team1} Vs {match.team2}
			</h4>
		</div>
	);
};

export default MatchDetailCard;
