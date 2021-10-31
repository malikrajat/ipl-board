import React from "react";
import { Link } from "react-router-dom";

const MatchSmallCard = ({ match, teamName }) => {
	if (!match) return null;
	const otherTeam = teamName === match.teamName ? match.team1 : match.team2;
	return (
		<div className="MatchSmallCard">
			<p>
				Vs <Link to={"/team/" + otherTeam}> {otherTeam}</Link>
			</p>
		</div>
	);
};

export default MatchSmallCard;
